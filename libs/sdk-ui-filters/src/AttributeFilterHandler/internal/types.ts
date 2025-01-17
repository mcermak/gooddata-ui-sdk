// (C) 2022 GoodData Corporation
import { AttributeFilterHandlerStoreContext } from "./redux";

/**
 * Configuration for attribute filter handler initialization.
 *
 * @internal
 */
export type AttributeFilterHandlerConfig = Omit<AttributeFilterHandlerStoreContext, "eventListener">;
