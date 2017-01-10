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
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss',
      Main:'app/components/Main.jsx',
      configureStore: 'app/store/configureStore.jsx',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      ItemList:'app/components/ItemList.jsx',
      Item:'app/components/Item.jsx',
      DisCount:'app/components/DisCount.jsx',
      SortByButton:'app/components/SortByButton.jsx',
      SortPanel:'app/components/SortPanel.jsx',
      OrderButton:'app/components/OrderButton.jsx',
      Cart:'app/components/Cart.jsx',
      Input:'app/tests/Input.jsx',
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
      {  test: /\.(png|jpg)$/,
         loader: 'url?limit=25000'
      },
    ]
  },
    sassLoader: {
     includePaths: [
       path.resolve(__dirname, './node_modules/foundation-sites/scss')
     ]
   },
  devtool: 'cheap-module-eval-source-map'
};
