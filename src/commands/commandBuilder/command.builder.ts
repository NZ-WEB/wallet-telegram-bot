import { Telegraf } from "telegraf";
import StartCommand from "../start/start.command";
import { MyContext } from "../../core/context/MyContext,interface";
import InfoCommand from "../info/info.command";
import { nameScene } from "../../core/scenes/nameScene";

export default class CommandBuilder {
  constructor(private bot: Telegraf<MyContext>) {}

  private start(name: string): void {
    new StartCommand(this.bot).command(name);
  }

  private info(name: string, sceneName: string = "nameScene"): void {
    new InfoCommand(this.bot).command(name, sceneName);
  }

  build() {
    this.start("info");
    this.info("start", "nameScene");
  }
}
