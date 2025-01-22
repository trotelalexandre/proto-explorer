import { Blocks } from "./block";
import { Coin } from "./coin";
import { Transactions } from "./transactions";

type Mux = {
  state: string;
  sema: number;
};

export type Blockchain = {
  Blocks: Blocks;
  Mux: Mux;
  Reward: number;
  Name: string;
  Coin: Coin;
  PendingTransactions: Transactions;
  State: { [address: string]: number };
};
