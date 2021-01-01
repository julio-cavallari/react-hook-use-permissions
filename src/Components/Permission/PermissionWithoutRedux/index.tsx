import React from "react";
import { usePermissions } from "../../../Hooks";
import { PermissionWithoutReduxProps } from "../../../types";

function PermissionWithoutRedux({
  permissionsArray,
  permissionsToVerify,
  verifyMethod,
  children,
}: React.PropsWithChildren<PermissionWithoutReduxProps>) {
  const methods = usePermissions(permissionsArray);

  if (methods[verifyMethod](permissionsToVerify)) {
    return <>{children}</>;
  }

  return null;
}

export default PermissionWithoutRedux;
