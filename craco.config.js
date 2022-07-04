module.exports = {
  babel: {
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            components: './src/components/',
            src: './src/'
          }
        }
      ]
    ]
  }
};
