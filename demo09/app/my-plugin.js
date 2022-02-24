class MyPlugin {
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap('MyPlugin', function (nmf) {
      nmf.hooks.beforeResolve.tap('MyPlugin', function (resolveData) {
        var req = resolveData.request;
        if (req.indexOf('tns3nd/')) {
          resolveData.request = req.replace('tns3nd/', '');
        }
      });
    });
  }
}

module.exports = MyPlugin;
