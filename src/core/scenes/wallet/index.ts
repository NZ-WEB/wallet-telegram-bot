import { Scenes } from "telegraf";
import { IWalletContext } from "../../context/IWalletContext";
import { currencyScene } from "./currency.scene";
import { amountScene } from "./amount.scene";

export const walletStage = new Scenes.Stage<IWalletContext>([
  currencyScene,
  amountScene,
]);
walletStage.hears("exit", (ctx) => ctx.scene.leave());
