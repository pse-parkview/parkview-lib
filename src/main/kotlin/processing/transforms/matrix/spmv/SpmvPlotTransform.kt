package processing.transforms.matrix.spmv

import benchmark.SpmvBenchmarkResult
import benchmark.SpmvDatapoint
import git.BenchmarkResult
import processing.transforms.InvalidPlotTransformException
import processing.transforms.PlotConfiguration
import processing.transforms.PlottableData
import processing.transforms.filterMatrixDatapoints
import processing.transforms.matrix.MatrixPlotTransform

/**
 * Interface for transforms using [SpmvBenchmarkResult].
 */
abstract class SpmvPlotTransform : MatrixPlotTransform() {
    override fun transform(results: List<BenchmarkResult>, config: PlotConfiguration): PlottableData {
        for (result in results) if (result !is SpmvBenchmarkResult) throw InvalidPlotTransformException("Invalid benchmark type, only SpmvBenchmarkResult is allowed")

        checkNumInputs(results.size)

        val filteredResults = results.filterIsInstance<SpmvBenchmarkResult>().map {
            SpmvBenchmarkResult(
                commit = it.commit,
                device = it.device,
                datapoints = filterMatrixDatapoints(it.datapoints, config).filterIsInstance<SpmvDatapoint>(),
            )
        }

        return transformSpmv(filteredResults, config)
    }

    /**
     * Transforms the benchmark data to data that is plottable
     *
     * @param benchmarkResults list of spmv benchmark results
     * @return [PlottableData] object containing the data
     */
    abstract fun transformSpmv(benchmarkResults: List<SpmvBenchmarkResult>, config: PlotConfiguration): PlottableData
}
