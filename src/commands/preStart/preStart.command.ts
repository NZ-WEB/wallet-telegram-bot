import { Telegraf } from "telegraf";
import { IWalletContext } from "../../core/context/IWalletContext";
import { begin_keyboard } from "../../core/keyboards/keyboards";

export default class PreStartCommand {
  constructor(private bot: Telegraf<IWalletContext>) {}

  command(title: string) {
    this.bot.start((ctx) => ctx.reply(title, begin_keyboard));
  }
}
