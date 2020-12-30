# react-hook-use-permissions

![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat-square&colorB=191A17)
[![npm](https://img.shields.io/npm/v/react-native-snap-carousel.svg?style=flat-square)](https://www.npmjs.com/package/react-native-snap-carousel)
[![npm](https://img.shields.io/npm/dm/react-native-snap-carousel.svg?style=flat-square&colorB=007ec6)](https://www.npmjs.com/package/react-native-snap-carousel)
[![github issues](https://img.shields.io/github/issues/julinhoooO/react-hook-use-permissions.svg?style=flat-square)](https://github.com/julinhoooO/react-hook-use-permissions/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/julinhoooO/react-hook-use-permissions.svg?style=flat-square&colorB=44cc11)](https://github.com/julinhoooO/react-hook-use-permissions/issues?q=is%3Aissue+is%3Aclosed)

---

---

## Table of contents

1. [Usage](#usage)
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
$ yarn react-hook-use-permissions
```

### Hook

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
import usePermissions from "react-hook-use-permissions";

export default function App() {
  /** Here you can use any way to instantiate permissions, for example through states using redux **/
  const permissions = ["store", "edit"];
  const [hasAny, hasAll, doesNotHaveAny, doesNotHaveAll] = usePermissions(
    permissions
  );

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

This is a component that uses the `usePermissions` hook inside itself

```javascript
import { Permission } from "react-hook-use-permissions";

export default function App() {
  /** Here you can use any way to instantiate permissions, for example through states using redux **/
  const permissions = ["store", "edit"];

  return (
    <Permission
      permissions={permissions}
      hasAny="store|edit"
      /**
       * You can also pass permissions on an array like this ['store', 'edit']
       **/
    >
      {/**Put here the content you want**/}
    </Permission>
  );
}
```

#### Props

| Prop| Type| Description|
| ---| --- | --- |
| **`children`**    | `ReactNode<any>` | React Node(s) to render.                                               |
| **`permissions`** | `string[]`       | Permissions that will be used for verification inside of the component |
| **`hasAny`**      | `?string         | string[]`                                                              | Permissions to be checked in `hasAny` `usePermissions` method. If you pass permissions as a string, they must be separated by \_` | (pipe)`\_ |
| **`has`**         | `?string         | string[]`                                                              | Permissions to be checked in `has` `usePermissions` method. If you pass permissions as a string, they must be separated by \_`    | (pipe)`\_ |

\*If you do not pass any permissions on both the `hasAny` property and the `has` property, the component will render the content as if the user has permission

\*\*The `hasAny` property stands out over the has property, so if you pass any permission to both the `hasAny` property and the has property, the component will only check with the `hasAny` method

## Credits

Written by [Julio Cavallari](https://www.linkedin.com/in/julio-cavallari-98581381/) ([julio-cavallari](https://github.com/julio-cavallari)).
