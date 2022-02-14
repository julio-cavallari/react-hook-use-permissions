import { HTMLProps } from "react";
import { DefaultRootState } from "react-redux";

export type SelectorCallbackType<TState = DefaultRootState, TSelected = string[]> = (state: TState) => TSelected;

interface DefaultPermissionProps extends HTMLProps<HTMLDivElement> {
  permissions?: string[];
  hasAll?: string | string[];
  hasAny?: string | string[];
  doesNotHaveAll?: string | string[];
  doesNotHaveAny?: string | string[];
}

export type Method = (permissions: string | string[]) => boolean;

export interface PermissionProps extends DefaultPermissionProps {
  selector?: SelectorCallbackType;
}

export interface PermissionWithReduxProps extends Omit<DefaultPermissionProps, "permissionsArray"> {
  selector: SelectorCallbackType;
}

export interface PermissionWithoutReduxProps extends DefaultPermissionProps {
  permissions: string[];
}
