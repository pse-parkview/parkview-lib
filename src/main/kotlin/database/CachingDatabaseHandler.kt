package database

import git.BenchmarkResult
import git.BenchmarkType
import git.Commit
import git.Device

private data class AvailableCacheEntry(
    val commit: Commit,
    val device: Device,
    val benchmark: BenchmarkType,
    val available: Boolean,
)

private data class DeviceCacheEntry(
    val commit: Commit,
    val benchmark: BenchmarkType,
    val devices: List<Device>,
)

/**
 * [DatabaseHandler] that caches requests.
 *
 * @param databaseHandler [DatabaseHandler] used to retrieve data from the database
 * @param maxCached number of maximum cached entries
 */
class CachingDatabaseHandler(
    private val databaseHandler: DatabaseHandler,
    private val maxCached: Int = 10,
) : DatabaseHandler {
    private val resultCache: MutableList<BenchmarkResult> = mutableListOf()
    private val availableCache: MutableList<AvailableCacheEntry> = mutableListOf()
    private val deviceCache: MutableList<DeviceCacheEntry> = mutableListOf()

    override fun insertBenchmarkResults(results: Array<BenchmarkResult>) {
        resultCache.clear()
        databaseHandler.insertBenchmarkResults(results)
    }

    override fun fetchBenchmarkResult(commit: Commit, device: Device, benchmark: BenchmarkType): BenchmarkResult {
        val cached =
            resultCache.find { (it.commit.sha == commit.sha) and (it.device == device) && (it.benchmark == benchmark) }

        // miss
        if (cached == null) {
            val result = databaseHandler.fetchBenchmarkResult(commit, device, benchmark)
            addToResultCache(result)
            return result
        }

        // hit
        // increase priority
        resultCache.remove(cached)
        resultCache.add(cached)
        return cached
    }

    override fun hasDataAvailable(commit: Commit, device: Device, benchmark: BenchmarkType): Boolean {
        val cached =
            availableCache.find { (it.commit.sha == commit.sha) and (it.device == device) and (it.benchmark == benchmark) }

        // miss
        if (cached == null) {
            val result = databaseHandler.hasDataAvailable(commit, device, benchmark)
            val cacheEntry = AvailableCacheEntry(commit, device, benchmark, result)
            addToAvailableCache(cacheEntry)

            return result
        }

        // hit
        availableCache.remove(cached)
        availableCache.add(cached)
        return cached.available
    }

    override fun getAvailableDevicesForCommit(commit: Commit, benchmark: BenchmarkType): Array<Device> {
        val cached = deviceCache.find { (it.commit.sha == commit.sha) and (it.benchmark == benchmark) }

        // miss
        if (cached == null) {
            val devices = databaseHandler.getAvailableDevicesForCommit(commit, benchmark)
            val cacheEntry = DeviceCacheEntry(commit, benchmark, devices.toList())
            addToDeviceCache(cacheEntry)

            return devices
        }

        // hit
        deviceCache.remove(cached)
        deviceCache.add(cached)
        return cached.devices.toTypedArray()
    }


    private fun addToResultCache(result: BenchmarkResult) {
        resultCache.add(result)

        if (resultCache.size > maxCached) {
            resultCache.removeAt(0)
        }
    }


    private fun addToAvailableCache(entry: AvailableCacheEntry) {
        availableCache.add(entry)

        if (availableCache.size > maxCached) {
            availableCache.removeAt(0)
        }
    }


    private fun addToDeviceCache(entry: DeviceCacheEntry) {
        deviceCache.add(entry)

        if (deviceCache.size > maxCached) {
            deviceCache.removeAt(0)
        }
    }
}
