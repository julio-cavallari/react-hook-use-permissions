import * as React from "react";
import { usePermissions } from "../../Hooks";
import { PermissionProps } from "../../types";

function Permission({
  permissions,
  hasAny,
  hasAll,
  children,
}: React.PropsWithChildren<PermissionProps>) {
  const {
    hasAny: hasAnyPermission,
    hasAll: hasAllPermissions,
  } = usePermissions(permissions);
  if (hasAny) {
    return <>{hasAnyPermission(hasAny) ? children : null}</>;
  } else if (hasAll) {
    return <>{hasAllPermissions(hasAll) ? children : null}</>;
  }
  return <>{children}</>;
}

export default Permission;
