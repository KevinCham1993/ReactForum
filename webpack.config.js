var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components'
    ],
    alias: {
    //   Main: 'app/components/Main.jsx',
    //   Nav: 'app/components/Nav.jsx',
    //   LoginPage: 'app/components/LoginPage.jsx',
    //   LoginForm: 'app/components/LoginForm.jsx',
    //   Weather: 'app/components/Weather.jsx',
    //   WeatherForm: 'app/components/WeatherForm.jsx',
    //   WeatherMessage: 'app/components/WeatherMessage.jsx',
    //   About: 'app/components/About.jsx',
    //   Categories: 'app/components/Categories.jsx',
    //   Colleges: 'app/components/Colleges.jsx',
    //   Community: 'app/components/Community.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      applicationStyle: 'app/styles/app.scss'
    //
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
