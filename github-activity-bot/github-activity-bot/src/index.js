/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { config } from "dotenv";
import inquirer from "inquirer";
import { GitHubClient } from "./github/client.js";
import { ProjectGenerator } from "./generators/projectGenerator.js";
import { Scheduler } from "./scheduler.js";
import { logger } from "./utils/logger.js";

// Load environment variables
config();

async function main() {
  try {
    // Initialize GitHub client
    const github = new GitHubClient();

    // Get user preferences
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "repoMode",
        message: "Choose repository mode:",
        choices: [
          { name: "Single repository with multiple projects", value: "single" },
          {
            name: "Multiple repositories (one per project)",
            value: "multiple",
          },
        ],
      },
      {
        type: "checkbox",
        name: "projectTypes",
        message: "Select project types to generate:",
        choices: [
          { name: "Calculator App", value: "calculator" },
          { name: "Todo List", value: "todo" },
          { name: "Portfolio Website", value: "portfolio" },
          { name: "Shopping Cart", value: "shopping" },
          { name: "Example (multi-language)", value: "example" },
        ],
      },
      {
        type: "list",
        name: "pattern",
        message: "Choose schedule pattern:",
        choices: [
          { name: "Daily (recurring realistic times)", value: "daily" },
          {
            name: "Historical replay (generate commits from past dates)",
            value: "historical",
          },
        ],
      },
      {
        type: "input",
        name: "startDate",
        message: "(Historical) Start date (YYYY-MM-DD) [default: 2015-01-01]:",
        when: (answers) => answers.pattern === "historical",
        validate: (input) => {
          if (!input) return true;
          return !isNaN(new Date(input)) || "Enter a valid date YYYY-MM-DD";
        },
      },
      {
        type: "input",
        name: "endDate",
        message: "(Historical) End date (YYYY-MM-DD) [default: today]:",
        when: (answers) => answers.pattern === "historical",
        validate: (input) => {
          if (!input) return true;
          return !isNaN(new Date(input)) || "Enter a valid date YYYY-MM-DD";
        },
      },
      {
        type: "input",
        name: "commitsPerDay",
        message: "How many commits per day? (1-50):",
        default: "3",
        validate: (input) => {
          const num = parseInt(input);
          return num >= 1 && num <= 50
            ? true
            : "Please enter a number between 1 and 50";
        },
      },
      {
        type: "confirm",
        name: "useExisting",
        message: "Use an existing repository instead of creating new ones?",
        default: false,
      },
      {
        type: "input",
        name: "existingRepo",
        message:
          "If using existing repo, enter owner/repo (e.g. username/repo):",
        when: (answers) => answers.useExisting === true,
        validate: (input) => {
          return (input && input.includes("/")) || "Enter in format owner/repo";
        },
      },
    ]);

    // Initialize project generator
    const generator = new ProjectGenerator(github);

    // Initialize scheduler
    const scheduler = new Scheduler(generator);

    const scheduleOptions = {
      mode: answers.repoMode,
      projectTypes: answers.projectTypes,
      commitsPerDay: parseInt(answers.commitsPerDay),
      pattern: answers.pattern,
    };

    if (answers.pattern === "historical") {
      if (answers.startDate) scheduleOptions.startDate = answers.startDate;
      if (answers.endDate) scheduleOptions.endDate = answers.endDate;
      // If using existing repo, pass repo name
      if (answers.useExisting && answers.existingRepo)
        scheduleOptions.repoName = answers.existingRepo.split("/")[1];
    }

    if (answers.useExisting && answers.existingRepo) {
      const [owner, repo] = answers.existingRepo.split("/");
      // If using existing, we won't auto-create repos; set options to use existing repo with owner
      scheduleOptions.existingOwner = owner;
      scheduleOptions.existingRepo = repo;
    }

    // Configure and start the scheduler
    await scheduler.schedule(scheduleOptions);

    logger.info("Bot started successfully! Check the logs for activity.");
  } catch (error) {
    logger.error("Failed to start bot:", error);
    process.exit(1);
  }
}

main();
