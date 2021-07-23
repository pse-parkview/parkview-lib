package com.parkview.parkview.processing

import com.parkview.parkview.git.BenchmarkResult
import com.parkview.parkview.git.BenchmarkType
import com.parkview.parkview.processing.transforms.*

data class PlotDescription(
    val plotName: String,
    val plottableAs: List<PlotType>,
    val options: List<PlotOption>,
)

data class PlotOption(
    val name: String,
    val options: List<String> = emptyList(),
    val number: Boolean = options.isEmpty(),
)

/**
 * Singleton that keeps track of all plot types and offers helper functions
 */
object AvailablePlots {
    private val spmvPlots: List<SpmvPlotTransform> = listOf(
        SpmvSingleScatterPlot(),
        SpmvSpeedupPlot(),
        SpmvPerformanceProfile(),
    )
    private val blasPlots: List<BlasPlotTransform> = listOf(
        SingeBlasPlot(),
        BlasSpeedupTransform(),
    )

    private val preconditionerPlots: List<PreconditionerPlotTransform> = listOf()

    private val conversionPlots: List<ConversionPlotTransform> = listOf(
        ConversionSingleScatterPlot(),
        ConversionSpeedupPlot(),
    )

    private val solverPlots: List<SolverPlotTransform> = listOf(
        SolverConvergencePlot(),
        SolverRuntimeBreakdown(),
    )

    /**
     * Returns a [PlotTransform] for the given name
     *
     * @param plotName name of plot
     *
     * @return [PlotTransform] if plot exists, otherwise null
     */
    fun getPlotByName(plotName: String): PlotTransform? {
        if (spmvPlots.find { it.name == plotName } != null) return spmvPlots.find { it.name == plotName }
        if (blasPlots.find { it.name == plotName } != null) return blasPlots.find { it.name == plotName }
        if (solverPlots.find { it.name == plotName } != null) return solverPlots.find { it.name == plotName }
        if (conversionPlots.find { it.name == plotName } != null) return conversionPlots.find { it.name == plotName }
        if (preconditionerPlots.find { it.name == plotName } != null) return spmvPlots.find { it.name == plotName }

        return null
    }

    /**
     * Returns a list of all available plots for a given number of inputs and benchmark type
     *
     * @param benchmark type of benchmark
     * @param results chosen benchmark results
     *
     * @return list of [PlotDescription] containing the available plots grouped by plot type
     */
    fun getPlotList(benchmark: BenchmarkType, results: List<BenchmarkResult>): List<PlotDescription> {
        val availablePlots: List<PlotTransform> = when (benchmark) {
            BenchmarkType.Spmv -> spmvPlots
            BenchmarkType.Solver -> solverPlots
            BenchmarkType.Preconditioner -> preconditionerPlots
            BenchmarkType.Conversion -> conversionPlots
            BenchmarkType.Blas -> blasPlots
        }.filter { transform -> results.size in transform.numInputsRange }

        return availablePlots.map { PlotDescription(it.name, it.plottableAs, it.getAvailableOptions(results)) }
    }
}