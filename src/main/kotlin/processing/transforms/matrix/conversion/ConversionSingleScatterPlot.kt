package processing.transforms.matrix.conversion

import benchmark.ConversionBenchmarkResult
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

class ConversionSingleScatterPlot : ConversionPlotTransform() {
    override val numInputsRange = 1..1
    override val plottableAs: List<PlotType> = listOf(PlotType.Scatter)
    override val name: String = "Scatter Plot"

    private val yAxisOption = CategoricalOption(
        name = "yAxis",
        options = arrayOf("bandwidth", "time"),
        description = "Value that gets displayed on the y axis"
    )

    override fun getMatrixPlotOptions(results: List<BenchmarkResult>): List<PlotOption> = listOf(
        MatrixOptions.xAxis,
        yAxisOption,
    )

    override fun transformConversion(
        benchmarkResults: List<ConversionBenchmarkResult>,
        config: PlotConfiguration,
    ): PlottableData {
        val benchmarkResult = benchmarkResults[0]

        val seriesByName: MutableMap<String, MutableList<PlotPoint>> = mutableMapOf()

        for (datapoint in benchmarkResult.datapoints) {
            for (conversion in datapoint.conversions) {
                if (!conversion.completed) continue
                seriesByName.getOrPut(conversion.name) { mutableListOf() } += PlotPoint(
                    x = datapoint.getXAxisByConfig(config),
                    y = when (config.getCategoricalOption(yAxisOption)) {
                        "bandwidth" -> datapoint.nonzeros / conversion.time
                        "time" -> conversion.time
                        else -> throw InvalidPlotConfigValueException(
                            config.getCategoricalOption(yAxisOption),
                            yAxisOption.name
                        )
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
