const path = require('path'); // 경로 지정
// const MyPlugin = require("./myplugin");
const webpack = require('webpack');
const banner = require("./banner");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // production
            : "style-loader", // development
          "css-loader",
        ],
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
    new HtmlWebpackPlugin({
      template: './src/index.html', // 템플릿 경로를 지정
      templateParameters: { // 템플릿에 주입할 파라미터 변수 지정
        env: process.env.NODE_ENV === 'development' ? '- 개발용' : '',
      },
      minify: process.env.NODE_ENV === 'production' ? {
        collapseWhitespace: true, // 빈칸 제거
        removeComments: true, // 주석 제거
      } : false,
      hash: true, // 정적 파일을 불러올 때 쿼리 문자열에 웹팩 해시값을 추가
    }),
    new CleanWebpackPlugin(),
    process.env.NODE_ENV === "production" ? 
			new MiniCssExtractPlugin({ 
				filename: `[name].css`, // production 
			}) 
			: '' // development
  ],
};