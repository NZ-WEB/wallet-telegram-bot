import { Telegraf } from "telegraf";
import { IWalletContext } from "../../core/context/IWalletContext";

export default class StartCommand {
  constructor(private bot: Telegraf<IWalletContext>) {}

  command(name: string, sceneName: string = "startController") {
    this.bot.command(name, (ctx: IWalletContext) => ctx.scene.enter(sceneName));
  }
}
