package com.parkview.parkview.benchmark

import com.parkview.parkview.git.BenchmarkType
import com.parkview.parkview.git.Commit
import com.parkview.parkview.git.Device
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import java.util.*

internal class PreconditionerBenchmarkResultTest {
    private lateinit var br: PreconditionerBenchmarkResult

    @BeforeEach
    fun setup() {
        val datapoints = (1..5).map {
            PreconditionerDatapoint(
                10, 10, 10, listOf(
                    Preconditioner(
                        "", listOf(
                            Component("", it.toDouble()),
                        ),
                        it.toDouble(), listOf(
                            Component("", it.toDouble())
                        ), it.toDouble(), true
                    )
                )
            )
        }

        val commit = Commit("", "", Date(), "")
        br = PreconditionerBenchmarkResult(
            commit,
            Device(""),
            BenchmarkType.Preconditioner,
            datapoints
        )
    }


    @Test
    fun `Test summary value for normal data`() {
        val summaryValue = br.getSummaryValue()

        val medianGenerateRuntime = 3.0

        assert(summaryValue[""] == medianGenerateRuntime)
    }
}