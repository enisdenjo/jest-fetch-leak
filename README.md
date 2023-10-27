[False positive memory leak when running with `--experimental-vm-modules` and using `--detectLeaks`](https://github.com/jestjs/jest/issues/14649)

1. `npm i`
1. - `npm run test:cjs` doesn't leak ✅
   - `npm run test:esm` leaks ❌
