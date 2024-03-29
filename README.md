# react-hook-use-permissions

![platforms](https://img.shields.io/badge/platforms-WEB%20%7C%20Android%20%7C%20iOS-brightgreen.svg?style=flat-square&colorB=191A17)
[![npm](https://img.shields.io/npm/v/react-hook-use-permissions.svg?style=flat-square)](https://www.npmjs.com/package/react-hook-use-permissions)
[![npm](https://img.shields.io/npm/dm/react-hook-use-permissions.svg?style=flat-square&colorB=007ec6)](https://www.npmjs.com/package/react-hook-use-permissions)
[![github issues](https://img.shields.io/github/issues/julinhoooO/react-hook-use-permissions.svg?style=flat-square)](https://github.com/julinhoooO/react-hook-use-permissions/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/julinhoooO/react-hook-use-permissions.svg?style=flat-square&colorB=44cc11)](https://github.com/julinhoooO/react-hook-use-permissions/issues?q=is%3Aissue+is%3Aclosed)

---

---

## Table of contents

1. [Usage](#usage)
   1. [Installation](#installation)
   1. [Hooks](#hooks)
   1. [Component](#component)
1. [Credits](#credits)

---

## Usage

### Installation

#### Using npm:

```bash
$ npm install --save react-hook-use-permissions
```

#### Using yarn:

```bash
$ yarn add react-hook-use-permissions
```

### Hooks

#### `hasAny`

This method checks whether one of the permissions passed as a function parameter exists in the permissions array passed in the hook

#### `hasAll`

This method checks whether all permissions passed as a function parameter exist in the permissions array passed in the hook

#### `doesNotHaveAny`

This method checks that one of the permissions passed as a function parameter do not exist in the permissions array passed in the hook

#### `doesNotHaveAll`

This method checks that all permissions passed as a function parameter do not exist in the permissions array passed in the hook

\*In all methods, you can use a string with the permissions separated by `| (pipe)` or a `array`

```javascript
import { usePermissions } from "react-hook-use-permissions";

export default function App() {
  /** Here you can use any way to instantiate permissions, for example through states using redux **/
  const permissions = ["store", "edit"];
  const { hasAny, hasAll, doesNotHaveAny, doesNotHaveAll } = usePermissions<string[]>(permissions);

  return (
    <>
      {hasAny("store|edit|remove") ? (
        <div>Have any of the permissions</div>
      ) : (
        <div>Does not have any of the permissions</div>
      )}

      {hasAll(["store", "edit", "remove"]) ? (
        <div>Has all of the permissions</div>
      ) : (
        <div>Does not have all of the permissions</div>
      )}

      {doesNotHaveAny("store|edit|remove") ? (
        <div>Does not have any of the permissions</div>
      ) : (
        <div>Has any of the permissions</div>
      )}

      {doesNotHaveAll("store|edit") ? (
        <div>Does not have all of the permissions</div>
      ) : (
        <div>Has any or all of the permissions</div>
      )}
    </>
  );
}
```

#### Usage With Redux

To use with redux the only thing that will be different is the instantiation of the hook, you will use the hook `usePermissionsWithRedux`, and you will have to pass as a parameter to the hook a function to be used in the redux selector, `state => state.user.permissions` for example.

```javascript
import { usePermissionsWithRedux } from "react-hook-use-permissions";
import {RootState, UserState} from "./redux-types";

export default function App() {
  const { hasAny, hasAll, doesNotHaveAny, doesNotHaveAll } = usePermissionsWithRedux<RootState, UserState>((state) => state.user.permissions);

  return (
    <>
      {hasAny("store|edit|remove") ? (
        <div>Have any of the permissions</div>
      ) : (
        <div>Does not have any of the permissions</div>
      )}

      {hasAll(["store", "edit", "remove"]) ? (
        <div>Has all of the permissions</div>
      ) : (
        <div>Does not have all of the permissions</div>
      )}

      {doesNotHaveAny("store|edit|remove") ? (
        <div>Does not have any of the permissions</div>
      ) : (
        <div>Has any of the permissions</div>
      )}

      {doesNotHaveAll("store|edit") ? (
        <div>Does not have all of the permissions</div>
      ) : (
        <div>Has any or all of the permissions</div>
      )}
    </>
  );
}
```

### Component

#### `Permission`

This is a component that uses the `usePermissions` or `usePermissionsWithRedux` hook inside itself

```javascript
import { Permission } from "react-hook-use-permissions";

export default function App() {
  /** Here you can use any way to instantiate permissions, for example through states using redux **/
  const permissions = ["store", "edit"];

  return (
    <Permission
      permissions={permissions}
      doesNotHaveAny="store|edit"
      /**
       * You can also pass permissions on an array like this ['store', 'edit'] to doesNotHaveAny prop
       **/

      /**
       * You can also pass any method described above to verify permissions
       **/
    >
      {/**Put here the content you want**/}
    </Permission>
  );
}
```

#### Usage With Redux

```javascript
import { Permission } from "react-hook-use-permissions";
import {RootState, UserState} from "./redux-types";

export default function App() {
  return (
    <Permission<RootState, UserState>
      selector={(state) => state.user.permissions}
      hasAny="store|edit"
      /**
       * You can also pass permissions on an array like this ['store', 'edit'] to hasAny prop
       **/

      /**
       * You can also pass any method described above to verify permissions
       **/
    >
      {/**Put here the content you want**/}
    </Permission>
  );
}
```

#### Props

| Prop                 | Type                                    | Description                                                                                                                                                                                 |
| -------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`children`**       | `ReactNode`                             | React Node(s) to render.                                                                                                                                                                    |
| **`permissions`**    | `?string[]`                             | Permissions that will be used for verification inside of the component. `Required` if `selector` prop are not present                                                                       |
| **`hasAny`**         | `?string`&#124;`string[]`               | Permissions to be checked by method `hasAny` present in `usePermission` or `usePermissionWithRedux`. If you pass permissions as a string, they must be separated by _&#124; (pipe)_         |
| **`hasAll`**         | `?string`&#124;`string[]`               | Permissions to be checked by method `hasAll` present in `usePermission` or `usePermissionWithRedux`. If you pass permissions as a string, they must be separated by _&#124; (pipe)_         |
| **`doesNotHaveAny`** | `?string`&#124;`string[]`               | Permissions to be checked by method `doesNotHaveAny` present in `usePermission` or `usePermissionWithRedux`. If you pass permissions as a string, they must be separated by _&#124; (pipe)_ |
| **`doesNotHaveAll`** | `?string`&#124;`string[]`               | Permissions to be checked by method `doesNotHaveAll` present in `usePermission` or `usePermissionWithRedux`. If you pass permissions as a string, they must be separated by _&#124; (pipe)_ |
| **`selector`**       | `(state: DefaultRootState) => string[]` | Selector used by the redux to get permissions. `Required` if `permissions` prop are not present                                                                                             |

If you do not pass any permissions on `permissions` property, the component will render the content as if the user has permission.

## Credits

Written by [Julio Cavallari](https://www.linkedin.com/in/julio-cavallari-98581381/) ([julio-cavallari](https://github.com/julio-cavallari)).
