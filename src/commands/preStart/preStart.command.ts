import { Telegraf } from "telegraf";
import { IWalletContext } from "../../core/context/IWalletContext";

export default class PreStartCommand {
  constructor(private bot: Telegraf<IWalletContext>) {}

  command(title: string) {
    this.bot.start((ctx) => ctx.reply(title));
  }
}
