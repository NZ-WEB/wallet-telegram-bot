import { session, Telegraf } from "telegraf";
import StartCommand from "../start/start.command";
import AddWalletCommand from "../wallet/addWallet.command";
import { IWalletContext } from "../../core/context/IWalletContext";
import GetWalletCommand from "../wallet/getWallet.command";
import { stage } from "../../core/scenes";
import PreStartCommand from "../preStart/preStart.command";

export default class CommandBuilder {
  constructor(private bot: Telegraf<IWalletContext>) {}

  private preStart(title: string): void {
    new PreStartCommand(this.bot).command(title);
  }

  private start(name: string, scemeName: string): void {
    new StartCommand(this.bot).command(name, scemeName);
  }

  private walletAdd(name: string, sceneName: string): void {
    new AddWalletCommand(this.bot).command(name, sceneName);
  }

  private showWallet(name: string): void {
    new GetWalletCommand(this.bot).command(name);
  }

  private useStage(): void {
    this.bot.use(session(), stage.middleware());
  }

  private launch(): void {
    this.bot.launch();
  }

  build() {
    this.useStage();

    this.preStart(
      "Привет! Я - бот/копилка! Здесь ты можешь добавить в меня деньги в разной валюте и посмотреть результат. Напиши '/begin' для начала"
    );
    this.start("begin", "startController");
    this.walletAdd("add", "currencyScene");
    this.showWallet("show");

    this.launch();
  }
}
