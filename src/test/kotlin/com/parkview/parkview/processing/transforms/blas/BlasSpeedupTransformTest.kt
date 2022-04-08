package com.parkview.parkview.processing.transforms.blas

import COMMIT_A
import DEVICE
import benchmark.BlasBenchmarkResult
import benchmark.BlasDatapoint
import benchmark.Operation
import processing.transforms.PlotConfiguration
import processing.transforms.PointDataset
import processing.transforms.blas.BlasSpeedupTransform
import kotlin.test.assertEquals
import kotlin.test.Test

internal class BlasSpeedupTransformTest {
    private val plot = BlasSpeedupTransform()

    private val benchmark = BlasBenchmarkResult(
        COMMIT_A,
        DEVICE,
        (1..10).map {
            BlasDatapoint(
                it * 1,
                it * 2,
                it * 3,
                it * 4,
                listOf(Operation("", 1.0, 1.0, it * 1.0, true))
            )
        },
    )

    @Test
    fun transformBlas() {
        val options = mutableMapOf(
            "baseline" to benchmark.identifier,
            "xAxis" to "n",
            "maxN" to "10",
            "minN" to "1",
            "maxR" to "20",
            "minR" to "2",
            "maxM" to "30",
            "minM" to "3",
            "maxK" to "40",
            "minK" to "4",
        )
        val config = PlotConfiguration(plot.getPlotDescription(listOf(benchmark, benchmark)), options)
        val data = plot.transformBlas(listOf(benchmark, benchmark), config)

        for (dataset in data.datasets) {
            for (point in (dataset as PointDataset).data) {
                assertEquals(1.0, point.y, 0.0001)
            }
        }
    }
}
