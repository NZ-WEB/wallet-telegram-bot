import { IWallet } from "./wallet.interface";

export default class Wallet {
  private static instance: Wallet;
  public wallet: IWallet[] = [];

  public static getInstance(): Wallet {
    if (!Wallet.instance) {
      Wallet.instance = new Wallet();
    }
    return this.instance;
  }

  public setInitWallet(currency: string, amount: number): void {
    this.wallet[0] = {
      currency,
      amount,
    };
  }

  public getWallet(): IWallet[] {
    return this.wallet;
  }

  public addWallet(currency: string, amount: number): void {
    if (currency === this.wallet[0].currency) {
      this.wallet[0].amount += amount;
    } else {
      this.wallet.push({ amount, currency });
    }
  }
}
