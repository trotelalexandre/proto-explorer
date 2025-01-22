import { Transactions } from "@/types/transactions";
import { API_URL } from "@/data/constants";

export async function getAllTransactions(): Promise<Transactions> {
  const result: Transactions = await fetch(`${API_URL}/all-transactions`).then(
    (res) => res.json()
  );
  return result;
}
