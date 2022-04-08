import benchmark.BlasBenchmarkResult
import benchmark.BlasDatapoint
import benchmark.Component
import benchmark.Conversion
import benchmark.ConversionBenchmarkResult
import benchmark.ConversionDatapoint
import benchmark.Format
import benchmark.Operation
import benchmark.Preconditioner
import benchmark.PreconditionerBenchmarkResult
import benchmark.PreconditionerDatapoint
import benchmark.Solver
import benchmark.SolverBenchmarkResult
import benchmark.SolverDatapoint
import benchmark.SpmvBenchmarkResult
import benchmark.SpmvDatapoint
import git.BenchmarkResult
import git.Commit
import git.Device
import kotlin.js.Date

fun BenchmarkResult.dirtyEquals(other: BenchmarkResult) = this.toString() == other.toString()

val COMMIT_A = Commit("commitasha", "", Date(), "")
val COMMIT_B = Commit("commitbsha", "", Date(), "")
val DEVICE = Device("gamer")

val COMMIT_A_RESULT = SpmvBenchmarkResult(
    COMMIT_A,
    DEVICE,
    (1..5).map {
        SpmvDatapoint(
            "", it * 10, it * 10, it * 10,
            listOf(
                Format(name = "", storage = 1, time = 1.0, maxRelativeNorm2 = 1.0, completed = true)
            ),
        )
    }
)

val COMMIT_B_RESULT = SpmvBenchmarkResult(
    COMMIT_B,
    DEVICE,
    (1..5).map {
        SpmvDatapoint(
            "", it * 10, it * 10, it * 10,
            listOf(
                Format(name = "", storage = 1, time = 1.0, maxRelativeNorm2 = 1.0, completed = true)
            ),
        )
    }
)

val SPMV_RESULT = SpmvBenchmarkResult(
    COMMIT_A,
    DEVICE,
    (1..5).map {
        SpmvDatapoint(
            "", it * 10, it * 10, it * 10,
            listOf(
                Format(name = "", storage = 1, time = 1.0, maxRelativeNorm2 = 1.0, completed = true)
            ),
        )
    }
)

val SOLVER_RESULT = SolverBenchmarkResult(
    COMMIT_A,
    DEVICE,
    (1..5).map { index ->
        SolverDatapoint(
            "", index * 10, index * 10, index * 10, "optimal",
            listOf(
                Solver(
                    "",
                    generateComponents = listOf(Component("", 1.0)),
                    generateTotalTime = 1.0,
                    recurrentResiduals = (1..100).map { it.toDouble() },
                    applyComponents = listOf(Component("", 1.0)),
                    applyIterations = index * 10,
                    applyTotalTime = 1.0,
                    completed = true
                )
            )
        )
    }
)

val CONVERSION_RESULT = ConversionBenchmarkResult(
    COMMIT_A,
    DEVICE,
    (1..5).map {
        ConversionDatapoint(
            "", it * 10, it * 10, it * 10,
            listOf(
                Conversion("", 1.0, true),
            )
        )
    },
)

val BLAS_RESULT = BlasBenchmarkResult(
    COMMIT_A,
    DEVICE,
    (1..5).map {
        BlasDatapoint(
            it * 10,
            operations = listOf(
                Operation("", 1.0, 1.0, it * 1.0, true),
            )
        )
    }
)

val PRECONDITIONER_RESULT = PreconditionerBenchmarkResult(
    COMMIT_A,
    DEVICE,
    (1..5).map {
        PreconditionerDatapoint(
            "", it * 10, it * 10, it * 10,
            listOf(
                Preconditioner(
                    "",
                    listOf(
                        Component("", it.toDouble()),
                    ),
                    it.toDouble(),
                    listOf(
                        Component("", it.toDouble())
                    ),
                    it.toDouble(),
                    true
                )
            )
        )
    }
)
