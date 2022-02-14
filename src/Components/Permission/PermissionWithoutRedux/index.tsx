import React from "react";
import { usePermissions } from "../../../Hooks";
import { PermissionWithoutReduxProps, Method } from "../../../types";

function PermissionWithoutRedux({
  permissions,
  hasAll,
  hasAny,
  doesNotHaveAll,
  doesNotHaveAny,
  children,
}: React.PropsWithChildren<PermissionWithoutReduxProps>) {
  const methods = usePermissions<string[]>(permissions);
  const [permissionsToVerify, setPermissionsToverify] = React.useState<string | string[] | undefined | null>([]);
  const [method, setMethod] = React.useState<Method | null>(null);

  if (hasAll) {
    setMethod(methods.hasAll);
    setPermissionsToverify(hasAll);
  }

  if (hasAny) {
    setMethod(methods.hasAny);
    setPermissionsToverify(hasAny);
  }

  if (doesNotHaveAll) {
    setMethod(methods.doesNotHaveAll);
    setPermissionsToverify(doesNotHaveAll);
  }

  if (doesNotHaveAny) {
    setMethod(methods.doesNotHaveAny);
    setPermissionsToverify(doesNotHaveAny);
  }

  if (!method || (permissionsToVerify?.length && method && method(permissionsToVerify))) {
    return <>{children}</>;
  }

  return null;
}

export default PermissionWithoutRedux;
