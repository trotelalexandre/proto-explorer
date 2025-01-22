"use client";

import { Blocks } from "@/types/block";
import { getAllBlocks } from "@/utils/blocks/getAllBlocks";
import { useEffect, useState } from "react";
import Moment from "moment";

export default function RecentBlocks() {
  const [blocks, setBlocks] = useState<Blocks>([]);

  useEffect(() => {
    getAllBlocks().then((data) => setBlocks(data));
  }, []);

  return (
    <ul className="space-y-2">
      {blocks.map((block) => (
        <li
          key={block.Index}
          className="p-4 border rounded-lg shadow-sm transition-shadow duration-200"
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div>
                <span className="font-bold text-lg">Block {block.Index}</span>
                <div className="text-sm text-muted-foreground">
                  {Moment(new Date(block.Timestamp)).format(
                    "YYYY-MM-DD HH:mm:ss"
                  )}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Transactions: {block.Transactions.length}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
