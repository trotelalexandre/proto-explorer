import { API_URL } from "@/data/constants";
import { Blocks } from "@/types/block";

export async function getAllBlocks(): Promise<Blocks> {
  const result: Blocks = await fetch(`${API_URL}/all-blocks`).then((res) =>
    res.json()
  );
  return result;
}
