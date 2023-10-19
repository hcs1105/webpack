const path = require('path'); // 경로 지정
// const MyPlugin = require("./myplugin");
const webpack = require('webpack');
const banner = require("./banner")

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module : {
    rules: [
			/*
      {
        test: /\.js$/, // .js 확장자로 끝나는 모든 파일
        use: [path.resolve('./myloader.js')], // 방금 만든 로더 파일 적용
      },
			*/
      {
        test: /\.css$/, // .css 확장자로 끝나는 모든 파일
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
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
    ],
  }, 
  plugins: [
    // new MyPlugin(),
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({}),
  ],
};