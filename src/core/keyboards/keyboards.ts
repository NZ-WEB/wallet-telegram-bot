import { Markup } from "telegraf";

export const action_keyboard = (currencys: string[]) =>
  Markup.keyboard(["exit", ...currencys], {
    wrap: () => false,
  }).oneTime();

export const exit_keyboard = Markup.keyboard(["exit"]).oneTime();

export const begin_keyboard = Markup.keyboard(["/begin"]).oneTime();
export const price_keyboard = Markup.keyboard([
  ["100"],
  ["500"],
  ["10", "50", "1000", "5000"],
  ["exit"],
]).oneTime();

export const remove_Keyboard = Markup.removeKeyboard();
