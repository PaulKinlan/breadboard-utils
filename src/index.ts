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
import undefinedGuard from "./nodes/undefinedGuard.js";

const coreHandlers = {
  headTail,
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

  headTail(
    config: OptionalIdConfiguration = {}
  ): BreadboardNode {
    const { $id, ...rest } = config;
    return this.#nodeFactory("headTail", { ...rest }, $id);
  }

  undefinedGuard(config: OptionalIdConfiguration = {}
  ): BreadboardNode {
    const { $id, ...rest } = config;
    return this.#nodeFactory("undefinedGuard", { ...rest }, $id);
  }
}

export type HeadTailNodeType = ReturnType<Utils["headTail"]>;
export type UndefinedGuardNodeType = ReturnType<Utils["undefinedGuard"]>;
