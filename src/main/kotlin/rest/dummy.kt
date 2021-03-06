package rest

import benchmark.Format
import benchmark.SpmvBenchmarkResult
import benchmark.SpmvDatapoint
import database.DatabaseHandler
import database.MissingBenchmarkResultException
import git.*

val DUMMY_BRANCH = "test"
val DUMMY_DEVICE = Device("meter")
val DUMMY_COMMIT = Commit("peter")

val SPMV_DUMMY_RESULT = SpmvBenchmarkResult(DUMMY_COMMIT, DUMMY_DEVICE, (1..5).map {
    SpmvDatapoint(
        "Datapoint_$it", it * 10, it * 10, it * 10,
        listOf(
            Format(
                name = "format_name", storage = 1, time = 1.0, maxRelativeNorm2 = 1.0, completed = true
            )
        ),
    )
}
)

class DummyRepositoryHandler : RepositoryHandler {
    init {
        DUMMY_COMMIT.addDevice(DUMMY_DEVICE)
    }

    override fun fetchGitHistoryByBranch(branch: String, page: Int, benchmarkType: BenchmarkType): Array<Commit> =
        if (branch == DUMMY_BRANCH) {
            arrayOf(DUMMY_COMMIT)
        } else {
            emptyArray()
        }

    override fun getAvailableBranches(): Array<String> = arrayOf(DUMMY_BRANCH)

    override fun getNumberOfPages(branch: String): Int = 1
}

class DummyDatabaseHandler : DatabaseHandler {
    init {
        DUMMY_COMMIT.addDevice(DUMMY_DEVICE)
    }

    override fun insertBenchmarkResults(results: Array<BenchmarkResult>) {
        return
    }

    override fun fetchBenchmarkResult(commit: Commit, device: Device, benchmark: BenchmarkType): BenchmarkResult =
        if (hasDataAvailable(commit, device, benchmark)) {
            SPMV_DUMMY_RESULT
        } else {
            throw MissingBenchmarkResultException(commit, device, benchmark)
        }

    override fun hasDataAvailable(commit: Commit, device: Device, benchmark: BenchmarkType): Boolean =
        commit == DUMMY_COMMIT && device == DUMMY_DEVICE && benchmark == BenchmarkType.Spmv


    override fun getAvailableDevicesForCommit(commit: Commit, benchmark: BenchmarkType): Array<Device> =
        if (commit == DUMMY_COMMIT && benchmark == BenchmarkType.Spmv) {
            arrayOf(DUMMY_DEVICE)
        } else {
            emptyArray()
        }
}
