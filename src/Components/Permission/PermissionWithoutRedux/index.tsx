import React from "react";
import { usePermissions } from "../../../Hooks";
import { PermissionProps } from "../../../types";

function PermissionWithoutRedux({
  permissions,
  hasAll,
  hasAny,
  doesNotHaveAll,
  doesNotHaveAny,
  children,
}: React.PropsWithChildren<PermissionProps>) {
  const methods = usePermissions<string[] | undefined>(permissions);
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

export default PermissionWithoutRedux;
