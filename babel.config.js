module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          components: './src/components',
          src: './src'
        }
      }
    ]
  ]
};
