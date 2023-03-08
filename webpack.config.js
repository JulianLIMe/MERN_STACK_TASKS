import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default {
  mode: 'development',
  watch: true,
  entry: './src/app/index.js',
  output: {
    path: dirname(fileURLToPath(import.meta.url)) + '/src/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
};