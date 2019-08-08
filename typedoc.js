module.exports = {
  out: './docs',

  readme: 'none',
  includes: [
    './src'
  ],
  exclude: [
    // add your exclude path here
    // '**/apis/**/*',
    // '**/config/**/*',
    // '**/services/**/*',
    // '**/util/**/*'
  ],

  mode: 'file',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  excludeProtected: true
}
