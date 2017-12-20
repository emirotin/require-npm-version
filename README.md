This module lets you easily detect if we're running sufficient version of npm.

```json
"scripts": {
  "prepublish": "require-npm-version 4.0.0",
  "prepublishOnly": "work-that-should-only-happen-on-publish-and-not-install"
},
```
