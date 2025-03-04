// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    library: 'helloWorld',
    path: path.resolve(__dirname, '../dist/hello-world'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'MainStage.html',
      template: '/Users/p0004/Desktop/FinanceManagerAgent/meetBot/public/MainStage.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'SidePanel.html',
      template: '/Users/p0004/Desktop/FinanceManagerAgent/meetBot/public/SidePanel.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
    open: true // Open the browser automatically
  }
};