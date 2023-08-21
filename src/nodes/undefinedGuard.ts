/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InputValues, OutputValues } from "@google-labs/graph-runner";

export type GuardOutputs = OutputValues & {
  "true": any;
  "false": any;
};

export type GuardInputs = InputValues & {
  input: any;
};

export default async (inputs: InputValues): Promise<GuardOutputs> => {
  const { input } = inputs as GuardInputs;
  const isUndefined = input == undefined || input.length == 0;

  return { "true": isUndefined ? true : undefined, "false": !isUndefined ? input : undefined };
};