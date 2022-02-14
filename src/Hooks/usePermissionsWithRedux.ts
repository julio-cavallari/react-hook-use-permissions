/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import { DefaultRootState, useSelector } from "react-redux";
import { SelectorCallbackType } from "../types";
import * as functions from "./functions";

function usePermissionsWithRedux<TState = DefaultRootState, TSelected = unknown>(
  selector: SelectorCallbackType<TState, TSelected>
) {
  const permissions = useSelector<TState, TSelected>(selector);
  const [state] = useState(permissions);

  const hasAll = functions.hasAll(state);
  const hasAny = functions.hasAny(state);
  const doesNotHaveAll = functions.doesNotHaveAll(state);
  const doesNotHaveAny = functions.doesNotHaveAny(state);

  return { hasAny, hasAll, doesNotHaveAny, doesNotHaveAll };
}

export default usePermissionsWithRedux;
