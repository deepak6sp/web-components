/**
* @Author: deepak
* @Date:   2017-01-26T21:23:46+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-26T22:08:17+11:00
*/



module.exports = {
	entry: "./components/input/input.js",
  output: {
    path: "./components/input",
    filename: "main.js"
  },
  module: {
		loaders: [
      {
          test: /\.(js)$/,
          loader: "babel-loader",
      },
			{
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }
    ]
  }
};
