const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  test: /\.css$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { cssModules: true } },
    'postcss-loader',
  ],
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.css.js$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]'
            }
          },
          {
            loader: 'skeleton-loader',
            options: {
             cssModules: true,
            }
          },
          'postcss-loader'
        ]
      }
    );

    return config
  }
});