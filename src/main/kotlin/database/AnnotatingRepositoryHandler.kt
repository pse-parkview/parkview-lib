package database

import git.BenchmarkType
import git.Commit
import git.RepositoryHandler

/**
 * Annotates each commit with the devices that have available data.
 *
 * @param repHandler [RepositoryHandler] used for retrieving the commits
 * @param databaseHandler [DatabaseHandler] used for retrieving information about the available data
 */
class AnnotatingRepositoryHandler(
    private val repHandler: RepositoryHandler,
    private val databaseHandler: DatabaseHandler,
) : RepositoryHandler {
    override fun fetchGitHistoryByBranch(branch: String, page: Int, benchmarkType: BenchmarkType): Array<Commit> =
        repHandler.fetchGitHistoryByBranch(branch, page, benchmarkType).map {
            it.copy()
                .apply {
                    for (device in databaseHandler.getAvailableDevicesForCommit(this, benchmarkType)) addDevice(device)
                }
        }.toTypedArray()

    override fun getAvailableBranches(): Array<String> = repHandler.getAvailableBranches()

    override fun getNumberOfPages(branch: String): Int = repHandler.getNumberOfPages(branch)
}
