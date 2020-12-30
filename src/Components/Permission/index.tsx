import * as React from "react";
import { usePermissions } from "../../Hooks";
import { PermissionProps } from "../../types";

const Permission = ({
  permissions,
  hasAny,
  has,
  children,
}: React.PropsWithChildren<PermissionProps>) => {
  const [hasAnyPermission, hasPermissions] = usePermissions(permissions);
  if (hasAny) {
    return <>{hasAnyPermission(hasAny) ? children : null}</>;
  } else if (has) {
    return <>{hasPermissions(has) ? children : null}</>;
  }
  return <>{children}</>;
};

export default Permission;
