import { HTMLProps } from "react";

export interface PermissionProps extends HTMLProps<HTMLDivElement> {
  permissions: string[];
  hasAny?: string | string[];
  hasAll?: string | string[];
}
