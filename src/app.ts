import CommandBuilder from "./commands/commandBuilder/command.builder";
import { stage } from "./core/scenes";

require("dotenv").config();
const { Telegraf, session } = require("telegraf");

const token: string = process.env.TELEGRAM_BOT_TOKEN!;
if (token === undefined) {
  throw new Error("BOT_TOKEN must be provided!");
}

const bot = new Telegraf(token);

new CommandBuilder(bot).build();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
