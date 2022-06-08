import { Markup, Telegraf } from "telegraf";
import { IWalletContext } from "../../core/context/IWalletContext";

export default class StartCommand {
  constructor(private bot: Telegraf<IWalletContext>) {}

  command(name: string, text: string) {
    this.bot.command(name, (ctx: IWalletContext) =>
      ctx.reply(
        text,
        Markup.keyboard([
          Markup.button.callback("/show", "SHOW"),
          Markup.button.callback("/add", "ADD"),
        ])
      )
    );
  }
}
