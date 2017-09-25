const {dev} = require('./common');

module.exports = dev
? [
	{
		test: /\.(png|svg|jpg|gif)$/,
		use: [
			{
				loader: 'file-loader'
			}
		]
	}
]
: [
	{
		test: /\.(png|svg|jpg|gif)$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '..',
					outputPath: '/images/',
				}
			},
			{
				loader: 'image-webpack-loader',
				options: {
					gifsicle: {
						interlaced: false,
					},
					optipng: {
						optimizationLevel: 7,
					},
					pngquant: {
						quality: '65-90',
						speed: 4
					},
					mozjpeg: {
						progressive: true,
						quality: 65
					},
					// Specifying webp here will create a WEBP version of your JPG/PNG images
					webp: {
						quality: 75
					}
				}
			}
		]
	}
];