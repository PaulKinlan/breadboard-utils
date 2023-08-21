/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InputValues, OutputValues } from "@google-labs/graph-runner";

export type HeadTailOutputs = OutputValues & {
  head?: any;
  tail?: any[];
};

export type HeadTailInputs = InputValues & {
  input: any[];
};

export default async (inputs: InputValues): Promise<HeadTailOutputs> => {
  const { input } = inputs as HeadTailInputs;

  if (input == undefined || input.length == 0) { 
    return { head: undefined, tails: undefined }; 
  }

  const [head, tail] = [input[0], input.slice(1)];
  return { head, tail };
};