package com.parkview.parkview.processing.transforms

import COMMIT_A
import DEVICE
import benchmark.MatrixBenchmarkResult
import benchmark.MatrixDatapoint
import git.BenchmarkType
import git.Commit
import git.Device
import processing.NumericalOption
import processing.PlotDescription
import processing.transforms.matrix.MatrixOptions
import processing.transforms.PlotConfiguration
import kotlin.test.assertNull
import kotlin.test.Test
import kotlin.test.assertEquals

internal class MatrixPlotTransformKtTest {
    class DummyMatrixDatapoint(
        override val name: String,
        override val rows: Int,
        override val columns: Int,
        override val nonzeros: Int,
    ) : MatrixDatapoint

    class DummyMatrixBenchmarkResult(
        override val datapoints: List<MatrixDatapoint>,
        override val commit: Commit,
        override val device: Device,
        override val benchmark: BenchmarkType,
        override val summaryValues: Map<String, Double> = emptyMap(),
    ) : MatrixBenchmarkResult

    private val datapoints = (1..10).map {
        DummyMatrixDatapoint(
            it.toString(),
            it,
            it * 2,
            it * 3,
        )
    }

    private val description = PlotDescription(
        plotName = "test",
        plottableAs = emptyArray(),
        options = arrayOf(
            NumericalOption(
                name = "minRows",
                description = "Lower limit for rows",
                default = datapoints.map { it.rows }.minOrNull()?.toDouble() ?: 0.0,
            ),
            NumericalOption(
                name = "maxRows",
                description = "Upper limit for rows",
                default = datapoints.map { it.rows }.maxOrNull()?.toDouble() ?: 0.0,
            ),
            NumericalOption(
                name = "minColumns",
                description = "Lower limit for columns",
                default = datapoints.map { it.columns }.minOrNull()?.toDouble() ?: 0.0,
            ),
            NumericalOption(
                name = "maxColumns",
                description = "Upper limit for columns",
                default = datapoints.map { it.columns }.maxOrNull()?.toDouble() ?: 0.0,
            ),
            NumericalOption(
                name = "minNonzeros",
                description = "Lower limit for nonzeros",
                default = datapoints.map { it.nonzeros }.minOrNull()?.toDouble() ?: 0.0,
            ),
            NumericalOption(
                name = "maxNonzeros",
                description = "Upper limit for nonzeros",
                default = datapoints.map { it.nonzeros }.maxOrNull()?.toDouble() ?: 0.0,
            ),
        )
    )

    @Test
    fun filterMatrixDatapoints() {
        val options = mapOf(
            "minRows" to "1",
            "maxRows" to "10",
            "minColumns" to "2",
            "maxColumns" to "20",
            "minNonzeros" to "3",
            "maxNonzeros" to "30",
        )

        val rowOptions = options.toMutableMap()
        rowOptions["minRows"] = "2"
        rowOptions["maxRows"] = "9"

        var config = PlotConfiguration(description, rowOptions)
        val rowFiltered = processing.transforms.filterMatrixDatapoints(datapoints, config)
        assertNull(rowFiltered.find { it.rows < 2 })
        assertNull(rowFiltered.find { it.rows > 9 })

        val columnsOptions = options.toMutableMap()
        columnsOptions["minColumns"] = "10"
        columnsOptions["maxColumns"] = "18"
        config = PlotConfiguration(description, columnsOptions)
        val columnsFiltered =
            processing.transforms.filterMatrixDatapoints(datapoints, config)
        assertNull(columnsFiltered.find { it.columns < 10 })
        assertNull(columnsFiltered.find { it.columns > 18 })

        val nonzerosOptions = options.toMutableMap()
        nonzerosOptions["minNonzeros"] = "15"
        nonzerosOptions["maxNonzeros"] = "21"
        config = PlotConfiguration(description, nonzerosOptions)
        val nonzerosFiltered =
            processing.transforms.filterMatrixDatapoints(datapoints, config)
        assertNull(nonzerosFiltered.find { it.nonzeros < 15 })
        assertNull(nonzerosFiltered.find { it.nonzeros > 21 })
    }

    @Test
    fun getAvailableMatrixNames() {
        val result = DummyMatrixBenchmarkResult(
            datapoints,
            COMMIT_A,
            DEVICE,
            BenchmarkType.Spmv,
        )
        val options = MatrixOptions.matrix.realizeOption(arrayOf(result))

        for ((i, option) in options.options.withIndex()) {
            assertEquals(option, (i + 1).toString())
        }
    }
}
