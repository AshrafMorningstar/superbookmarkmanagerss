/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import schedule from "node-schedule";
import { logger } from "./utils/logger.js";

export class Scheduler {
  constructor(generator) {
    this.generator = generator;
    this.jobs = new Map();
  }

  async schedule(options = {}) {
    try {
      const { mode, projectTypes } = options;

      // Cancel any existing jobs
      this.jobs.forEach((job) => job.cancel());
      this.jobs.clear();

      const pattern = options.pattern || "daily";

      if (pattern === "historical") {
        return await this._runHistoricalMode(options);
      }

      return await this._runDailyMode(options);
    } catch (error) {
      logger.error("Failed to schedule:", error);
      throw error;
    }
  }

  async _runHistoricalMode({
    mode,
    projectTypes,
    startDate,
    endDate,
    commitsPerDay,
    maxCommits,
    ...options
  }) {
    const start = startDate ? new Date(startDate) : new Date("2015-01-01");
    const end = endDate ? new Date(endDate) : new Date();
    const commitsPerDayCount = commitsPerDay || 2;
    const maxCommitsCount =
      maxCommits || parseInt(process.env.HISTORICAL_MAX_COMMITS || "20000", 10);

    const dates = this._generateDatesRange(start, end, commitsPerDayCount);
    if (dates.length > maxCommitsCount) {
      logger.warn(
        `Historical run would generate ${dates.length} commits which exceeds maxCommits=${maxCommitsCount}. Aborting.`
      );
      throw new Error(
        "Historical commit count exceeds safe maximum. Reduce range or commitsPerDay."
      );
    }

    logger.info(
      `Starting historical generation for ${dates.length} commits from ${start.toDateString()} to ${end.toDateString()}`
    );

    let successCount = 0;
    for (const date of dates) {
      try {
        await this.generator.generateContent(mode, projectTypes, date, options);
        successCount++;
        if (successCount % 100 === 0) {
          logger.info(`Completed ${successCount} historical commits so far`);
        }
      } catch (error) {
        logger.error(
          `Failed to generate historical commit for ${date.toISOString()}:`,
          error
        );
      }
    }

    logger.info(
      `Historical generation complete. Total attempts: ${dates.length}, successful: ${successCount}`
    );
  }

  async _runDailyMode({
    mode,
    projectTypes,
    commitsPerDay,
    workingHours,
    ...options
  }) {
    const count = commitsPerDay || 3;
    const times = this._generateRandomTimes(count, workingHours);

    for (let index = 0; index < times.length; index++) {
      const time = times[index];
      const rule = new schedule.RecurrenceRule();
      rule.hour = time.getHours();
      rule.minute = time.getMinutes();

      const job = schedule.scheduleJob(rule, async () => {
        try {
          await this.generator.generateContent(
            mode,
            projectTypes,
            null,
            options
          );
          logger.info(`Completed scheduled content generation #${index + 1}`);
        } catch (error) {
          logger.error(
            `Failed scheduled content generation #${index + 1}:`,
            error
          );
        }
      });

      this.jobs.set(index, job);
      logger.info(
        `Scheduled recurring daily job #${index + 1} at ${time.toLocaleTimeString()}`
      );
    }

    logger.info(`Scheduled ${times.length} daily commit jobs`);
  }

  _generateDatesRange(start, end, commitsPerDay) {
    const dates = [];
    const cur = new Date(start);

    while (cur <= end) {
      const times = this._generateRandomTimes(commitPerDaySafe(commitsPerDay), {
        startHour: 8,
        endHour: 22,
      });

      for (const t of times) {
        const d = new Date(
          cur.getFullYear(),
          cur.getMonth(),
          cur.getDate(),
          t.getHours(),
          t.getMinutes(),
          0,
          0
        );
        dates.push(d);
      }
      cur.setDate(cur.getDate() + 1);
    }

    return dates.sort((a, b) => a - b);
  }

  _generateRandomTimes(count, workingHours = {}) {
    const start = workingHours.startHour || 9;
    const end = workingHours.endHour || 17;
    const times = [];

    for (let i = 0; i < count; i++) {
      const hour = Math.floor(Math.random() * (end - start + 1)) + start;
      const minute = Math.floor(Math.random() * 60);
      const time = new Date();
      time.setHours(hour, minute, 0, 0);
      times.push(time);
    }

    return times.sort((a, b) => a - b);
  }
}

function commitPerDaySafe(value) {
  const v = parseInt(value) || 1;
  if (v < 1) return 1;
  if (v > 50) return 50;
  return v;
}
