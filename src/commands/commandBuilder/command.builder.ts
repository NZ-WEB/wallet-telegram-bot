import { session, Telegraf } from "telegraf";
import StartCommand from "../start/start.command";
import { MyContext } from "../../core/context/MyContext,interface";
import InfoCommand from "../info/info.command";
import { nameScene } from "../../core/scenes/nameScene";
import AddWalletCommand from "../wallet/addWallet.command";
import { IWalletContext } from "../../core/context/IWalletContext";
import GetWalletCommand from "../wallet/getWallet.command";
import { stage } from "../../core/scenes";
import { walletStage } from "../../core/scenes/wallet";
import { Stage } from "telegraf/typings/scenes";

export default class CommandBuilder {
  constructor(private bot: Telegraf<IWalletContext>) {}

  // private start(name: string): void {
  //   new StartCommand(this.bot).command(name);
  // }
  //
  // private info(name: string, sceneName: string = "nameScene"): void {
  //   new InfoCommand(this.bot).command(name, sceneName);
  // }

  private walletAdd(name: string, sceneName: string): void {
    new AddWalletCommand(this.bot).command("add", sceneName);
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

    this.walletAdd("add", "currencyScene");
    this.showWallet("show");

    this.launch();
    // this.start("info");
    // this.info("start");
  }
}
