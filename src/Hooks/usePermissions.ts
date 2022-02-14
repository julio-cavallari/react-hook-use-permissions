/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import * as functions from "./functions";

function usePermissions<T = any[]>(permissions: T) {
  const [state] = useState<T>(permissions);

  const hasAll = functions.hasAll(state);
  const hasAny = functions.hasAny(state);
  const doesNotHaveAll = functions.doesNotHaveAll(state);
  const doesNotHaveAny = functions.doesNotHaveAny(state);

  return { hasAny, hasAll, doesNotHaveAny, doesNotHaveAll };
}

export default usePermissions;
