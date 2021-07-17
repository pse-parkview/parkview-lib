package com.parkview.parkview.processing

import com.parkview.parkview.git.BenchmarkType
import com.parkview.parkview.processing.transforms.*

data class PlotList(
    val line: List<PlotOption>,
    val scatter: List<PlotOption>,
    val bar: List<PlotOption>,
    val stackedBar: List<PlotOption>,
)

data class PlotOption(
    val name: String,
    val xAxis: List<String>,
)

/**
 * Singleton that keeps track of all plot types and offers helper functions
 */
object AvailablePlots {
    private val spmvPlots: Map<String, SpmvPlotTransform> = mapOf(
        "spmvTime" to SpmvSingleScatterPlot(SpmvSingleScatterPlotYAxis.Time),
        "spmvBandwidth" to SpmvSingleScatterPlot(SpmvSingleScatterPlotYAxis.Bandwidth),
        "spmvSpeedup" to SpmvSpeedupPlot(),
    )
    private val blasPlots: Map<String, BlasPlotTransform> = mapOf()

    private val preconditionerPlots: Map<String, PreconditionerPlotTransform> = mapOf()

    private val conversionPlots: Map<String, ConversionPlotTransform> = mapOf(
        "conversionTime" to ConversionSingleScatterPlot(ConversionSingleScatterPlotYAxis.Time),
        "conversionBandwidth" to ConversionSingleScatterPlot(ConversionSingleScatterPlotYAxis.Bandwidth),
        "ConversionSpeedup" to ConversionSpeedupPlot(),
    )

    private val solverPlots: Map<String, SolverPlotTransform> = mapOf()

    /**
     * Returns a [PlotTransform] for the given name
     *
     * @param plotName name of plot
     *
     * @return [PlotTransform] if plot exists, otherwise null
     */
    fun getPlotByName(plotName: String): PlotTransform? {
        if (spmvPlots.containsKey(plotName)) return spmvPlots[plotName]
        if (blasPlots.containsKey(plotName)) return blasPlots[plotName]
        if (preconditionerPlots.containsKey(plotName)) return preconditionerPlots[plotName]
        if (conversionPlots.containsKey(plotName)) return conversionPlots[plotName]
        if (solverPlots.containsKey(plotName)) return solverPlots[plotName]

        return null
    }

    /**
     * Returns a list of all available plots for a given number of inputs and benchmark type
     *
     * @param benchmark type of benchmark
     * @param numberInputs number of inputs
     *
     * @return [PlotList] containing the available plots grouped by plot type
     */
    fun getPlotList(benchmark: BenchmarkType, numberInputs: Int): PlotList {
        val availablePlots: Map<String, PlotTransform> = when (benchmark) {
            BenchmarkType.Spmv -> spmvPlots
            BenchmarkType.Solver -> solverPlots
            BenchmarkType.Preconditioner -> preconditionerPlots
            BenchmarkType.Conversion -> conversionPlots
            BenchmarkType.Blas -> blasPlots
        }.filter { (_, transform) -> numberInputs in transform.numInputsRange }

        return PlotList(
            line = availablePlots
                .filter { (_, transform) -> transform.plottableAs.contains(PlotType.Line) }
                .map { PlotOption(it.key, it.value.availableXAxis) },
            scatter = availablePlots
                .filter { (_, transform) -> transform.plottableAs.contains(PlotType.Scatter) }
                .map { PlotOption(it.key, it.value.availableXAxis) },
            bar = availablePlots
                .filter { (_, transform) -> transform.plottableAs.contains(PlotType.Bar) }
                .map { PlotOption(it.key, it.value.availableXAxis) },
            stackedBar = availablePlots
                .filter { (_, transform) -> transform.plottableAs.contains(PlotType.StackedBar) }
                .map { PlotOption(it.key, it.value.availableXAxis) },
        )
    }
}