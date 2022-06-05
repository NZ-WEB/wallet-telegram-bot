import { Markup, Telegraf } from "telegraf";
require("dotenv").config();

import { Money, Currencies } from "ts-money";
import axios from "axios";
import Wallet from "./core/wallet/wallet";
import CommandBuilder from "./commands/commandBuilder/command.builder";
/**
 * TELEGRAM_BOT_TOKEN
 * Can find in .env file
 */
const TELEGRAM_BOT_TOKEN: string = process.env.TELEGRAM_BOT_TOKEN!;
const CURRENCY_ACCESS_KEY: string = process.env.CURRENCY_ACCESS_KEY!;
const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

bot.use(Telegraf.log());

const wallet = Wallet.getInstance();
wallet.setInitWallet("RUB", 1000);
wallet.addWallet("RUB", 1000);

console.log(wallet);

new CommandBuilder(bot).build();

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
