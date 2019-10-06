module.exports = [
  [
    'use-babel-config',
    {
      presets: ['react-app'],
      plugins: [
        [
          'import', {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }
        ]
      ]
    }
  ],
  (config) => {
    const newConfig = config;

    let rule = newConfig.module.rules.find(rule => rule.oneOf);

    rule.oneOf.unshift(
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {
                '@primary-color': '#6979F8',
              }
            }
          }]
      }
    );

    return newConfig;
  }
];
