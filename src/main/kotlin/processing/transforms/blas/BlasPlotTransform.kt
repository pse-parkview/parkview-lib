package processing.transforms.blas

import benchmark.BlasBenchmarkResult
import benchmark.BlasDatapoint
import benchmark.Operation
import git.BenchmarkResult
import processing.PlotOption
import processing.transforms.InvalidPlotConfigValueException
import processing.transforms.InvalidPlotTransformException
import processing.transforms.PlotConfiguration
import processing.transforms.PlotTransform
import processing.transforms.PlottableData
import processing.transforms.filterBlasDatapoints

/**
 * Interface for transforms using [BlasBenchmarkResult].
 */
abstract class BlasPlotTransform : PlotTransform {
    override fun transform(results: List<BenchmarkResult>, config: PlotConfiguration): PlottableData {
        for (result in results) if (result !is BlasBenchmarkResult) throw InvalidPlotTransformException("Invalid benchmark type, only BlasBenchmarkResult is allowed")

        checkNumInputs(results.size)

        val filteredResults = results.filterIsInstance<BlasBenchmarkResult>().map {
            BlasBenchmarkResult(
                commit = it.commit,
                device = it.device,
                datapoints = filterBlasDatapoints(it.datapoints, config),
            )
        }

        return transformBlas(filteredResults, config)
    }

    final override fun getAvailableOptions(results: List<BenchmarkResult>): List<PlotOption> =
        getBlasPlotOptions(results) + listOf(
            BlasOptions.minN.realizeOption(results.toTypedArray()),
            BlasOptions.maxN.realizeOption(results.toTypedArray()),
            BlasOptions.minR.realizeOption(results.toTypedArray()),
            BlasOptions.maxR.realizeOption(results.toTypedArray()),
            BlasOptions.minM.realizeOption(results.toTypedArray()),
            BlasOptions.maxM.realizeOption(results.toTypedArray()),
            BlasOptions.minK.realizeOption(results.toTypedArray()),
            BlasOptions.maxK.realizeOption(results.toTypedArray()),
        )

    abstract fun getBlasPlotOptions(results: List<BenchmarkResult>): List<PlotOption>

    /**
     * Transforms the benchmark data to data that is plottable
     *
     * @param benchmarkResults list of blas benchmark results
     * @return [PlottableData] object containing the data
     */
    abstract fun transformBlas(benchmarkResults: List<BlasBenchmarkResult>, config: PlotConfiguration): PlottableData

    protected fun Operation.getYAxisByOption(config: PlotConfiguration): Double =
        when (config.getCategoricalOption(BlasOptions.yAxis)) {
            "time" -> this.time
            "flops" -> this.flops
            "bandwidth" -> this.bandwidth
            else -> throw InvalidPlotConfigValueException(
                config.getCategoricalOption(BlasOptions.yAxis),
                BlasOptions.yAxis.name
            )
        }

    protected fun BlasDatapoint.getXAxisByConfig(config: PlotConfiguration): Int =
        when (config.getCategoricalOption(BlasOptions.xAxis)) {
            "n" -> this.n
            "r" -> this.r
            "m" -> this.m
            "k" -> this.k
            else -> throw InvalidPlotConfigValueException(
                config.getCategoricalOption(BlasOptions.xAxis),
                BlasOptions.xAxis.name
            )
        }
}
