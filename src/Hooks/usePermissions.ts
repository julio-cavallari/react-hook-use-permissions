/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import * as functions from "./functions";

function usePermissions<T = unknown[]>(permissions: T) {
  const [state] = useState(permissions);

  const hasAll = functions.hasAll(state as any);
  const hasAny = functions.hasAny(state as any);
  const doesNotHaveAll = functions.doesNotHaveAll(state as any);
  const doesNotHaveAny = functions.doesNotHaveAny(state as any);

  return { hasAny, hasAll, doesNotHaveAny, doesNotHaveAll };
}

export default usePermissions;
