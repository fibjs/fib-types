# fib-types

fibjs's *.d.ts files for internal modules.

## Usage

```
# use fibjs's '--install' option
fibjs --install fib-types --save-dev

# if you like npm
npm i -S fib-types
```

### Hint with IDE
if you use some IDE supporting auto-complete feature for typescript(such as [Visual Studio Code]), auto-complete platte would display when you typing sub-characters of module name('fs', 'vm' etc)

To enable autocomplate of [Visual Studio Code], you must use `import` keyword to introduce the module rather than `'require'`, fibjs would auto compile it with internal typescript compiler.

```typescript
// just write
import * as fs from 'fs' // right

// NOT
import fs from 'fs' // wrong
```

**Notice** As of **internal modules**, not like latest nodejs, fibjs export one internal module without equivalent `'default'` member, that is, fibjs's internal module **isn't** esmodule style, it's CommonJs, so you must use `import * as xxx from 'xxx'` rather than `import xxx from 'xxx'`

## TODO

- [x] Basic type definition for internal C++ modules
- [ ] Basic type definition for internal Javascript modules
- [ ] For Every Module, Import its dependency Interface instead(now I introduce all interfaces)

[Visual Studio Code]:https://www.visualstudio.com/
