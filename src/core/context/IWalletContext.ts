import { Scenes, Context } from "telegraf";
import { IWalletSession } from "../sessions/IWalletSession";
import { IWalletSceneSession } from "../scenes/types/walletSceneSession.interface";

export interface IWalletContext extends Context {
  walletContextProp: string;

  // declare session type
  session: IWalletSession;
  // declare scene type
  scene: Scenes.SceneContextScene<IWalletContext, IWalletSceneSession>;
}
