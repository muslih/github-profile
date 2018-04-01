module.exports = {
  entry:[
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'app/js/main.js' 
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
          {
            presets:['react', 'es2015']
          }
      }
    ]
  }
}