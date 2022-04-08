package processing.transforms.matrix.preconditioner

import benchmark.PreconditionerBenchmarkResult
import benchmark.PreconditionerDatapoint
import git.BenchmarkResult
import processing.transforms.InvalidPlotTransformException
import processing.transforms.PlotConfiguration
import processing.transforms.PlottableData
import processing.transforms.filterMatrixDatapoints
import processing.transforms.matrix.MatrixPlotTransform

/**
 * Interface for transforms using [PreconditionerBenchmarkResult].
 */
abstract class PreconditionerPlotTransform : MatrixPlotTransform() {
    override fun transform(results: List<BenchmarkResult>, config: PlotConfiguration): PlottableData {
        for (result in results) if (result !is PreconditionerBenchmarkResult) throw InvalidPlotTransformException("Invalid benchmark type, only PreconditionerBenchmarkResult is allowed")

        checkNumInputs(results.size)

        val filteredResults = results.filterIsInstance<PreconditionerBenchmarkResult>().map {
            PreconditionerBenchmarkResult(
                commit = it.commit,
                device = it.device,
                datapoints = filterMatrixDatapoints(it.datapoints, config).filterIsInstance<PreconditionerDatapoint>(),
            )
        }

        return transformPreconditioner(filteredResults, config)
    }

    /**
     * Transforms the benchmark data to data that is plottable
     *
     * @param benchmarkResults list of preconditioner benchmark results
     * @return [PlottableData] object containing the data
     */
    abstract fun transformPreconditioner(
        benchmarkResults: List<PreconditionerBenchmarkResult>,
        config: PlotConfiguration,
    ): PlottableData
}
