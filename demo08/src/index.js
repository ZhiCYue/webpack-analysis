import { Loader, ModuleNamespace } from 'es-module-loader/core/loader-polyfill.js';

let loader = new Loader();

// override the resolve hook
loader[Loader.resolve] = function (key, parent) {
  // intercept the load of "x"
  if (key === 'x') {
    this.registry.set('x', new ModuleNamespace({ some: 'exports' }));
    return key;
  }
  return Loader.prototype[Loader.resolve](key, parent);
};

loader.import('x').then(function (m) {
  console.log(m.some);
});