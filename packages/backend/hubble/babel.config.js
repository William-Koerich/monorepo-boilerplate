module.exports = {
  extends: '../../../babel.config.js',
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './src/'
        }
      }
    ]
  ]
}
