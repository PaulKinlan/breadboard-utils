/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InputValues, OutputValues } from "@google-labs/graph-runner";

export type DropOutputs = OutputValues & {
  output?: any[];
};

export type DropInputs = InputValues & {
  input: any[];
  count: number;
};

export default async (inputs: InputValues): Promise<DropOutputs> => {
  const { input, count } = inputs as DropInputs;

  return { output: input.slice(count) };
};