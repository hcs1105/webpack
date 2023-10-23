module.exports = {
  presets: [
		// './my-babel-preset.js',
		['@babel/preset-env', {
			targets : {
				chrome: '118', // 크롬 118 버전까지 지원
				ie: '11', // ie 11까지 지원
			},
			useBuiltIns: 'usage',   
			corejs: '3.33.1', // 폴리필 버전 지정
		}],
	],
}