import React from "react";
import { usePermissionsWithRedux } from "../../../Hooks";
import { ReduxPermissionProps } from "../../../types";

function PermissionWithRedux<TState, TSelected>({
  hasAll,
  hasAny,
  doesNotHaveAll,
  doesNotHaveAny,
  selector,
  children,
}: React.PropsWithChildren<ReduxPermissionProps<TState, TSelected>>) {
  const methods = usePermissionsWithRedux(selector);
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);

  if (hasAll && hasPermission === null) {
    setHasPermission(methods.hasAll(hasAll));
  }

  if (hasAny && hasPermission === null) {
    setHasPermission(methods.hasAny(hasAny));
  }

  if (doesNotHaveAll && hasPermission === null) {
    setHasPermission(methods.doesNotHaveAll(doesNotHaveAll));
  }

  if (doesNotHaveAny && hasPermission === null) {
    setHasPermission(methods.doesNotHaveAny(doesNotHaveAny));
  }

  if (hasPermission || (!hasAll && !hasAny && !doesNotHaveAll && !doesNotHaveAny)) {
    return <>{children}</>;
  }

  return null;
}

export default PermissionWithRedux;
