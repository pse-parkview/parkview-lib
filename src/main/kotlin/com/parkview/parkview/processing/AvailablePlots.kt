package com.parkview.parkview.processing

import com.parkview.parkview.git.Benchmark
import com.parkview.parkview.git.BenchmarkType
import com.parkview.parkview.processing.transforms.*

data class PlotList(
    val line: List<String>,
    val scatter: List<String>,
    val bar: List<String>,
    val stackedBar: List<String>,
)

object AvailablePlots {
    private val spmvPlots: Map<String, SpmvPlotTransform> = mapOf(
        "spmvTime" to SpmvSingleScatterPlot(SpmvSingleScatterPlotYAxis.Time),
        "spmvBandwidth" to SpmvSingleScatterPlot(SpmvSingleScatterPlotYAxis.Bandwidth),
        "spmvSpeedup" to SpmvSpeedupPlot(),
    )
    private val blasPlots: Map<String, BlasPlotTransform> = mapOf()
    private val preconditionerPlots: Map<String, PreconditionerPlotTransform> = mapOf()
    private val conversionPlots: Map<String, ConversionPlotTransform> = mapOf()
    private val solverPlots: Map<String, SolverPlotTransform> = mapOf()

    fun getPlotList(benchmark: Benchmark, numberInputs: Int): PlotList {
        val availablePlots: Map<String, PlotTransform> = when (benchmark.type) {
            BenchmarkType.Spmv -> spmvPlots
            BenchmarkType.Solver -> solverPlots
            BenchmarkType.Preconditioner -> preconditionerPlots
            BenchmarkType.Conversion -> conversionPlots
            BenchmarkType.Blas -> blasPlots
        }.filter { (_, transform) -> inRange(transform.numAllowedInputs, numberInputs) }

        return PlotList(
            line = availablePlots.filter { (_, transform) -> transform.plottableAs.contains(PlotType.Line) }.keys.toList(),
            scatter = availablePlots.filter { (_, transform) -> transform.plottableAs.contains(PlotType.Scatter) }.keys.toList(),
            bar = availablePlots.filter { (_, transform) -> transform.plottableAs.contains(PlotType.Bar) }.keys.toList(),
            stackedBar = availablePlots.filter { (_, transform) -> transform.plottableAs.contains(PlotType.StackedBar) }.keys.toList(),
        )
    }

    private fun inRange(range: Pair<Int, Int>, n: Int) = (n >= range.first) and (n <= range.second)
}