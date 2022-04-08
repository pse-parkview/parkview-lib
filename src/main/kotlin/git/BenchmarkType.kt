package git

/**
 * Available benchmark types
 */
enum class BenchmarkType {
    Spmv,
    Solver,
    Preconditioner,
    Conversion,
    Blas,
}
