package com.parkview.parkview.git

import kotlin.js.Date

private data class CachedBranch(
    val name: String,
    val benchmark: BenchmarkType,
    val fetchDate: Date,
    val pages: MutableMap<Int, List<Commit>>,
    val numberPages: Int,
)

private data class CachedSha(
    val name: String,
    val benchmark: BenchmarkType,
    val fetchDate: Date,
    val pages: MutableMap<Int, List<Commit>>,
)

/**
 * Decorator for [RepositoryHandler], enables it to cache previous requests
 *
 * @param handler [RepositoryHandler] that gets decorated
 * @param maxCached maximum number of cached branches
 * @param branchLifetime lifetime of branch before it has to be refetched in minutes
 * @param branchListLifetime lifetime of branch list before it has to be refetched in minutes
 * @param shaLifetime lifetime of sha history before it has to be refetched in minutes
 */
class CachingRepositoryHandler(
    private val handler: RepositoryHandler,
    private val maxCached: Int = 20,
    private val branchLifetime: Int = 5,
    private val branchListLifetime: Int = 5,
    private val shaLifetime: Int = 2,
) : RepositoryHandler {
    private val branchCache = mutableListOf<CachedBranch>()
    private val shaCache = mutableListOf<CachedSha>()
    private var availableBranches = handler.getAvailableBranches()
    private var availableBranchesFetchDate = Date()


    override fun fetchGitHistoryByBranch(branch: String, page: Int, benchmarkType: BenchmarkType): Array<Commit> =
        getOrPutCache(branch, benchmarkType, page).pages.getOrPut(page) {
            handler.fetchGitHistoryByBranch(
                branch,
                page,
                benchmarkType
            ).toList()
        }.toTypedArray()

    override fun getAvailableBranches(): Array<String> {
        if (((Date().getTime()) - availableBranchesFetchDate.getTime()) / (1000 * 60) > branchListLifetime) {
            availableBranches = handler.getAvailableBranches()
            availableBranchesFetchDate = Date()
        }

        return availableBranches
    }


    override fun getNumberOfPages(branch: String): Int = getOrPutCache(branch).numberPages


    private fun getOrPutCache(
        branch: String,
        benchmarkType: BenchmarkType = BenchmarkType.values().first(),
        page: Int = 1,
    ): CachedBranch {
        val wantedBranch = branchCache.find { (it.name == branch) and (it.benchmark == benchmarkType) }

        // branch is not cached
        if (wantedBranch == null) {
            val newBranch = CachedBranch(
                branch,
                benchmarkType,
                Date(),
                mutableMapOf(page to handler.fetchGitHistoryByBranch(branch, page, benchmarkType).toList()),
                handler.getNumberOfPages(branch)
            )
            addToBranchCache(newBranch)

            return newBranch
        }

        // too old
        if (((Date().getTime()) - wantedBranch.fetchDate.getTime()) / (1000 * 60) > branchLifetime) {
            branchCache.remove(wantedBranch)
            val newBranch = CachedBranch(
                branch,
                benchmarkType,
                Date(),
                mutableMapOf(page to handler.fetchGitHistoryByBranch(branch, page, benchmarkType).toList()),
                handler.getNumberOfPages(branch)
            )
            addToBranchCache(newBranch)

            return newBranch
        }

        // hit
        branchCache.remove(wantedBranch)
        branchCache.add(wantedBranch)
        return wantedBranch
    }


    private fun addToBranchCache(branch: CachedBranch) {
        branchCache.add(branch)

        if (branchCache.size > maxCached) {
            branchCache.removeAt(0)
        }
    }


    private fun addToShaCache(sha: CachedSha) {
        shaCache.add(sha)

        if (shaCache.size > maxCached) {
            shaCache.removeAt(0)
        }
    }
}
