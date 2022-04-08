package benchmark

import git.BenchmarkResult
import git.Datapoint

/**
 * Specific datapoint for matrix benchmark, contains information about the problem setup
 */
interface MatrixDatapoint : Datapoint {
    val name: String
    val rows: Int
    val columns: Int
    val nonzeros: Int
}

/**
 * Interface for benchmarks using a matrix as a problem description
 */
interface MatrixBenchmarkResult : BenchmarkResult {
    override val datapoints: List<MatrixDatapoint>
}
