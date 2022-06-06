import { Scenes } from "telegraf";
import { MyContext } from "../context/MyContext,interface";
import { ageScene } from "./ageScene";
import { nameScene } from "./nameScene";

export const stage = new Scenes.Stage<MyContext>([nameScene, ageScene]);
stage.hears("exit", (ctx) => ctx.scene.leave());
