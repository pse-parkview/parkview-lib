package processing.transforms.matrix.conversion

import benchmark.ConversionBenchmarkResult
import benchmark.ConversionDatapoint
import git.BenchmarkResult
import processing.PlotOption
import processing.PlotType
import processing.transforms.PlotConfiguration
import processing.transforms.PlotOptions
import processing.transforms.PlotPoint
import processing.transforms.PlottableData
import processing.transforms.PointDataset
import processing.transforms.matrix.MatrixOptions

class ConversionSpeedupPlot : ConversionPlotTransform() {
    override val numInputsRange = 2..2
    override val plottableAs = listOf(PlotType.Line, PlotType.Scatter)
    override val name = "Speedup Plot"
    override fun getMatrixPlotOptions(results: List<BenchmarkResult>): List<PlotOption> = listOf(
        MatrixOptions.xAxis,
        PlotOptions.comparison.realizeOption(results.toTypedArray()),
    )

    override fun transformConversion(
        benchmarkResults: List<ConversionBenchmarkResult>,
        config: PlotConfiguration,
    ): PlottableData {
        val seriesByName: MutableMap<String, MutableList<PlotPoint>> = mutableMapOf()

        val datapointsA: List<ConversionDatapoint>
        val datapointsB: List<ConversionDatapoint>

        if (config.getCategoricalOption(PlotOptions.comparison) == benchmarkResults.first().identifier) {
            datapointsA = benchmarkResults[0].datapoints
            datapointsB = benchmarkResults[1].datapoints
        } else {
            datapointsA = benchmarkResults[1].datapoints
            datapointsB = benchmarkResults[0].datapoints
        }

        for (datapointA in datapointsA) {
            val datapointB = datapointsB.find {
                (it.nonzeros == datapointA.nonzeros) and
                    (it.rows == datapointA.rows) and
                    (it.columns == datapointA.columns)
            } ?: continue

            for (conversionA in datapointA.conversions) {
                val conversionB = datapointB.conversions.find { it.name == conversionA.name } ?: continue
                if (!conversionA.completed or !conversionB.completed) continue

                seriesByName.getOrPut(conversionA.name) { mutableListOf() } += PlotPoint(
                    x = datapointA.getXAxisByConfig(config),
                    y = conversionA.time / conversionB.time,
                )
            }
        }

        return PlottableData(
            seriesByName.map { (key, value) -> PointDataset(label = key, data = value.sortedBy { it.x }.toTypedArray()) }.toTypedArray()
        )
    }
}
