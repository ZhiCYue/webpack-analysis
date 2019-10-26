#!/usr/bin/env node
// log 的内容修改，可以直接生效
console.log('当通过npm link 链接之后，通过webpack-theory指令可以直接打开')

const path = require('path');

const config = require(path.resolve('webpack.config.js'));
const Compiler = require('../lib/Compiler');

new Compiler(config).start();
