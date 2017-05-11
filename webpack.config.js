var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: 'static/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss',
      configureStore: 'app/store/configureStore.jsx',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      Main: 'app/components/views/Main.jsx',
      Home: 'app/components/views/home/Home.jsx',
      SearchForm:'app/components/views/home/searchBar/SearchForm.jsx',
      SearchResults:'app/components/views/home/searchResults/index.jsx',
      LikeJobButton:'app/components/lists/jobList/LikeJobButton.jsx',
      JobList:'app/components/lists/jobList/index.jsx',
      Favorites:'app/components/views/user/Favorites.jsx',
      SearchParams:'app/components/views/home/SearchBar/SearchParams/index.jsx',
      SearchParamsToggle:'app/components/views/home/SearchBar/SearchParams/SearchParamsToggle.jsx',
      DropDown:'app/components/forms/DropDown.jsx',
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
      },
      { test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
