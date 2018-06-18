# fib-types

fibjs's *.d.ts files for internal modules.

## Usage

```
npm i -S @types/fibjs
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

## Version Mapping

| @types/fibjs(fib-types) | fibjs |
| --- | --- |
| 1.0.2 | 0.25.0 |
| 1.0.3(depreacted) | 0.25.0 |
| 1.0.4 | 0.25.0 |
| 1.0.5 | 0.25.0 |
| 1.0.6 | 0.25.0 |
| 1.0.7 | 0.25.0 |

## TODO

- [x] Basic type definition for internal C++ modules
- [ ] Basic type definition for internal Javascript modules
- [ ] For Every Module, Import its dependency Interface instead(now I introduce all interfaces)

[Visual Studio Code]:https://www.visualstudio.com/
