import InitCommand from "../init/init.command";
import { Telegraf } from "telegraf";

export default class CommandBuilder {
  constructor(private bot: Telegraf) {}

  private init(name: string, message: string): void {
    new InitCommand(this.bot).command(name, message);
  }

  build() {
    this.init("start", "Начнётся веселье");
  }
}
