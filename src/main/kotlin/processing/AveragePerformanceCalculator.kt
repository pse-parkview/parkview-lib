package processing

import database.DatabaseHandler
import git.BenchmarkType
import git.Commit
import git.Device
import processing.transforms.PlotPoint
import processing.transforms.PlottableData
import processing.transforms.PointDataset

/**
 * Handles the calculation of metrics spanning multiple commits
 *
 * @param databaseHandler database handler used for retrieving benchmark data
 */
class AveragePerformanceCalculator(
    private val databaseHandler: DatabaseHandler,
) {
    /**
     * Calculates the average performance over a list of commits. The x axis contains timestamps.
     *
     * @param commits commits over which the average performance should be calculated
     * @param benchmark type of benchmark
     * @param device device
     *
     * @return average performance in a format compatible with Chart.js
     */
    fun getAveragePerformanceData(commits: List<Commit>, benchmark: BenchmarkType, device: Device): PlottableData {
        val seriesByName: MutableMap<String, MutableList<PlotPoint>> = mutableMapOf()

        // reversed because we want the earliest commit on the left
        for (commit in commits.reversed()) {
            if (databaseHandler.hasDataAvailable(commit, device, benchmark)) {
                val benchmarkResult = databaseHandler.fetchBenchmarkResult(commit, device, benchmark)
                for ((name, summaryValue) in benchmarkResult.summaryValues) {
                    seriesByName.getOrPut(name) { mutableListOf() } += PlotPoint(
                        x = commit.date.getTime(),
                        y = summaryValue,
                    )
                }
            }
        }

        return PlottableData(
            seriesByName.map { (key, value) ->
                PointDataset(
                    label = key,
                    data = value.sortedBy { it.x }.toTypedArray(),
                )
            }.toTypedArray(),
        )
    }
}
