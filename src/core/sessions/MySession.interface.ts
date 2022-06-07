import { Scenes } from "telegraf";
import { MySceneSession } from "../scenes/types/MySceneSession.interface";

export interface MySession extends Scenes.SceneSession<MySceneSession> {
  // will be available under `ctx.session.mySessionProp`
  name: string;
  age: number;
}
