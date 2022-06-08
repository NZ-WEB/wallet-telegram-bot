import { Markup } from "telegraf";

export const action_keyboard = (currencys: string[]) =>
  Markup.keyboard(["exit", ...currencys], {
    wrap: () => false,
  }).oneTime();

export const exit_keyboard = Markup.keyboard(["exit"]).oneTime();

export const remove_Keyboard = Markup.removeKeyboard();
