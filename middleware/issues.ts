import bot from "../helper/bot.ts";
import { GCTX, IssuesEvent } from "../deps.ts";

export default async (event: IssuesEvent, _context: GCTX) => {
  const { issue } = event;
  let msg = `⚠️ <b>Issue ${issue.state}:</b> ${issue.title}` +
      `\n` +
      `\n<b>Issue Contents:</b> ${issue.body}`;

  if (issue.assignee) {
    msg += `\n<b>Assignee:</b> ${issue.assignee.login}`;
  }

  if (issue.labels !== undefined && issue.labels.length > 0) {
    msg += `\n<b>Labels:</b> ${issue.labels.map((label) => label.name).join(", ")}`;
  }

  await bot.push(
    msg,
    issue.html_url,
  );
};
