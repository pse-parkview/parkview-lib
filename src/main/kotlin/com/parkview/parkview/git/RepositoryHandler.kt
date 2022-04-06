package com.parkview.parkview.git

class RepositoryException(message: String) : Exception(message)

/**
 * Interface that provides access to repository for fetching new commits.
 * This allow for updating the history with new commits
 */
interface RepositoryHandler {
    /**
     * Returns the commits for a given branch as a List.
     *
     * @param branch name of branch
     * @param page page number
     * @param benchmarkType type of benchmark for that information about the history should be retrieved
     * @return list of commits with the commit for rev being the top one
     */
    @JsName("fetchGitHistoryByBranch")
    fun fetchGitHistoryByBranch(branch: String, page: Int, benchmarkType: BenchmarkType): Array<Commit>

    /**
     * Returns a list of all available branches
     *
     * @return list of branch names
     */
    @JsName("getAvailableBranches")
    fun getAvailableBranches(): Array<String>

    /**
     * Returns the number of pages for a given branch
     *
     * @return number of pages
     */
    @JsName("getNumberOfPages")
    fun getNumberOfPages(branch: String): Int
}
