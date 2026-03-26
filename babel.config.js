module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@modules': './src/modules',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@utils': './src/utils',
          '@types': './src/types',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};