import { Markup, Scenes } from "telegraf";
import { IWalletContext } from "../../context/IWalletContext";

export const startController = new Scenes.BaseScene<IWalletContext>(
  "startController"
);
startController.enter((ctx) =>
  ctx.reply(
    "Привет! Я - бот копилка. Нажми кнопки для отображение/добавления финансов",
    Markup.keyboard([
      Markup.button.callback("/show", "SHOW"),
      Markup.button.callback("/add", "ADD"),
    ])
  )
);
startController.leave((ctx) => ctx.reply("Следующий вопрос"));
