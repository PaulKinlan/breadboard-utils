import { Board } from "@google-labs/breadboard";
import { Utils } from "@paulkinlan/breadboard-utils-kit";
import path from "path";
import test from 'ava';

test('tail', async (t) => {
  const board = await Board.load(
    path.join(process.cwd(), "graphs", "tail.json")
  );

  board.addKit(Utils);

  const result = await board.runOnce({
    input: [1, 2, 3, 4],
  });

  t.is((result.text as any[]).length, 3);
  t.like(result.text, [2, 3, 4]);
});
