package com.parkview.parkview.benchmark

import git.Commit
import benchmark.Format
import benchmark.SpmvBenchmarkResult
import benchmark.SpmvDatapoint
import git.Device
import kotlin.js.Date
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals

internal class SpmvBenchmarkResultTest {
    private lateinit var br: SpmvBenchmarkResult

    @BeforeTest
    fun setup() {
        val datapoints = (1..5).map {
            val format = Format(name = "", storage = 1, time = 1.0, maxRelativeNorm2 = 1.0, completed = true)
            SpmvDatapoint(
                "", it * 10, it * 10, it * 10,
                listOf(
                    format
                ),
            )
        }

        val commit = Commit("", "", Date(), "")
        br = SpmvBenchmarkResult(
            commit,
            Device(""),
            datapoints
        )
    }

    @Test
    fun Get_summary_value_for_single_format_per_datapoint() {
        val summaryValue = br.summaryValues

        val medianBandwidth = 30.0

        assertEquals(summaryValue[""], medianBandwidth)
    }
}
