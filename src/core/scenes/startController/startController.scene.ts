import { Markup, Scenes } from "telegraf";
import { IWalletContext } from "../../context/IWalletContext";

export const startController = new Scenes.BaseScene<IWalletContext>(
  "startController"
);
startController.enter((ctx) =>
  ctx.reply(
    "Нажми кнопки для отображения/добавления финансов",
    Markup.keyboard([
      Markup.button.callback("/show", "SHOW"),
      Markup.button.callback("/add", "ADD"),
    ])
  )
);
