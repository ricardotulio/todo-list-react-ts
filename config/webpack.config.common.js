const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader?configFileName=config/tsconfig.json',
        exclude: /node_modules/,
      },
      {
  	enforce: 'pre',
	test: /\.js$/,
	loader: 'source-map-loader'
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
}
