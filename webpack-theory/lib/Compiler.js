const path = require('path');
const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const ejs = require('ejs');

const { SyncHook } = require("tapable");

class Compiler {
    constructor(config) {
        this.config = config;
        const { entry, output, module={} } = config;
        this.entry = entry;
        this.output = output;
        this.rules = module.rules || []
        this.root = process.cwd();
        this.modules = {};

        this.hooks = {
            afterPlugins: new SyncHook(),
            beforeRun: new SyncHook(),
            run: new SyncHook(),
            make: new SyncHook(),
            compile: new SyncHook(),
            afterCompile: new SyncHook(),
            shouldEmit: new SyncHook(),
            emit: new SyncHook(),
            afterEmit: new SyncHook(['compilation']),
            done: new SyncHook()
        }

        if(Array.isArray(this.config.plugins)) {
            this.config.plugins.forEach(plugin => {
                plugin.apply(this);
            })
        }
    }

    start() {
        this.hooks.compile.call();
        this.depAnalyse(path.resolve(this.root, this.entry));
        this.hooks.afterCompile.call();
        this.hooks.emit.call();
        this.emitFile();
        this.hooks.afterEmit.call(); // todo: 插件参数
        this.hooks.done.call();
    }

    depAnalyse(modulePath) {
        let source = this.getSource(modulePath);
        
        // 内部定义一个处理loader 的函数
        const _handleLoader = (usePath, _this) => {
            const loaderPath = path.join(this.root, usePath);
            const loader = require(loaderPath);
            source = loader.call(_this, source);
        }

        const rules = this.rules;
        for(let i = rules.length - 1; i >= 0; i--) {
            const {
                test,
                use
            } = rules[i];

            if(test.test(modulePath)) {
                // use 可能是数组、对象、字符串
                if(Array.isArray(use)) {
                    for(let j = use.length - 1; j >= 0; j--) {
                        _handleLoader(use[j]);
                    }
                } else if (typeof use === 'string') {
                    _handleLoader(use);
                } else if (use instanceof Object) {
                    _handleLoader(use.loader, {
                        query: use.options
                    })
                }
            }
        }

        let dependenceArr = [];
        let ast = parser.parse(source);

        traverse(ast, {
            // p 是抽象语法树的节点
            CallExpression(p) {
                if(p.node.callee.name === 'require') {
                    p.node.callee.name = '__webpack_require__';
                    const oldValue = p.node.arguments[0].value;
                    // 修改路径，避免windows 出现反斜杠
                    p.node.arguments[0].value = ('./' + path.join('src', oldValue)).replace('/\\+/g', '/');
                    // 每找到一个require 调用，就将其路径修改完之后加入到依赖数组中
                    dependenceArr.push(p.node.arguments[0].value);
                }
            }
        })

        const sourceCode = generator(ast).code;
        const modulePathRelative = './' + (path.relative(this.root, modulePath)).replace('/\\+/g', '/');
        this.modules[modulePathRelative] = sourceCode;

        dependenceArr.forEach(dep => this.depAnalyse(path.resolve(this.root, dep)));
    }

    getSource(path) {
        return fs.readFileSync(path, 'utf-8');
    }

    emitFile() {
        const template = this.getSource(path.join(__dirname, '../template/output.ejs'));
        const result = ejs.render(template, {
            entry: this.entry,
            modules: this.modules
        });

        const {
            path: filePath,
            filename
        } = this.output;
        const outputPath = path.join(filePath, filename);

        fs.writeFile(outputPath, result, (err) => {
            console.log(err ? err : 'success');
        })
    }
}

module.exports = Compiler;
