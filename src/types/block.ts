import { Transactions } from "./transactions";

export type Block = {
  Index: number;
  Timestamp: number;
  Hash: string;
  PrevHash: string;
  Transactions: Transactions;
  Reward: number;
};

export type Blocks = Block[];
