package database

import git.BenchmarkResult
import git.BenchmarkType
import git.Commit
import git.Device

/**
 * Interface for accessing a database. It offers methods for
 * storing, updating and retrieving commits and benchmark results
 */
interface DatabaseHandler {
    /**
     * Updates existing benchmark results in the database with the ones given as a
     * parameter or adds them to the database if they dont exist yet. If a benchmark result
     * for the same commit, device, benchmark, problem setup and time already exists, it gets replaced.
     *
     * @param results list of [benchmark results][BenchmarkResult] to update
     */
    @JsName("insertBenchmarkResults")
    fun insertBenchmarkResults(results: Array<BenchmarkResult>)

    /**
     * Fetches a single benchmark result for the given commit, device and
     * benchmark type.
     *
     * @param commit chosen commit
     * @param device type of device
     * @param benchmark type of benchmark
     * @return wanted benchmark result
     *
     * @throws MissingBenchmarkResultException if the wanted benchmark result is not available
     */
    @JsName("fetchBenchmarkResult")
    fun fetchBenchmarkResult(
        commit: Commit,
        device: Device,
        benchmark: BenchmarkType,
    ): BenchmarkResult

    /**
     * Returns true if there is at least one datapoint available
     *
     * @param commit chosen commit
     * @param device type of device
     * @param benchmark type of benchmark
     *
     * @return true if at least one commit is available
     */
    @JsName("hasDataAvailable")
    fun hasDataAvailable(commit: Commit, device: Device, benchmark: BenchmarkType): Boolean

    /**
     * Lists all available devices with data for a specific commit and benchmark
     *
     * @param commit chosen commit
     * @param benchmark type of benchmark
     *
     * @return array of devices
     */
    @JsName("getAvailableDevicesForCommit")
    fun getAvailableDevicesForCommit(commit: Commit, benchmark: BenchmarkType): Array<Device>
}
