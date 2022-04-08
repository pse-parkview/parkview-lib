package processing.transforms.matrix.solver

import benchmark.SolverBenchmarkResult
import benchmark.SolverDatapoint
import git.BenchmarkResult
import processing.transforms.InvalidPlotTransformException
import processing.transforms.PlotConfiguration
import processing.transforms.PlottableData
import processing.transforms.filterMatrixDatapoints
import processing.transforms.matrix.MatrixPlotTransform

/**
 * Interface for transforms using [SolverBenchmarkResult].
 */
abstract class SolverPlotTransform : MatrixPlotTransform() {
    override fun transform(results: List<BenchmarkResult>, config: PlotConfiguration): PlottableData {
        for (result in results) if (result !is SolverBenchmarkResult) throw InvalidPlotTransformException("Invalid benchmark type, only SolverBenchmarkResult is allowed")

        checkNumInputs(results.size)

        val filteredResults = results.filterIsInstance<SolverBenchmarkResult>().map {
            SolverBenchmarkResult(
                commit = it.commit,
                device = it.device,
                datapoints = filterMatrixDatapoints(it.datapoints, config).filterIsInstance<SolverDatapoint>(),
            )
        }

        return transformSolver(filteredResults, config)
    }

    /**
     * Transforms the benchmark data to data that is plottable
     *
     * @param benchmarkResults list of solver benchmark results
     * @return [PlottableData] object containing the data
     */
    abstract fun transformSolver(
        benchmarkResults: List<SolverBenchmarkResult>,
        config: PlotConfiguration,
    ): PlottableData
}
