/* eslint-disable no-restricted-syntax */
import { useState } from "react";
function usePermissions(permissions) {
    var state = useState(permissions)[0];
    var hasAll = function (permissionsKey) {
        var arrayPermissions = Array.isArray(permissionsKey)
            ? permissionsKey
            : permissionsKey.split("|");
        var includedPermissions = [];
        if (state && state.length > 0) {
            for (var _i = 0, arrayPermissions_1 = arrayPermissions; _i < arrayPermissions_1.length; _i++) {
                var permission = arrayPermissions_1[_i];
                if (state.includes(permission)) {
                    includedPermissions.push(permission);
                }
            }
        }
        return includedPermissions.length === arrayPermissions.length;
    };
    var hasAny = function (permissionsKey) {
        var arrayPermissions = Array.isArray(permissionsKey)
            ? permissionsKey
            : permissionsKey.split("|");
        if (state && state.length > 0) {
            for (var _i = 0, arrayPermissions_2 = arrayPermissions; _i < arrayPermissions_2.length; _i++) {
                var permission = arrayPermissions_2[_i];
                if (state.includes(permission)) {
                    return true;
                }
            }
        }
        return false;
    };
    var doesNotHaveAll = function (permissionsKey) {
        var arrayPermissions = Array.isArray(permissionsKey)
            ? permissionsKey
            : permissionsKey.split("|");
        var includedPermissions = [];
        if (state && state.length > 0) {
            for (var _i = 0, arrayPermissions_3 = arrayPermissions; _i < arrayPermissions_3.length; _i++) {
                var permission = arrayPermissions_3[_i];
                if (!state.includes(permission)) {
                    includedPermissions.push(permission);
                }
            }
        }
        return includedPermissions.length === arrayPermissions.length;
    };
    var doesNotHaveAny = function (permissionsKey) {
        var arrayPermissions = Array.isArray(permissionsKey)
            ? permissionsKey
            : permissionsKey.split("|");
        if (state && state.length > 0) {
            for (var _i = 0, arrayPermissions_4 = arrayPermissions; _i < arrayPermissions_4.length; _i++) {
                var permission = arrayPermissions_4[_i];
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
