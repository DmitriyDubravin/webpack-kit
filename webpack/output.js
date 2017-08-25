const {dev} = require('./common');
const path = require('path');

module.exports = dev
? {
	publicPath: '/',
	filename: 'bundle.js'
}
: {
	path: path.resolve(__dirname, '../prod'),
	filename: 'js/bundle.js'
};