/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { Octokit } from "@octokit/rest";
import { logger } from "../utils/logger.js";

export class GitHubClient {
  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
      userAgent: "github-activity-bot",
    });
  }

  async createRepo(name, description, isPrivate = false) {
    try {
      const response = await this.octokit.repos.createForAuthenticatedUser({
        name,
        description,
        private: isPrivate,
        auto_init: true,
      });
      logger.info(`Created repository: ${name}`);
      return response.data;
    } catch (error) {
      logger.error(`Failed to create repository ${name}:`, error);
      throw error;
    }
  }

  // Create a commit that adds/updates one or more files in a single commit.
  // files: { path: content }
  // message: commit message
  // author: { name, email }
  // date: optional ISO string or Date to set author/committer date (for historical commits)
  async createCommit(owner, repo, files, message, author = {}, date = null) {
    try {
      // Get repo and default branch
      const { data: repoData } = await this.octokit.repos.get({ owner, repo });
      const defaultBranch = repoData.default_branch;

      // Get reference -> commit -> tree
      const { data: refData } = await this.octokit.git.getRef({
        owner,
        repo,
        ref: `heads/${defaultBranch}`,
      });
      const latestCommitSha = refData.object.sha;

      const { data: commitData } = await this.octokit.git.getCommit({
        owner,
        repo,
        commit_sha: latestCommitSha,
      });
      const baseTreeSha = commitData.tree.sha;

      // Create blobs for each file
      const tree = [];
      for (const [path, content] of Object.entries(files)) {
        const blob = await this.octokit.git.createBlob({
          owner,
          repo,
          content:
            typeof content === "string" ? content : JSON.stringify(content),
        });

        tree.push({
          path,
          mode: "100644",
          type: "blob",
          sha: blob.data.sha,
        });
      }

      // Create a new tree based on the latest tree
      const { data: newTree } = await this.octokit.git.createTree({
        owner,
        repo,
        base_tree: baseTreeSha,
        tree,
      });

      const commitPayload = {
        owner,
        repo,
        message: `${message} [automated]`,
        tree: newTree.sha,
        parents: [latestCommitSha],
      };

      // Attach author/committer if provided
      const authorInfo = {
        name: author.name || process.env.AUTHOR_NAME || "github-activity-bot",
        email: author.email || process.env.AUTHOR_EMAIL || "noreply@github.com",
      };

      const authorObj = { name: authorInfo.name, email: authorInfo.email };
      if (date) {
        const iso =
          date instanceof Date
            ? date.toISOString()
            : new Date(date).toISOString();
        authorObj.date = iso;
      }

      commitPayload.author = authorObj;
      commitPayload.committer = authorObj;

      // Create commit
      const { data: createdCommit } = await this.octokit.git.createCommit(
        commitPayload
      );

      // Update ref
      await this.octokit.git.updateRef({
        owner,
        repo,
        ref: `heads/${defaultBranch}`,
        sha: createdCommit.sha,
      });

      logger.info(`Created commit in ${owner}/${repo}: ${message}`);
      return createdCommit;
    } catch (error) {
      // Basic rate-limit/backoff handling
      const status = error && error.status;
      if (status === 403 || status === 429) {
        const reset =
          error.response &&
          (error.response.headers["retry-after"] ||
            error.response.headers["x-ratelimit-reset"]);
        logger.warn(`Rate limited by GitHub API, retry info: ${reset}`);
      }
      logger.error(`Failed to create commit in ${owner}/${repo}:`, error);
      throw error;
    }
  }
}
