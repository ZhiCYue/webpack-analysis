class HelloWorldPlugin {
    apply(compiler) {
        console.log('自定义插件执行了');
        compiler.hooks.done.tap('HelloWorldPlugin', (stats) => {
            console.log('webpack 打包结束了');
        })
        compiler.hooks.emit.tap('HelloWorldPlugin', (compilation) => {
            console.log('触发了emit 方法');
        })
    }
}

module.exports = HelloWorldPlugin;
