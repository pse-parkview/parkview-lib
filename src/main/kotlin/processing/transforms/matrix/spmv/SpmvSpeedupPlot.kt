package processing.transforms.matrix.spmv

import benchmark.SpmvBenchmarkResult
import benchmark.SpmvDatapoint
import git.BenchmarkResult
import processing.PlotOption
import processing.PlotType
import processing.transforms.PlotConfiguration
import processing.transforms.PlotOptions
import processing.transforms.PlotPoint
import processing.transforms.PlottableData
import processing.transforms.PointDataset
import processing.transforms.matrix.MatrixOptions

class SpmvSpeedupPlot : SpmvPlotTransform() {
    override val numInputsRange = 2..2
    override val plottableAs = listOf(PlotType.Line, PlotType.Scatter)
    override val name = "Speedup Plot"
    override fun getMatrixPlotOptions(results: List<BenchmarkResult>): List<PlotOption> = listOf(
        MatrixOptions.xAxis,
        PlotOptions.comparison.realizeOption(results.toTypedArray()),
    )

    override fun transformSpmv(
        benchmarkResults: List<SpmvBenchmarkResult>,
        config: PlotConfiguration,
    ): PlottableData {
        val seriesByName: MutableMap<String, MutableList<PlotPoint>> = mutableMapOf()

        val datapointsA: List<SpmvDatapoint>
        val datapointsB: List<SpmvDatapoint>

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

            for (formatA in datapointA.formats) {
                val formatB = datapointB.formats.find { it.name == formatA.name } ?: continue
                if (!formatA.completed or !formatB.completed) continue

                seriesByName.getOrPut(formatA.name) { mutableListOf() } += PlotPoint(
                    x = datapointA.getXAxisByConfig(config),
                    y = formatA.time / formatB.time
                )
            }
        }

        return PlottableData(
            seriesByName.map { (key, value) -> PointDataset(label = key, data = value.sortedBy { it.x }.toTypedArray()) }.toTypedArray()
        )
    }
}
