import { Scenes } from "telegraf";
import { MySceneSession } from "../scenes/types/MySceneSession.interface";
import { IWalletSceneSession } from "../scenes/types/walletSceneSession.interface";

export interface IWalletSession
  extends Scenes.SceneSession<IWalletSceneSession> {
  currency: string;
  amount: number;
}
