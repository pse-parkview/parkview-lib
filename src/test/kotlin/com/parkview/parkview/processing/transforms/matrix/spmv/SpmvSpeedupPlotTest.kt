package com.parkview.parkview.processing.transforms.matrix.spmv

import SPMV_RESULT
import processing.transforms.PlotConfiguration
import processing.transforms.PointDataset
import processing.transforms.matrix.spmv.SpmvSpeedupPlot
import kotlin.test.assertEquals
import kotlin.test.Test

internal class SpmvSpeedupPlotTest {
    private val plot = SpmvSpeedupPlot()

    private val benchmark = SPMV_RESULT

    @Test
    fun transformSpmv() {
        val options = mutableMapOf(
            "baseline" to "${benchmark.identifier}",
            "xAxis" to "rows",
            "minRows" to "1",
            "maxRows" to "10",
            "minColumns" to "2",
            "maxColumns" to "20",
            "minNonzeros" to "3",
            "maxNonzeros" to "30",
        )
        val config = PlotConfiguration(plot.getPlotDescription(listOf(benchmark, benchmark)), options)
        val data = plot.transformSpmv(listOf(benchmark, benchmark), config)

        for (dataset in data.datasets) {
            for (point in (dataset as PointDataset).data) {
                assertEquals(1.0, point.y, 0.0001)
            }
        }
    }
}
