/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  NodeHandlers
} from "@google-labs/graph-runner";
import type {
  BreadboardNode,
  Kit,
  NodeFactory,
  OptionalIdConfiguration,
} from "@google-labs/breadboard";

import headTail from "./nodes/head.js";
import take from "./nodes/take.js";
import drop from "./nodes/drop.js";
import undefinedGuard from "./nodes/undefinedGuard.js";

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

  drop(
    config: OptionalIdConfiguration = {}
  ): BreadboardNode {
    const { $id, ...rest } = config;
    return this.#nodeFactory("drop", { ...rest }, $id);
  }

  headTail(
    config: OptionalIdConfiguration = {}
  ): BreadboardNode {
    const { $id, ...rest } = config;
    return this.#nodeFactory("headTail", { ...rest }, $id);
  }

  take(
    config: OptionalIdConfiguration = {}
  ): BreadboardNode {
    const { $id, ...rest } = config;
    return this.#nodeFactory("take", { ...rest }, $id);
  }

  undefinedGuard(config: OptionalIdConfiguration = {}
  ): BreadboardNode {
    const { $id, ...rest } = config;
    return this.#nodeFactory("undefinedGuard", { ...rest }, $id);
  }
}

export type DropNodeType = ReturnType<Utils["drop"]>;
export type HeadTailNodeType = ReturnType<Utils["headTail"]>;
export type TakeNodeType = ReturnType<Utils["take"]>;
export type UndefinedGuardNodeType = ReturnType<Utils["undefinedGuard"]>;
