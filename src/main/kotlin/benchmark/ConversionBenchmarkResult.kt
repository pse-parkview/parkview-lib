package benchmark

import git.BenchmarkType
import git.Commit
import git.Device

/**
 * A single conversion, part of [ConversionBenchmarkResult]
 *
 * @param name conversion name
 * @param time time for conversion
 * @param completed whether or not the conversion completed
 */
data class Conversion(
    val name: String,
    val time: Double,
    val completed: Boolean,
)

/**
 * A single datapoint, contains the problem description for the matrix and
 * a list of conversions.
 *
 * @param rows number of rows
 * @param columns number of columns
 * @param nonzeros number of nonzeros
 * @param conversions list of conversions
 */
data class ConversionDatapoint(
    override val name: String,
    override val rows: Int,
    override val columns: Int,
    override val nonzeros: Int,
    val conversions: List<Conversion>,
) : MatrixDatapoint

/**
 * This is a benchmark result for the benchmarks
 * of the Conversion format and type.
 *
 * @param commit commit this benchmark has been run on
 * @param device device this benchmark has been run on
 * @param datapoints datapoints for this benchmark
 */
data class ConversionBenchmarkResult(
    override val commit: Commit,
    override val device: Device,
    override val datapoints: List<ConversionDatapoint>,
) : MatrixBenchmarkResult {
    override val benchmark: BenchmarkType = BenchmarkType.Conversion

    override val summaryValues: Map<String, Double>
        by lazy { calcBandwidths().mapValues { (_, values) -> values.sorted()[values.size / 2] } }

    private fun calcBandwidths(): Map<String, List<Double>> {
        val bandwidths = mutableMapOf<String, MutableList<Double>>()

        for (datapoint in datapoints) {
            for (conversion in datapoint.conversions) {
                if (!conversion.completed) continue
                bandwidths.getOrPut(conversion.name) { mutableListOf() }
                    .add(datapoint.nonzeros / conversion.time)
            }
        }

        return bandwidths
    }
}
