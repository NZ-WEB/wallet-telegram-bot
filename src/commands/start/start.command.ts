import { Telegraf } from "telegraf";
import { MyContext } from "../../core/context/MyContext,interface";

export default class StartCommand {
  constructor(private bot: Telegraf<MyContext>) {}

  command(name: string) {
    this.bot.command(name, (ctx: MyContext) =>
      ctx.reply(
        `Your name is ${ctx.session.name}\n Your age is ${ctx.session.age}`
      )
    );
  }
}
