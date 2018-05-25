## Evidence of Angular CLI (schematics) issue

This project was generated with `Angular CLI v 6.0.3` to show an issue with app generator.

### Bug description

Lazy loaded modules does not compile on newly generated angular 6 app due to its path can't be resolved.

It was commented
 - [in stackOverflow](https://stackoverflow.com/a/50491539/6138386)
 - on [angular-cli repo](https://github.com/angular/angular-cli/issues/10673#issuecomment-391370150)
 - on [devkit repo](https://github.com/angular/devkit/issues/969)
 - on [angular repo](https://github.com/angular/angular/issues/24109mark)

### Reproduce

This project is the evidence, you can clone it and compile to see the error.

```bash
npm i
ng serve
```

> ERROR in Could not resolve module app/lazyLoadedEvidence/lazyLoadedEvidence.module relative to /Users/Ricard/NG6Evidence/evidenceApp/src/app/app-routing.module.ts

The steps followed was to generate a new routing app with a module containing component:

```bash
ng new evidenceApp --routing
cd evidenceApp
ng g module lazyLoadedEvidence --routing
ng g component lazyLoadedEvidence/evidenceApp
```