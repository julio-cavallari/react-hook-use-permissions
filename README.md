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

```bash
$ npm install --save react-hook-use-permissions
```

or

```bash
$ yarn react-hook-use-permissions
```

### usePermission

#### hasAny

This function checks whether one of the permissions passed as a function parameter exists in the permissions array passed in the hook

#### hasAll

This function checks whether all permissions passed as a function parameter exist in the permissions array passed in the hook

#### doesNotHaveAny

This function checks that one of the permissions passed as a function parameter do not exist in the permissions array passed in the hook

#### doesNotHaveAll

This function checks that all permissions passed as a function parameter do not exist in the permissions array passed in the hook

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
      {hasAny(
        "store|edit" /** You can also pass permissions on an array like this ['store', 'edit'] **/
      ) ? (
        <div>Have any of the permissions</div>
      ) : (
        <div>Does not have any of the permissions</div>
      )}

      {hasAll(
        "store|edit" /** You can also pass permissions on an array like this ['store', 'edit'] **/
      ) ? (
        <div>Has all of the permissions</div>
      ) : (
        <div>Does not have all of the permissions</div>
      )}

      {doesNotHaveAny(
        "store|edit" /** You can also pass permissions on an array like this ['store', 'edit'] **/
      ) ? (
        <div>Does not have any of the permissions</div>
      ) : (
        <div>Has any of the permissions</div>
      )}

      {doesNotHaveAll(
        "store|edit" /** You can also pass permissions on an array like this ['store', 'edit'] **/
      ) ? (
        <div>Does not have all of the permissions</div>
      ) : (
        <div>Has any or all of the permissions</div>
      )}
    </>
  );
}
```

## Credits

Written by [Julio Cavallari](https://www.linkedin.com/in/julio-cavallari-98581381/) ([julio-cavallari](https://github.com/julio-cavallari)).
