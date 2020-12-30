/* eslint-disable no-restricted-syntax */
import { useState } from "react";

function usePermissions(permissions: string[]) {
  const [state] = useState<string[]>(permissions);

  const hasAll = (permissionsKey: string | string[]) => {
    const arrayPermissions = Array.isArray(permissionsKey)
      ? permissionsKey
      : permissionsKey.split("|");
    const includedPermissions: string[] = [];
    if (state && state.length > 0) {
      for (const permission of arrayPermissions) {
        if (state.includes(permission)) {
          includedPermissions.push(permission);
        }
      }
    }
    return includedPermissions.length === arrayPermissions.length;
  };

  const hasAny = (permissionsKey: string | string[]) => {
    const arrayPermissions = Array.isArray(permissionsKey)
      ? permissionsKey
      : permissionsKey.split("|");
    if (state && state.length > 0) {
      for (const permission of arrayPermissions) {
        if (state.includes(permission)) {
          return true;
        }
      }
    }
    return false;
  };

  const doesNotHaveAll = (permissionsKey: string | string[]) => {
    const arrayPermissions = Array.isArray(permissionsKey)
      ? permissionsKey
      : permissionsKey.split("|");
    const includedPermissions: string[] = [];
    if (state && state.length > 0) {
      for (const permission of arrayPermissions) {
        if (!state.includes(permission)) {
          includedPermissions.push(permission);
        }
      }
    }
    return includedPermissions.length === arrayPermissions.length;
  };

  const doesNotHaveAny = (permissionsKey: string | string[]) => {
    const arrayPermissions = Array.isArray(permissionsKey)
      ? permissionsKey
      : permissionsKey.split("|");
    if (state && state.length > 0) {
      for (const permission of arrayPermissions) {
        if (!state.includes(permission)) {
          return true;
        }
      }
    }
    return false;
  };

  return [hasAny, hasAll, doesNotHaveAny, doesNotHaveAll];
}

export default usePermissions;
