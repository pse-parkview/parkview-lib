package processing.transforms.blas

import benchmark.BlasBenchmarkResult
import git.BenchmarkResult
import processing.PlotOption
import processing.PlotType
import processing.transforms.PlotConfiguration
import processing.transforms.PlotPoint
import processing.transforms.PlottableData
import processing.transforms.PointDataset

class SingleBlasPlot : BlasPlotTransform() {
    override val numInputsRange: IntRange = 1..1
    override val plottableAs: List<PlotType> = listOf(PlotType.Scatter, PlotType.Line)
    override val name: String = "Blas Plot"

    override fun getBlasPlotOptions(results: List<BenchmarkResult>): List<PlotOption> = listOf(
        BlasOptions.xAxis,
        BlasOptions.yAxis,
    )

    override fun transformBlas(
        benchmarkResults: List<BlasBenchmarkResult>,
        config: PlotConfiguration,
    ): PlottableData {
        val benchmarkResult = benchmarkResults.first()

        val seriesByName: MutableMap<String, MutableList<PlotPoint>> = mutableMapOf()
        for (datapoint in benchmarkResult.datapoints) {
            for (operation in datapoint.operations) {
                if (!operation.completed) continue
                seriesByName.getOrPut(operation.name) { mutableListOf() } += PlotPoint(
                    x = datapoint.getXAxisByConfig(config).toDouble(),
                    y = operation.getYAxisByOption(config)
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
