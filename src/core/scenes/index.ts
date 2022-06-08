import { Scenes } from "telegraf";
import { IWalletContext } from "../context/IWalletContext";
import { currencyScene } from "./wallet/currency.scene";
import { amountScene } from "./wallet/amount.scene";
import { startController } from "./startController/startController.scene";

export const stage = new Scenes.Stage<IWalletContext>([
  currencyScene,
  amountScene,
  startController,
]);
stage.hears("exit", (ctx) => ctx.scene.leave());
