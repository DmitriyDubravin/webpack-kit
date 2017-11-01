const {dev} = require('./common');

module.exports = dev
? null
: [
	{
		test: /\.(otf|ttf|woff|eot|svg)$/,
        exclude: /images/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '..',
					outputPath: '/fonts/',
				}
			}
		]
	}
];