import { HTMLProps } from "react";
import { DefaultRootState } from "react-redux";

export type SelectorCallbackType<TState = DefaultRootState, TSelected = string[]> = (state: TState) => TSelected;

export interface PermissionProps<TState = DefaultRootState, TSelected = string[]> extends HTMLProps<HTMLDivElement> {
  permissions?: string[];
  hasAll?: string | string[];
  hasAny?: string | string[];
  doesNotHaveAll?: string | string[];
  doesNotHaveAny?: string | string[];
  selector?: SelectorCallbackType<TState, TSelected>;
}

export interface ReduxPermissionProps<TState, TSelected>
  extends Omit<PermissionProps<TState, TSelected>, "permissions"> {
  selector: SelectorCallbackType<TState, TSelected>;
}

export interface PermissionsProps extends PermissionProps {
  permissions: string[];
}

export type Method = (permissions: string | string[]) => boolean;
