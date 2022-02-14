export const hasAll = (state) => (permissionsKey: string | string[]): boolean => {
  const arrayPermissions = Array.isArray(permissionsKey) ? permissionsKey : permissionsKey.split("|");
  if (state && state?.length > 0) {
    return arrayPermissions.every((permission) => state?.includes(permission));
  }
  return false;
};

export const hasAny = (state) => (permissionsKey: string | string[]): boolean => {
  const arrayPermissions = Array.isArray(permissionsKey) ? permissionsKey : permissionsKey.split("|");
  if (state && state?.length > 0) {
    return arrayPermissions.some((permission) => state?.includes(permission));
  }
  return false;
};

export const doesNotHaveAll = (state) => (permissionsKey: string | string[]): boolean => {
  const arrayPermissions = Array.isArray(permissionsKey) ? permissionsKey : permissionsKey.split("|");
  if (state && state?.length > 0) {
    return arrayPermissions.every((permission) => !state?.includes(permission));
  }
  return false;
};

export const doesNotHaveAny = (state) => (permissionsKey: string | string[]): boolean => {
  const arrayPermissions = Array.isArray(permissionsKey) ? permissionsKey : permissionsKey.split("|");
  if (state && state?.length > 0) {
    return arrayPermissions.some((permission) => !state?.includes(permission));
  }
  return false;
};
