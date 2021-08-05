const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'main.js'
  },
  resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
            'html-loader',
            {
                loader: 'posthtml-loader',
                options: {
                    plugins: [
                        require('posthtml-postcss-modules')({ 
                            root: path.resolve(__dirname, 'src') 
                        })
                    ]
                }
            }
        ]
    }   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),

  ]
};