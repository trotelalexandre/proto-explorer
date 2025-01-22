export type Transaction = {
  Hash: string;
  Sender: string;
  Recipient: string;
  Amount: number;
};

export type Transactions = Transaction[];
