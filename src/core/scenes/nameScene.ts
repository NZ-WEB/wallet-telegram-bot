import { Scenes } from "telegraf";
import { MyContext } from "../context/MyContext,interface";
import { exit_keyboard } from "../keyboards/keyboards";

export const nameScene = new Scenes.BaseScene<MyContext>("nameScene");
nameScene.enter((ctx) => ctx.reply("Wgat is your name ?", exit_keyboard));
nameScene.on("text", (ctx) => {
  return ctx.scene.enter("ageScene", { name: ctx.message.text });
});
nameScene.leave((ctx) => ctx.reply("Leaving name scene"));
