import React from "react";
import { usePermissionsWithRedux } from "../../../Hooks";
import { PermissionWithReduxProps } from "../../../types";

function PermissionWithRedux({
  permissionsToVerify,
  verifyMethod,
  selector,
  children,
}: React.PropsWithChildren<PermissionWithReduxProps>) {
  const methods = usePermissionsWithRedux(selector);

  if (methods[verifyMethod](permissionsToVerify)) {
    return <>{children}</>;
  }

  return null;
}

export default PermissionWithRedux;
