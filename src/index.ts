/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  InputValues,
  NodeHandlers,
  OutputValues,
} from "@google-labs/graph-runner";
import type {
  BreadboardNode,
  Kit,
  NodeFactory,
  OptionalIdConfiguration,
} from "@google-labs/breadboard";

import headTail, { HeadTailInputs, HeadTailOutputs } from "./nodes/head.js";
import take, { TakeInputs, TakeOutputs } from "./nodes/take.js";
import drop, { DropInputs, DropOutputs } from "./nodes/drop.js";
import undefinedGuard, { GuardInputs, GuardOutputs } from "./nodes/undefinedGuard.js";

const coreHandlers = {
  drop,
  headTail,
  take,
  undefinedGuard
};

/**
 * Syntactic sugar around the `coreHandlers` library.
 */
export class Utils implements Kit {
  url = "npm:@paulkinlan/breadboard-utils-kit";
  #nodeFactory: NodeFactory;
  #handlers: NodeHandlers;

  get handlers() {
    return this.#handlers;
  }

  constructor(nodeFactory: NodeFactory) {
    this.#nodeFactory = nodeFactory;
    this.#handlers = coreHandlers;
  }

  drop<In = DropInputs, Out = DropOutputs>(
    config: OptionalIdConfiguration = {}
  ): BreadboardNode<In, Out> {
    const { $id, ...rest } = config;
    return this.#nodeFactory.create("drop", { ...rest }, $id);
  }

  headTail<In = HeadTailInputs, Out = HeadTailOutputs>(
    config: OptionalIdConfiguration = {}
  ): BreadboardNode<In, Out> {
    const { $id, ...rest } = config;
    return this.#nodeFactory.create("headTail", { ...rest }, $id);
  }

  take<In = TakeInputs, Out = TakeOutputs>(
    config: OptionalIdConfiguration = {}
  ): BreadboardNode<In, Out> {
    const { $id, ...rest } = config;
    return this.#nodeFactory.create("take", { ...rest }, $id);
  }

  undefinedGuard<In = GuardInputs, Out = GuardOutputs>(config: OptionalIdConfiguration = {}
  ): BreadboardNode<In, Out> {
    const { $id, ...rest } = config;
    return this.#nodeFactory.create("undefinedGuard", { ...rest }, $id);
  }
}

export type DropNodeType = ReturnType<Utils["drop"]>;
export type HeadTailNodeType = ReturnType<Utils["headTail"]>;
export type TakeNodeType = ReturnType<Utils["take"]>;
export type UndefinedGuardNodeType = ReturnType<Utils["undefinedGuard"]>;
