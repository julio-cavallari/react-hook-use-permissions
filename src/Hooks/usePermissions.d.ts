declare function usePermissions(permissions: string[]): ((permissionsKey: string | string[]) => boolean)[];
export default usePermissions;
