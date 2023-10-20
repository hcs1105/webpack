const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module : {
    rules: [
      {
        test: /\.css$/, // .css 확장자로 끝나는 모든 파일
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
				type: 'asset',
				generator: {
					filename: '[name][ext]?[hash]',
				},   
				parser: {
          dataUrlCondition: {
            maxSize: 5000,
          },
        },
      },
    ]
  }
}