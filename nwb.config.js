module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'SocratesContainer',
    jsNext: true,
    umd: true
  }
}
