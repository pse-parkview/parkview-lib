package com.parkview.parkview.git

import COMMIT_A
import COMMIT_B
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*

internal class CachingRepositoryHandlerTest {

    private lateinit var handlerWithMaxDuration: CachingRepositoryHandler
    private lateinit var handlerWithZeroDuration: CachingRepositoryHandler

    private val mockHandler = object : RepositoryHandler {
        var pages = 1
        override fun fetchGitHistoryByBranch(branch: String, page: Int, benchmarkType: BenchmarkType): List<Commit> = listOf(
            Commit(
                COMMIT_A.sha,
            ),
        )

        override fun fetchGitHistoryBySha(rev: String, page: Int, benchmarkType: BenchmarkType): List<Commit> = listOf(
            Commit(
                COMMIT_B.sha,
            )
        )

        override fun getAvailableBranches(): List<String> = listOf("test")

        override fun getNumberOfPages(branch: String): Int = pages++

    }

    @BeforeEach
    fun setUp() {
        mockHandler.pages = 1
        handlerWithMaxDuration = CachingRepositoryHandler(
            mockHandler,
            branchLifetime = Int.MAX_VALUE,
            shaLifetime = Int.MAX_VALUE,
            branchListLifetime = Int.MAX_VALUE,
        )
        handlerWithZeroDuration = CachingRepositoryHandler(
            mockHandler,
            branchLifetime = -1,
            shaLifetime = -1,
            branchListLifetime = -1,
        )
    }

    @Test
    fun `checks for same object reference for fetch by branch`() {
        val commit1 = handlerWithMaxDuration.fetchGitHistoryByBranch("test", 1, BenchmarkType.Blas)
        val commit2 = handlerWithMaxDuration.fetchGitHistoryByBranch("test", 1, BenchmarkType.Blas)

        assertSame(commit1, commit2)
    }

    @Test
    fun `checks for same object reference for fetch by sha`() {
        val commit1 = handlerWithMaxDuration.fetchGitHistoryBySha(COMMIT_A.sha, 1, BenchmarkType.Blas)
        val commit2 = handlerWithMaxDuration.fetchGitHistoryBySha(COMMIT_A.sha, 1, BenchmarkType.Blas)

        assertSame(commit1, commit2)
    }

    @Test
    fun `checks for same object reference for available branches`() {
        val branches1 = handlerWithMaxDuration.getAvailableBranches()
        val branches2 = handlerWithMaxDuration.getAvailableBranches()

        assertSame(branches1, branches2)
    }

    @Test
    fun `checks for same number for number of pages`() {
        val num1 = handlerWithMaxDuration.getNumberOfPages("test")
        val num2 = handlerWithMaxDuration.getNumberOfPages("test")

        assertEquals(num1, num2)
    }

    @Test
    fun `checks for time out for fetch by branch`() {
        val commit1 = handlerWithZeroDuration.fetchGitHistoryByBranch("test", 1, BenchmarkType.Blas)
        val commit2 = handlerWithZeroDuration.fetchGitHistoryByBranch("test", 1, BenchmarkType.Blas)

        assertNotSame(commit1, commit2)
    }

    @Test
    fun `checks for time out for fetch by sha`() {
        val commit1 = handlerWithZeroDuration.fetchGitHistoryBySha(COMMIT_A.sha, 1, BenchmarkType.Blas)
        val commit2 = handlerWithZeroDuration.fetchGitHistoryBySha(COMMIT_A.sha, 1, BenchmarkType.Blas)

        assertNotSame(commit1, commit2)
    }

    @Test
    fun `checks for time out for available branches`() {
        val branches1 = handlerWithZeroDuration.getAvailableBranches()
        val branches2 = handlerWithZeroDuration.getAvailableBranches()

        assertNotSame(branches1, branches2)
    }

    @Test
    fun `checks for time out for number of pages`() {
        val num1 = handlerWithZeroDuration.getNumberOfPages("test")
        val num2 = handlerWithZeroDuration.getNumberOfPages("test")

        assertNotSame(num1, num2)
    }
}