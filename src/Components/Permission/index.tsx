import * as React from "react";
import { PermissionProps } from "../../types";

import PermissionWithRedux from "./PermissionWithRedux";
import PermissionWithoutRedux from "./PermissionWithoutRedux";

function Permission({
  permissions,
  hasAll,
  hasAny,
  doesNotHaveAll,
  doesNotHaveAny,
  selector,
  children,
}: React.PropsWithChildren<PermissionProps>) {
  if (selector) {
    return (
      <PermissionWithRedux
        hasAll={hasAll}
        hasAny={hasAny}
        doesNotHaveAll={doesNotHaveAll}
        doesNotHaveAny={doesNotHaveAny}
        selector={selector}
      >
        {children}
      </PermissionWithRedux>
    );
  }
  return (
    <PermissionWithoutRedux
      permissions={permissions}
      hasAll={hasAll}
      hasAny={hasAny}
      doesNotHaveAll={doesNotHaveAll}
      doesNotHaveAny={doesNotHaveAny}
    >
      {children}
    </PermissionWithoutRedux>
  );
}

export default Permission;
