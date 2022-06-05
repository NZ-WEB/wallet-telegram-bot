import { Telegraf } from "telegraf";

export default class InitCommand {
  constructor(public bot: Telegraf) {}

  command(name: string, message: string) {
    this.bot.command(name, (ctx) => {
      ctx.reply(message);
    });
  }
}
