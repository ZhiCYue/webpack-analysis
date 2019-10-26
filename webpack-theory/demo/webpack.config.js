const path = require('path');
const HelloWorldPlugin = require('./plugin/HelloWorldPlugin');
const HTMLPlugin = require('./plugin/HTMLPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: './loader/myLoader.js',
                    options: {
                        name: '替换后的信息'
                    }
                }
            }
        ]
    },
    plugins: [
        new HelloWorldPlugin(),
        // new HTMLPlugin({
        //     template: 'index.html',
        //     filename: 'index.html'
        // })
    ]
};
