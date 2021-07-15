package com.parkview.parkview.processing.transforms

import com.parkview.parkview.benchmark.ConversionBenchmarkResult
import com.parkview.parkview.git.BenchmarkResult
import com.parkview.parkview.processing.PlottableData

/**
 * Interface for transforms using multiple [ConversionBenchmarkResult].
 */
interface ConversionPlotTransform : PlotTransform {
    override fun transform(results: List<BenchmarkResult>): PlottableData {
        for (result in results) if (result !is ConversionBenchmarkResult) throw InvalidPlotTransformException("Invalid benchmark type")

        return transformConversion(results as List<ConversionBenchmarkResult>)
    }

    /**
     * Transforms the benchmark data into a JSON containing the prepared values for plotting
     *
     * @param benchmarkResults list of benchmark results
     * @return a String containing the transformed data in json format
     */
    fun transformConversion(benchmarkResults: List<ConversionBenchmarkResult>): PlottableData
}