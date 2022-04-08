package database

import git.BenchmarkType
import git.Commit
import git.Device

/**
 * Exception for handling missing benchmark results.
 *
 * @param commit chosen commit
 * @param device chosen device
 * @param benchmark chosen benchmark type
 */
class MissingBenchmarkResultException(commit: Commit, device: Device, benchmark: BenchmarkType) : Exception(
    "Error, the benchmark result for $benchmark on " +
        "commit ${commit.sha} using device ${device.name} could not be found."
)
