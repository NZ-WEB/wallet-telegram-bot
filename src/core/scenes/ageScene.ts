import { Scenes } from "telegraf";
import { MyContext } from "../context/MyContext,interface";
import { exit_keyboard, remove_Keyboard } from "../keyboards/keyboards";

export const ageScene = new Scenes.BaseScene<MyContext>("ageScene");
ageScene.enter((ctx) => ctx.reply("Hoy old are you?", exit_keyboard));
ageScene.on("text", (ctx) => {
  ctx.session.age = parseInt(ctx.message.text);
  //@ts-ignore
  ctx.session.name = ctx.scene.state.name;

  ctx.reply("New info has ben set", remove_Keyboard);

  return ctx.scene.leave();
});
ageScene.leave((ctx) => ctx.reply("Leaving age scene"));
