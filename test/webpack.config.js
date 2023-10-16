const path = require('path'); // 경로 지정

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module : {
    rules: [
      {
        test: /\.js$/, // .js 확장자로 끝나는 모든 파일
        use: [path.resolve('./myloader.js')] // 방금 만든 로더 파일 적용
      },
      {
        test: /\.css$/, // .css 확장자로 끝나는 모든 파일
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ],
  }
};