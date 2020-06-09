const path = require('path');
const SRC_PATH = path.join(process.cwd(), 'src');

module.exports = config => {
  config.entry = path.join(SRC_PATH, 'index.ts');

  config.module.rules.push({
    test: /\.module.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
        },
      },
      'sass-loader',
    ],
  });
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: 'tsconfig.json',
        },
      },
    ],
  });
  return config;
};
