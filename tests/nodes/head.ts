import { Board } from "@google-labs/breadboard";
import { Utils } from "@paulkinlan/breadboard-utils-kit";
import path from "path";
import test from 'ava';

test('head', async (t) => {
  const board = await Board.load(
    path.join(process.cwd(), "graphs", "head.json")
  );

  board.addKit(Utils);

  const result = await board.runOnce({
    input: [1, 2, 3, 4]
  });

  t.is(result.text, 1);
});
