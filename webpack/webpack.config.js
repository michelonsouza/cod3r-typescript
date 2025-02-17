const { join } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  devServer: {
    contentBase: join(__dirname, 'dist'),
    port: 9000,
    hot: true,
  },
  output: {
    filename: 'app.min.js',
    path: join(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin([
      { from: 'public' },
    ])
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  }
};