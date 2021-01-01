import * as React from "react";
import { usePermissions } from "../../Hooks";
import { PermissionProps } from "../../types";

import PermissionWithRedux from "./PermissionWithRedux";
import PermissionWithoutRedux from "./PermissionWithoutRedux";

function Permission({
  permissionsArray,
  permissionsToVerify = "",
  verifyMethod,
  useRedux,
  selector,
  children,
}: React.PropsWithChildren<PermissionProps>) {
  if (useRedux) {
    return (
      <PermissionWithRedux
        permissionsToVerify={permissionsToVerify}
        verifyMethod={verifyMethod}
        selector={selector}
      >
        {children}
      </PermissionWithRedux>
    );
  }
  return (
    <PermissionWithoutRedux
      permissionsArray={permissionsArray}
      permissionsToVerify={permissionsToVerify}
      verifyMethod={verifyMethod}
    >
      {children}
    </PermissionWithoutRedux>
  );
}

export default Permission;
