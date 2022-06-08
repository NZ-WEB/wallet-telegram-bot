import { Scenes } from "telegraf";
import { action_keyboard } from "../../keyboards/keyboards";
import { IWalletContext } from "../../context/IWalletContext";

export const currencyScene = new Scenes.BaseScene<IWalletContext>(
  "currencyScene"
);
currencyScene.enter((ctx) =>
  ctx.reply("Укажите валюту", action_keyboard(["RUB", "USD"]))
);
currencyScene.on("text", (ctx) => {
  return ctx.scene.enter("amountScene", { currency: ctx.message.text });
});
currencyScene.leave((ctx) => ctx.reply("Следующий вопрос"));
