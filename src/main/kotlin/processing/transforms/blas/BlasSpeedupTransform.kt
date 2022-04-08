package processing.transforms.blas

import benchmark.BlasBenchmarkResult
import benchmark.BlasDatapoint
import git.BenchmarkResult
import processing.PlotOption
import processing.PlotType
import processing.transforms.PlotConfiguration
import processing.transforms.PlotOptions
import processing.transforms.PlotPoint
import processing.transforms.PlottableData
import processing.transforms.PointDataset

class BlasSpeedupTransform : BlasPlotTransform() {
    override val numInputsRange = 2..2
    override val plottableAs = listOf(PlotType.Line, PlotType.Scatter)
    override val name = "Speedup Plot"
    override fun getBlasPlotOptions(results: List<BenchmarkResult>): List<PlotOption> = listOf(
        BlasOptions.xAxis,
        PlotOptions.comparison.realizeOption(results.toTypedArray()),
    )

    override fun transformBlas(
        benchmarkResults: List<BlasBenchmarkResult>,
        config: PlotConfiguration,
    ): PlottableData {
        val seriesByName: MutableMap<String, MutableList<PlotPoint>> = mutableMapOf()

        val datapointsA: List<BlasDatapoint>
        val datapointsB: List<BlasDatapoint>

        if (config.getCategoricalOption(PlotOptions.comparison) == benchmarkResults.first().identifier) {
            datapointsA = benchmarkResults[0].datapoints
            datapointsB = benchmarkResults[1].datapoints
        } else {
            datapointsA = benchmarkResults[1].datapoints
            datapointsB = benchmarkResults[0].datapoints
        }

        for (datapointA in datapointsA) {
            val datapointB = datapointsB.find {
                (it.n == datapointA.n) and (it.m == datapointA.m) and (it.r == datapointA.r) and (it.k == datapointA.k)
            } ?: continue

            for (operationA in datapointA.operations) {
                val operationB = datapointB.operations.find { it.name == operationA.name } ?: continue
                if (!operationA.completed or !operationB.completed) continue

                seriesByName.getOrPut(operationA.name) { mutableListOf() } += PlotPoint(
                    x = datapointA.getXAxisByConfig(config).toDouble(),
                    y = operationA.time / operationB.time
                )
            }
        }

        return PlottableData(
            seriesByName.map { (key, value) -> PointDataset(label = key, data = value.sortedBy { it.x }.toTypedArray()) }.toTypedArray()
        )
    }
}
