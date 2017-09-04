const {dev} = require('./common');

module.exports = dev
? 'source-map'
: 'hidden-source-map';
