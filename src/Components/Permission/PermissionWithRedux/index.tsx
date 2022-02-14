import React from "react";
import { usePermissionsWithRedux } from "../../../Hooks";
import { PermissionWithReduxProps, Method } from "../../../types";

function PermissionWithRedux({
  hasAll,
  hasAny,
  doesNotHaveAll,
  doesNotHaveAny,
  selector,
  children,
}: React.PropsWithChildren<PermissionWithReduxProps>) {
  const methods = usePermissionsWithRedux(selector);
  const [permissions, setPermissions] = React.useState<string | string[] | undefined | null>([]);
  const [method, setMethod] = React.useState<Method | null>(null);

  if (hasAll) {
    setMethod(methods.hasAll);
    setPermissions(hasAll);
  }

  if (hasAny) {
    setMethod(methods.hasAny);
    setPermissions(hasAny);
  }

  if (doesNotHaveAll) {
    setMethod(methods.doesNotHaveAll);
    setPermissions(doesNotHaveAll);
  }

  if (doesNotHaveAny) {
    setMethod(methods.doesNotHaveAny);
    setPermissions(doesNotHaveAny);
  }

  if (method && method(permissions)) {
    return <>{children}</>;
  }

  return null;
}

export default PermissionWithRedux;
