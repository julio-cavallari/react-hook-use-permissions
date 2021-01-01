import { HTMLProps } from "react";

interface RootStateType {
  permissions: string[];
  [otherOptions: string]: any;
}

export type SelectorCallbackType = (state: RootStateType) => string[];

export type VerifyMethod =
  | "hasAll"
  | "hasAny"
  | "doesNotHaveAll"
  | "doesNotHaveAny";

interface DefaultPermissionProps extends HTMLProps<HTMLDivElement> {
  permissionsArray?: string[];
  permissionsToVerify?: string | string[];
  verifyMethod: VerifyMethod;
}

export interface PermissionProps extends DefaultPermissionProps {
  useRedux?: boolean;
  selector?: SelectorCallbackType;
}

export interface PermissionWithReduxProps
  extends Omit<DefaultPermissionProps, "permissionsArray"> {
  selector: SelectorCallbackType;
}

export interface PermissionWithoutReduxProps extends DefaultPermissionProps {
  permissionsArray: string[];
}
