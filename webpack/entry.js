const {dev} = require('./common');

module.exports = dev
? './dev/js/global.js'
: './js/global.js';