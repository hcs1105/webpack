class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("My Plugin", stats => {
      console.log("MyPlugin: done");
    })

		// compiler.plugin() 함수로 후처리한다
		compiler.hooks.emit.tapAsync('My Plugin', (compilation, callback) => {
			const source = compilation.assets['main.js'].source();
			// console.log(source);
			const banner = [
				'/**',
				' * This is result of processing by BannerPlugin.',
				' * Build Date: 2023-10-19',
				' */',
			].join('\n');
			const objectSourceNew = new compilation.compiler.webpack.sources.RawSource(banner + '\n\n' + source);
			compilation.updateAsset('main.js', objectSourceNew);
			callback();
	});
  }
}

module.exports = MyPlugin;