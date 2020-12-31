import * as React from "react";
import { usePermissions } from "../../Hooks";
var Permission = function (_a) {
    var permissions = _a.permissions, hasAny = _a.hasAny, has = _a.has, children = _a.children;
    var _b = usePermissions(permissions), hasAnyPermission = _b[0], hasPermissions = _b[1];
    if (hasAny) {
        return React.createElement(React.Fragment, null, hasAnyPermission(hasAny) ? children : null);
    }
    else if (has) {
        return React.createElement(React.Fragment, null, hasPermissions(has) ? children : null);
    }
    return React.createElement(React.Fragment, null, children);
};
export default Permission;
