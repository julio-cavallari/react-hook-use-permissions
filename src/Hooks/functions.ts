export const hasAll =
  (state: any[]) =>
  (permissionsKey: string | string[]): boolean => {
    const arrayPermissions = Array.isArray(permissionsKey) ? permissionsKey : permissionsKey.split("|");
    if (state && state.length > 0) {
      return arrayPermissions.every((permission) => state.includes(permission as never));
    }
    return false;
  };

export const hasAny =
  (state: any[]) =>
  (permissionsKey: string | string[]): boolean => {
    const arrayPermissions = Array.isArray(permissionsKey) ? permissionsKey : permissionsKey.split("|");
    if (state && state.length > 0) {
      return arrayPermissions.some((permission) => state.includes(permission as never));
    }
    return false;
  };

export const doesNotHaveAll =
  (state: any[]) =>
  (permissionsKey: string | string[]): boolean => {
    const arrayPermissions = Array.isArray(permissionsKey) ? permissionsKey : permissionsKey.split("|");
    if (state && state.length > 0) {
      return arrayPermissions.every((permission) => !state.includes(permission as never));
    }
    return false;
  };

export const doesNotHaveAny =
  (state: any[]) =>
  (permissionsKey: string | string[]): boolean => {
    const arrayPermissions = Array.isArray(permissionsKey) ? permissionsKey : permissionsKey.split("|");
    if (state && state.length > 0) {
      return arrayPermissions.some((permission) => !state.includes(permission as never));
    }
    return false;
  };
