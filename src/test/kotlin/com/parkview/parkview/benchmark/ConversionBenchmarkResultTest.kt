package com.parkview.parkview.benchmark

import git.Commit
import benchmark.Conversion
import benchmark.ConversionBenchmarkResult
import benchmark.ConversionDatapoint
import git.Device
import kotlin.test.Test
import kotlin.test.BeforeTest
import kotlin.test.assertEquals
import kotlin.js.Date

internal class ConversionBenchmarkResultTest {
    private lateinit var br: ConversionBenchmarkResult

    @BeforeTest
    fun setup() {
        val datapoints = (1..5).map {
            ConversionDatapoint(
                "", it * 10, it * 10, it * 10,
                listOf(
                    Conversion("", 1.0, true),
                )
            )
        }

        val commit = Commit("", "", Date(), "")
        br = ConversionBenchmarkResult(
            commit,
            Device(""),
            datapoints
        )
    }

    @Test
    fun test_summary_value_for_single_conversion_in_each_datapoint() {
        val summaryValue = br.summaryValues

        val medianBandwidth = 30.0

        assertEquals(summaryValue[""], medianBandwidth)
    }
}
