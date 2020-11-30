const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');

class HTMLPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tap('HTMLPlugin', (compilation) => {
            const result = fs.readFileSync(this.options.template, 'utf-8');

            let $ = cheerio.load(result);
            Object.keys(compilation.assets).forEach(item => {
                $(`<script src="${item}"></script>`).appendTo('body');
            })

            fs.writeFileSync(path.join(process.cwd(), 'dist', this.options.filename), $.html());
        })
    }
}

module.exports = HTMLPlugin;
