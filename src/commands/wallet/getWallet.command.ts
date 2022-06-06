import { Telegraf } from "telegraf";
import { IWalletContext } from "../../core/context/IWalletContext";
import Wallet from "../../core/wallet/wallet";

export default class GetWalletCommand {
  private wallet: Wallet = Wallet.getInstance();

  constructor(private bot: Telegraf<IWalletContext>) {}

  command(name: string) {
    this.bot.command(name, (ctx: IWalletContext) =>
      ctx.reply(
        `Ваш кошелёк: ${
          this.wallet.getWallet().length
            ? this.wallet
                .getWallet()
                .map((item) => `${item.amount} ${item.currency}`)
                .join(", ")
            : "пуст"
        }`
      )
    );
  }
}
