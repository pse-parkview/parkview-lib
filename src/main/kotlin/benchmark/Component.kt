package benchmark

/**
 * A single component, part of [PreconditionerBenchmarkResult] and
 * [SolverBenchmarkResult].
 *
 * @param name component name
 * @param runtime runtime for component
 */
data class Component(
    val name: String,
    val runtime: Double,
)
