import { HTMLProps } from "react";

export interface PermissionProps extends HTMLProps<HTMLDivElement> {
  permissions: string[];
  hasAny?: string;
  has?: string;
}
