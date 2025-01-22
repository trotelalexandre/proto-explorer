"use client";

import { Transactions } from "@/types/transactions";
import { getAllTransactions } from "@/utils/transactions/getAllTransactions";
import { useEffect, useState } from "react";

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState<Transactions>([]);

  useEffect(() => {
    getAllTransactions().then((data) => setTransactions(data));
  }, []);

  return (
    <ul className="space-y-2">
      {transactions.map((tx) => (
        <li
          key={tx.Hash}
          className="p-4 border rounded-lg shadow-sm transition-shadow duration-200"
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div>
                <span className="font-bold text-lg">Tx {tx.Hash}</span>
                <div className="text-sm text-muted-foreground">
                  {tx.Amount} PRT
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
