import { session, Telegraf } from "telegraf";
import StartCommand from "../start/start.command";
import AddWalletCommand from "../wallet/addWallet.command";
import { IWalletContext } from "../../core/context/IWalletContext";
import GetWalletCommand from "../wallet/getWallet.command";
import { walletStage } from "../../core/scenes/wallet";

export default class CommandBuilder {
  constructor(private bot: Telegraf<IWalletContext>) {}

  private start(name: string, title: string): void {
    new StartCommand(this.bot).command(name, title);
  }

  private walletAdd(name: string, sceneName: string): void {
    new AddWalletCommand(this.bot).command(name, sceneName);
  }

  private showWallet(name: string): void {
    new GetWalletCommand(this.bot).command(name);
  }

  private useWallet(): void {
    this.bot.use(session(), walletStage.middleware());
  }

  private launch(): void {
    this.bot.launch();
  }

  build() {
    this.useWallet();

    this.start(
      "start",
      "Привет! Я - бот копилка. Здесь ты можешь вносить финансы в разных валютах и отслеживать их"
    );
    this.walletAdd("add", "currencyScene");
    this.showWallet("show");

    this.launch();
  }
}
