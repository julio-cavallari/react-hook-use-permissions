import * as React from "react";
import { PermissionProps } from "../../types";

import PermissionWithRedux from "./PermissionWithRedux";
import PermissionWithoutRedux from "./PermissionWithoutRedux";
import { DefaultRootState } from "react-redux";

function Permission<TState = DefaultRootState, TSelected = string[]>({
  permissions,
  hasAll,
  hasAny,
  doesNotHaveAll,
  doesNotHaveAny,
  selector,
  children,
}: React.PropsWithChildren<PermissionProps<TState, TSelected>>) {
  if (selector) {
    return (
      <PermissionWithRedux<TState, TSelected>
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
