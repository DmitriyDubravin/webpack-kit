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
				loader: 'image-webpack',
				query: {
					optimizationLevel: 7,
					pngquant: {
						quality: '65-90',
						speed: 4
					},
					mozjpeg: {
						progressive: true,
						quality: 65
					},
					svgo:{
						plugins: [
							{
								removeViewBox: false
							},
							{
								removeEmptyAttrs: false
							}
						]
					}
				}
			},
			{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '..',
					outputPath: '/images/',
				}
			}
		]
	}
];