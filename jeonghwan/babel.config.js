module.exports = {
  presets: [
		// './myBabelPreset.js',
		['@babel/preset-env',  {
			targets: {
				chrome: '118', // 크롬 118 버전까지 지원
				ie: '11', // IE 11 버전까지 지원
			},
		}],
	],
}