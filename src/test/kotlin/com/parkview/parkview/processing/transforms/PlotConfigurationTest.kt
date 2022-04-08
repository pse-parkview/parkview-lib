package com.parkview.parkview.processing.transforms

import processing.CategoricalOption
import processing.NumericalOption
import processing.PlotDescription
import processing.transforms.InvalidPlotConfigNameException
import processing.transforms.InvalidPlotConfigValueException
import processing.transforms.PlotConfiguration
import kotlin.test.Test
import kotlin.test.assertFailsWith
import kotlin.test.assertEquals

internal class PlotConfigurationTest {
    private val categoricalOption = CategoricalOption(name = "cat", options = arrayOf("a", "b"))
    private val numericalOption = NumericalOption(name = "num", default = 1.0)

    private val testDescription = PlotDescription(
        plotName = "test",
        plottableAs = emptyArray(),
        options = arrayOf(categoricalOption, numericalOption)
    )

    private val values = mapOf(
        "num" to "7",
        "cat" to "b",
    )

    private val plotConfiguration = PlotConfiguration(testDescription, values)

    @Test
    fun test_retrieving_options() {
        assertEquals(plotConfiguration.getCategoricalOption(categoricalOption), "b")
        assertEquals(plotConfiguration.getNumericalOption(numericalOption), 7.0, 0.0001)
    }

    @Test
    fun tests_invalid_option() {
        assertFailsWith<InvalidPlotConfigNameException> {
            plotConfiguration.getCategoricalOption(numericalOption)
        }
        assertFailsWith<InvalidPlotConfigNameException> {
            plotConfiguration.getNumericalOption(categoricalOption)
        }
    }

    @Test
    fun tests_invalid_plot_description() {
        assertFailsWith<InvalidPlotConfigValueException> {
            PlotConfiguration(testDescription, mapOf("num" to "7"))
        }
        assertFailsWith<InvalidPlotConfigValueException> {
            PlotConfiguration(testDescription, mapOf("cat" to "b"))
        }
        assertFailsWith<InvalidPlotConfigValueException> {
            PlotConfiguration(testDescription, mapOf("cat" to "c"))
        }
        assertFailsWith<InvalidPlotConfigValueException> {
            PlotConfiguration(testDescription, mapOf("num" to "c"))
        }
    }
}
