package com.parkview.parkview.processing.transforms.matrix.solver

import COMMIT_A
import DEVICE
import benchmark.Component
import benchmark.Solver
import benchmark.SolverBenchmarkResult
import benchmark.SolverDatapoint
import processing.transforms.BarChartDataset
import processing.transforms.PlotConfiguration
import processing.transforms.matrix.solver.SolverRuntimeBreakdown
import kotlin.test.Test
import kotlin.test.assertEquals

internal class SolverRuntimeBreakdownTest {
    private val plot = SolverRuntimeBreakdown()

    private val result = SolverBenchmarkResult(
        COMMIT_A,
        DEVICE,
        listOf(
            SolverDatapoint(
                "name",
                1,
                1,
                1,
                "optimal",
                listOf(
                    Solver(
                        name = "solver",
                        completed = true,
                        applyComponents = listOf(
                            Component("a", 50.0),
                            Component("b", 50.0),
                        ),
                        generateComponents = listOf(
                            Component("a", 75.0),
                            Component("b", 25.0),
                        ),
                        applyTotalTime = 200.0,
                        generateTotalTime = 200.0,
                        applyIterations = 1,
                    ),
                ),
            )
        )
    )

    @Test
    fun test_apply_sumComponents() {
        val options = mapOf(
            "matrix" to "name",
            "components" to "apply",
            "totalTime" to "sumComponents",
            "minRows" to "1",
            "maxRows" to "10",
            "minColumns" to "2",
            "maxColumns" to "20",
            "minNonzeros" to "3",
            "maxNonzeros" to "30",
        )
        val config = PlotConfiguration(plot.getPlotDescription(listOf(result)), options)
        val data = plot.transformSolver(listOf(result), config)

        assertEquals(0.5, (data.datasets[0] as BarChartDataset).data[0], 0.0001)
        assertEquals(0.5, (data.datasets[1] as BarChartDataset).data[0], 0.0001)
    }

    @Test
    fun test_apply_givenValue() {
        val options = mapOf(
            "matrix" to "name",
            "components" to "apply",
            "totalTime" to "givenValue",
            "minRows" to "1",
            "maxRows" to "10",
            "minColumns" to "2",
            "maxColumns" to "20",
            "minNonzeros" to "3",
            "maxNonzeros" to "30",
        )
        val config = PlotConfiguration(plot.getPlotDescription(listOf(result)), options)
        val data = plot.transformSolver(listOf(result), config)

        assertEquals(0.25, (data.datasets[0] as BarChartDataset).data[0], 0.0001)
        assertEquals(0.25, (data.datasets[1] as BarChartDataset).data[0], 0.0001)
    }

    @Test
    fun test_generate_sumComponents() {
        val options = mapOf(
            "matrix" to "name",
            "components" to "generate",
            "totalTime" to "sumComponents",
            "minRows" to "1",
            "maxRows" to "10",
            "minColumns" to "2",
            "maxColumns" to "20",
            "minNonzeros" to "3",
            "maxNonzeros" to "30",
        )
        val config = PlotConfiguration(plot.getPlotDescription(listOf(result)), options)
        val data = plot.transformSolver(listOf(result), config)

        assertEquals(0.75, (data.datasets[0] as BarChartDataset).data[0], 0.0001)
        assertEquals(0.25, (data.datasets[1] as BarChartDataset).data[0], 0.0001)
    }

    @Test
    fun test_generate_givenValue() {
        val options = mapOf(
            "matrix" to "name",
            "components" to "generate",
            "totalTime" to "givenValue",
            "minRows" to "1",
            "maxRows" to "10",
            "minColumns" to "2",
            "maxColumns" to "20",
            "minNonzeros" to "3",
            "maxNonzeros" to "30",
        )
        val config = PlotConfiguration(plot.getPlotDescription(listOf(result)), options)
        val data = plot.transformSolver(listOf(result), config)

        assertEquals(0.375, (data.datasets[0] as BarChartDataset).data[0], 0.0001)
        assertEquals(0.125, (data.datasets[1] as BarChartDataset).data[0], 0.0001)
    }
}
