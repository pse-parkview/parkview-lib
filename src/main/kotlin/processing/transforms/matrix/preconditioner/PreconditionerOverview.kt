package processing.transforms.matrix.preconditioner

import benchmark.PreconditionerBenchmarkResult
import git.BenchmarkResult
import processing.CategoricalOption
import processing.PlotOption
import processing.PlotType
import processing.transforms.InvalidPlotConfigValueException
import processing.transforms.PlotConfiguration
import processing.transforms.PlotPoint
import processing.transforms.PlottableData
import processing.transforms.PointDataset

class PreconditionerOverview : PreconditionerPlotTransform() {
    override val numInputsRange: IntRange = 1..1
    override val plottableAs: List<PlotType> = listOf(PlotType.Scatter)
    override val name: String = "PreconditionerOverview"

    private val yAxisOption = CategoricalOption(
        name = "yAxis",
        options = arrayOf("generate_time", "apply_time"),
        description = "Value that gets displayed on the y axis"
    )

    private val xAxisOption = CategoricalOption(
        name = "xAxis",
        options = arrayOf("iteration_timestamps", "array_index"),
        description = "Value that gets displayed on the x axis",
    )

    override fun transformPreconditioner(
        benchmarkResults: List<PreconditionerBenchmarkResult>,
        config: PlotConfiguration,
    ): PlottableData {
        val benchmarkResult = benchmarkResults.first()

        val seriesByName: MutableMap<String, MutableList<PlotPoint>> = mutableMapOf()

        for (datapoint in benchmarkResult.datapoints) {
            for (precond in datapoint.preconditioners) {
                if (!precond.completed) continue
                seriesByName.getOrPut(precond.name) { mutableListOf() } += PlotPoint(
                    x = datapoint.getXAxisByConfig(config),
                    y = when (config.getCategoricalOption(yAxisOption)) {
                        "generate_time" -> precond.generateTime
                        "apply_time" -> precond.applyTime
                        else -> throw InvalidPlotConfigValueException(config.getCategoricalOption(yAxisOption), "yAxis")
                    },

                )
            }
        }

        return PlottableData(
            seriesByName.map { (key, value) ->
                PointDataset(
                    label = key,
                    data = value.sortedBy { it.x }.toTypedArray()
                )
            }.toTypedArray()
        )
    }

    override fun getMatrixPlotOptions(results: List<BenchmarkResult>): List<PlotOption> = listOf(
        xAxisOption,
        yAxisOption,
    )
}
