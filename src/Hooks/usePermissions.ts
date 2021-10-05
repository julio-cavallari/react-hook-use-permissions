/* eslint-disable no-restricted-syntax */
import { useState } from "react";

function usePermissions(permissions: string[]) {
  const [state] = useState<string[]>(permissions);

  function hasAll(permissionsKey: string | string[]): boolean {
    const arrayPermissions = Array.isArray(permissionsKey)
      ? permissionsKey
      : permissionsKey.split("|");
    if (state && state.length > 0) {
      return arrayPermissions.every((permission) => state.includes(permission));
    }
    return false;
  }

  function hasAny(permissionsKey: string | string[]): boolean {
    const arrayPermissions = Array.isArray(permissionsKey)
      ? permissionsKey
      : permissionsKey.split("|");
    if (state && state.length > 0) {
      return arrayPermissions.some((permission) => state.includes(permission));
    }
    return false;
  }

  function doesNotHaveAll(permissionsKey: string | string[]): boolean {
    const arrayPermissions = Array.isArray(permissionsKey)
      ? permissionsKey
      : permissionsKey.split("|");
    if (state && state.length > 0) {
      return arrayPermissions.every((permission) => !state.includes(permission));
    }
    return false;
  }

  function doesNotHaveAny(permissionsKey: string | string[]): boolean {
    const arrayPermissions = Array.isArray(permissionsKey)
      ? permissionsKey
      : permissionsKey.split("|");
    if (state && state.length > 0) {
      return arrayPermissions.some((permission) => !state.includes(permission));
    }
    return false;
  }

  return { hasAny, hasAll, doesNotHaveAny, doesNotHaveAll };
}

export default usePermissions;
