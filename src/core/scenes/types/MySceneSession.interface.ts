import { Scenes } from "telegraf";

export interface MySceneSession extends Scenes.SceneSessionData {
  // will be available under `ctx.scene.session.mySceneSessionProp`
  name: string;
}
