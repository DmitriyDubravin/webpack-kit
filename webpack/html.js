const {dev} = require('./common');

module.exports = dev
? [
	{
		test: /\.html$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'html-loader'
			}
		]
	}
]
: [
	{
		test: /\.html$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'html-loader'
			}
		]
	}
];