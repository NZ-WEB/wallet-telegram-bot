import { Context, Scenes } from "telegraf";
import { MySceneSession } from "../scenes/MySceneSession.interface";
import { MySession } from "../sessions/MySession.interface";

export interface MyContext extends Context {
  // will be available under `ctx.myContextProp`
  myContextProp: string;

  // declare session type
  session: MySession;
  // declare scene type
  scene: Scenes.SceneContextScene<MyContext, MySceneSession>;
}
