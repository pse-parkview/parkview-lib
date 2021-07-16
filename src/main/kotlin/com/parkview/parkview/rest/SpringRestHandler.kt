package com.parkview.parkview.rest

import com.google.gson.Gson
import com.parkview.parkview.AppConfig
import com.parkview.parkview.benchmark.JsonParser
import com.parkview.parkview.database.DatabaseHandler
import com.parkview.parkview.database.exposed.ExposedJsonHandler
import com.parkview.parkview.git.*
import com.parkview.parkview.processing.AvailablePlots
import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.util.*

/**
 * Class that implements a RestHandler using the Spring framework
 */
@RestController
class SpringRestHandler(
    private val appConfig: AppConfig
) : RestHandler {
    private val repHandler = CachingRepositoryHandler(
        GitApiHandler(appConfig.gitApi.repoName, appConfig.gitApi.owner),
        maxCached = appConfig.gitApi.maxCached,
        branchLifetime = appConfig.gitApi.branchLifetime,
        branchListLifetime = appConfig.gitApi.branchListLifetime,
    )

    private val databaseHandler: DatabaseHandler = ExposedJsonHandler(
        HikariDataSource(HikariConfig()
            .apply {
                jdbcUrl = appConfig.datasource.jdbcUrl
                username = appConfig.datasource.username
                password = appConfig.datasource.password
            }
        )
    )


    @PostMapping("/post")
    override fun handlePost(
        @RequestParam sha: String,
        @RequestParam device: String,
        @RequestParam(defaultValue = "false") blas: Boolean,
        @RequestBody json: String,
    ) {
        val benchmarkResults = JsonParser.benchmarkResultsFromJson(sha, device, json, blas = blas)

        databaseHandler.insertBenchmarkResults(benchmarkResults)
    }

    @GetMapping("/history")
    override fun handleGetHistory(
        @RequestParam branch: String,
        @RequestParam page: Int,
        @RequestParam benchmark: String,
    ): String {

        val commits = repHandler.fetchGitHistory(branch, page)
        val benchmarkInfo = BenchmarkType.valueOf(benchmark)

        for (commit in commits) {
            val devices = databaseHandler.getAvailableDevices(
                commit,
                benchmark = benchmarkInfo,
            )
            if (commit.device.isEmpty()) {
                for (device in devices) {
                    if (databaseHandler.hasDataAvailable(
                            commit,
                            device,
                            benchmarkInfo,
                        )
                    ) commit.addDevice(device)
                }
            }
        }

        return Gson().toJson(commits)
    }


    @GetMapping("/plot")
    override fun handleGetPlotData(
        @RequestParam benchmark: String,
        @RequestParam shas: List<String>,
        @RequestParam devices: List<String>,
        @RequestParam plotType: String,
    ): String {
        // dummy implementation
        val results: List<BenchmarkResult> = shas.zip(devices).map { (sha, device) ->
            databaseHandler.fetchBenchmarkResult(
                Commit(sha, "", Date(), ""),
                Device(device),
                BenchmarkType.valueOf(benchmark),
            )
        }

        val plot = AvailablePlots.getPlotByName(plotType) ?: throw Exception("Invalid plot type")
        return plot.transform(results).toJson()
    }

    @GetMapping("/branches")
    override fun getAvailableBranches(): String {
        val branches = repHandler.getAvailableBranches()
        val gson = Gson()
        return gson.toJson(branches)
    }

    @GetMapping("/benchmarks")
    override fun getAvailableBenchmarks(): String {
        val benchmarks = BenchmarkType.values()
        return Gson().toJson(benchmarks)
    }

    @GetMapping("/availablePlots")
    override fun getAvailablePlots(
        @RequestParam benchmark: String,
        @RequestParam shas: List<String>,
        @RequestParam devices: List<String>,
    ): String = Gson().toJson(
        AvailablePlots.getPlotList(
            BenchmarkType.valueOf(benchmark),
            shas.size,
        )
    )
}