package benchmark

import git.BenchmarkType
import git.Commit
import git.Device

/**
 * A single Solver, part of [SolverBenchmarkResult].
 *
 * @param name
 * @param recurrentResiduals
 * @param trueResiduals
 * @param implicitResiduals
 * @param iterationTimestamps
 * @param rhsNorm
 * @param residualNorm
 * @param completed
 * @param generateComponents
 * @param generateTotalTime
 * @param applyComponents
 * @param applyTotalTime
 * @param applyIterations
 */
data class Solver(
    val name: String,
    val recurrentResiduals: List<Double> = emptyList(),
    val trueResiduals: List<Double> = emptyList(),
    val implicitResiduals: List<Double> = emptyList(),
    val iterationTimestamps: List<Double> = emptyList(),
    val rhsNorm: Double = 0.0,
    val residualNorm: Double = 0.0,
    val completed: Boolean,
    val generateComponents: List<Component>,
    val generateTotalTime: Double,
    val applyComponents: List<Component>,
    val applyTotalTime: Double,
    val applyIterations: Int,
)

/**
 * A single datapoint, contains the problem description for the matrix and
 * a list of solvers.
 *
 * @param rows number of rows
 * @param columns number of columns
 * @param nonzeros number of nonzeros
 * @param solvers list of [Solver]
 */
data class SolverDatapoint(
    override val name: String,
    override val rows: Int,
    override val columns: Int,
    override val nonzeros: Int,
    val optimal: String,
    val solvers: List<Solver>,
    val spmv: List<Format> = emptyList(),
) : MatrixDatapoint

/**
 * This is a benchmark result for the benchmarks
 * of the Solver format and type.
 *
 * @param commit commit this benchmark has been run on
 * @param device device this benchmark has been run on
 * @param datapoints datapoints for this benchmark
 */
data class SolverBenchmarkResult(
    override val commit: Commit,
    override val device: Device,
    override val datapoints: List<SolverDatapoint>,
) : MatrixBenchmarkResult {
    override val benchmark: BenchmarkType = BenchmarkType.Solver

    override val summaryValues: Map<String, Double>
        by lazy { calcBandwidths().mapValues { (_, values) -> values.sorted()[values.size / 2] } }

    private fun calcBandwidths(): Map<String, List<Double>> {
        val bandwidths = mutableMapOf<String, MutableList<Double>>()

        for (datapoint in datapoints) {
            for (solver in datapoint.solvers) {
                if (!solver.completed) continue
                bandwidths.getOrPut(solver.name) { mutableListOf() }.add(solver.applyIterations.toDouble())
            }
        }

        return bandwidths
    }
}
