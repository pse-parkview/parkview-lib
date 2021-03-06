package rest

import git.BenchmarkType
import git.Commit
import git.Device
import processing.PlotDescription
import processing.transforms.PlottableData

/**
 * Interface that provides methods for handling POST and GET requests
 */
interface RestHandler {
    /**
     * Handles a GET request for retrieving commit history. Returns 30 commits per page.
     *
     * @param branch branch name
     * @param page page number
     * @param benchmark benchmark type
     *
     * @return history in JSON format
     */
    @JsName("getHistory")
    fun getHistory(branch: String, page: Int, benchmark: String): Array<Commit>

    /**
     * Handles a GET request for retrieving plot data for the given benchmark results and plot setup.
     * The data gets returned in a format usable by Chart.js without any further processing.
     *
     * @param benchmark benchmark type
     * @param shas list of commit shas for benchmarks
     * @param devices list of devices for benchmarks
     * @param plotType what type of transform should be applied
     * @param plotParams additional options for the plot
     */
    @JsName("getPlot")
    fun getPlot(
        benchmark: String,
        shas: Array<String>,
        devices: Array<String>,
        plotType: String,
        plotParams: Map<String, String>,
    ): PlottableData

    /**
     * Returns a list of available branches
     *
     * @return list of branches
     */
    @JsName("getAvailableBranches")
    fun getAvailableBranches(): Array<String>

    /**
     * Returns a list of available plot transforms grouped by plot type
     *
     * @param benchmark benchmark name
     * @param shas list of commits
     * @param devices list of devices
     *
     * @return list of available plot transforms grouped by plot type
     */
    @JsName("getAvailablePlots")
    fun getAvailablePlots(
        benchmark: String,
        shas: Array<String>,
        devices: Array<String>,
    ): Array<PlotDescription>

    /**
     * Returns a list of all available benchmarks
     *
     * @return list of available benchmarks
     */
    @JsName("getAvailableBenchmarks")
    fun getAvailableBenchmarks(): Array<String>

    /**
     * Returns the summary values for a given benchmark
     *
     * @param benchmark benchmark type
     * @param sha sha the benchmark has been run on
     * @param device device the benchmark has been run on
     */
    @JsName("getSummaryValue")
    fun getSummaryValue(benchmark: String, sha: String, device: String): Array<Pair<String, Double>>

    /**
     * Returns line chart data for the average performance score in a Chart.js format.
     *
     * @param branch name of branch
     * @param benchmark name of benchmark
     *
     * @return plottable data for line charts
     */
    @JsName("getAveragePerformance")
    fun getAveragePerformance(branch: String, benchmark: String, device: String): PlottableData

    /**
     * Returns the number of pages for a given branch.
     *
     * @param branch given branch
     */
    @JsName("getNumberOfPages")
    fun getNumberOfPages(branch: String): Int

    /**
     *  Returns a list of available devices for the given branch and benchmark type.
     *
     *  @param branch given branch
     *  @param benchmark given benchmark type
     */
    @JsName("getAvailableDevices")
    fun getAvailableDevices(branch: String, benchmark: BenchmarkType): Array<Device>
}
