const child = require('./child.js');

module.exports = {
    message: 'this is parent msg.',
    child: child.message
};
