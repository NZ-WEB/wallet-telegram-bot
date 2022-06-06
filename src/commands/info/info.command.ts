import { Telegraf } from "telegraf";
import { MyContext } from "../../core/context/MyContext,interface";

export default class InfoCommand {
  constructor(private bot: Telegraf<MyContext>) {}

  public command(name: string, sceneName: string = "nameScene") {
    this.bot.command(name, (ctx: MyContext) => ctx.scene.enter(sceneName));
  }
}
