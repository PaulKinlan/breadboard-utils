import { Board } from "@google-labs/breadboard";
import { Utils } from "@paulkinlan/breadboard-utils-kit";
import path from "path";
import test from 'ava';

test('iterate-with-guard', async (t) => {

  const iterateBoard = await Board.load(
    path.join(process.cwd(), "graphs", "iterate-with-guard.json")
  );

  iterateBoard.addKit(Utils);

  const outputs = [];

  for await (const result of iterateBoard.run()) {
    if (result.seeksInputs) {
      result.inputs = { input: [1, 2, 3, 4] };

    }
    else {
      outputs.push(result.outputs);
    }
  }

  console.log("Iteration result", outputs);

  t.is(outputs.length, 4);
});


test('iterate', async (t) => {

  const iterateBoard = await Board.load(
    path.join(process.cwd(), "graphs", "iterate.json")
  );

  iterateBoard.addKit(Utils);

  // console.log(iterateBoard.mermaid())

  const outputs = []

  for await (const result of iterateBoard.run()) {
    console.log("Results", result)
    if (result.seeksInputs) {
      result.inputs = { input: [1, 2, 3, 4] };

    }
    else {
      outputs.push(result.outputs);
    }
  }

  t.is(outputs.length, 4)
});

test('iterate-will-fail', async (t) => {

  const iterateBoard = await Board.load(
    path.join(process.cwd(), "graphs", "iterate-fail.json")
  );

  iterateBoard.addKit(Utils);

  // console.log(iterateBoard.mermaid())

  const outputs = []

  for await (const result of iterateBoard.run()) {
    console.log("Results", result)
    if (result.seeksInputs) {
      result.inputs = { input: [1, 2, 3, 4] };

    }
    else {
      outputs.push(result.outputs);
    }
  }

  console.log("Iteration result", outputs);

  t.is(outputs.length, 4)
});
