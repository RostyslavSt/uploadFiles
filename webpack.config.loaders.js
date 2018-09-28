const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};

const cssLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
  ],
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: `${__dirname}/.eslintrc.json`,
    },
  },
};

const imgLoader = {
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'img/',
        publicPath: 'img/',
      },
    },
  ],
};

module.exports = {
  babelLoader,
  cssLoader,
  ESLintLoader,
  imgLoader,
};

// const imgLoader = {
//     test: /\.(png|jpg|gif)$/,
//     use: [
//       {
//         loader: 'file-loader',
//         options: {}
//       }
//     ]
// }
