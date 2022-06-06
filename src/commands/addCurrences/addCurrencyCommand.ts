import { Telegraf } from "telegraf";

export default class AddCurrencesCommand {
  constructor(private bot: Telegraf) {}

  public command(name: string) {
    this.bot
      .command(name, (ctx) => {
        ctx.reply("Укажите валюту");
      })
      .on("text", (ctx) => {
        ctx.reply(ctx.message.text);
      });
  }
}
