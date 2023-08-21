/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InputValues, OutputValues } from "@google-labs/graph-runner";

export type TakeOutputs = OutputValues & {
  output?: any[];
};

export type TakeInputs = InputValues & {
  input: any[];
  count: number;
};

export default async (inputs: InputValues): Promise<TakeOutputs> => {
  const { input, count } = inputs as TakeInputs;

  return { output: input.slice(0, count) };
};