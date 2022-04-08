package processing.transforms.matrix.spmv

import benchmark.SpmvBenchmarkResult
import git.BenchmarkResult
import processing.CategoricalOption
import processing.PlotOption
import processing.PlotType
import processing.transforms.InvalidPlotConfigValueException
import processing.transforms.PlotConfiguration
import processing.transforms.PlotPoint
import processing.transforms.PlottableData
import processing.transforms.PointDataset
import processing.transforms.matrix.MatrixOptions

class SpmvSingleScatterPlot : SpmvPlotTransform() {
    override val numInputsRange = 1..1
    override val plottableAs = listOf(PlotType.Scatter)
    override val name = "Scatter Plot"

    private val yAxisOption = CategoricalOption(
        name = "yAxis",
        options = arrayOf("bandwidth", "time"),
        description = "Value that gets displayed on the y axis"
    )

    override fun getMatrixPlotOptions(results: List<BenchmarkResult>): List<PlotOption> = listOf(
        MatrixOptions.xAxis,
        yAxisOption,
    )

    override fun transformSpmv(
        benchmarkResults: List<SpmvBenchmarkResult>,
        config: PlotConfiguration,
    ): PlottableData {
        val benchmarkResult = benchmarkResults.first()

        val seriesByName: MutableMap<String, MutableList<PlotPoint>> = mutableMapOf()

        for (datapoint in benchmarkResult.datapoints) {
            for (format in datapoint.formats) {
                if (!format.completed) continue
                seriesByName.getOrPut(format.name) { mutableListOf() } += PlotPoint(
                    x = datapoint.getXAxisByConfig(config),
                    y = when (config.getCategoricalOption(yAxisOption)) {
                        "bandwidth" -> (format.storage + datapoint.rows + datapoint.columns) / format.time
                        "time" -> format.time
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
}
