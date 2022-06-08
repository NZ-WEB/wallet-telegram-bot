import { Scenes } from "telegraf";
import { price_keyboard, remove_Keyboard } from "../../keyboards/keyboards";
import { IWalletContext } from "../../context/IWalletContext";
import Wallet from "../../wallet/wallet";

export const amountScene = new Scenes.BaseScene<IWalletContext>("amountScene");
amountScene.enter((ctx) =>
  ctx.reply("Сколько вы хотите добавить", price_keyboard)
);
amountScene.on("text", (ctx) => {
  ctx.session.amount = parseInt(ctx.message.text);
  //@ts-ignore
  ctx.session.currency = ctx.scene.state.currency;
  Wallet.getInstance().addWallet(
    ctx.session.currency.toUpperCase(),
    ctx.session.amount
  );

  ctx.reply(
    `${ctx.session.currency} ${ctx.session.amount} успешно добавлено`,
    remove_Keyboard
  );

  return ctx.scene.leave();
});
amountScene.leave((ctx) => ctx.scene.enter("startController"));
