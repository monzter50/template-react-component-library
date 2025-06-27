module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
}; 