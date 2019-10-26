const loaderUtils = require('loader-utils');

module.exports = function(source) {
    const optionsName = loaderUtils.getOptions(this).name || '';
    return source.replace(/msg/g, optionsName);
};
