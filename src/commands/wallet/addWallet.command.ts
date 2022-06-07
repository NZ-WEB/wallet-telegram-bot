import { Telegraf } from "telegraf";
import { IWalletContext } from "../../core/context/IWalletContext";
import { currencyScene } from "../../core/scenes/wallet/currency.scene";

export default class AddWalletCommand {
  constructor(private bot: Telegraf<IWalletContext>) {}

  public command(name: string, sceneName: string) {
    this.bot.command(name, (ctx: IWalletContext) =>
      ctx.scene.enter(currencyScene.id)
    );
  }
}
