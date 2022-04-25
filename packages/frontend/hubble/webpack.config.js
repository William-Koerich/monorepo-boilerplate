const path = require('path')
const webpack = require('webpack')

/**
 * Plugins.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

/**
 * Configurations.
 */
const config = {
  mode: 'development',

  entry: './src/App.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '/public/icons/[name].[ext]'
          }
        }
      }
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),

    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),

    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 1700,
    open: true,
    hot: true
  }
}

module.exports = config
