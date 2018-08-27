const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
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
              procedure: function (content) {
                return `module.exports = \`${content}\``
              },
              toCode: true
            }
          },
          'postcss-loader'
        ]
      }
    );

    return config
  }
});