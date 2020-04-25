function onCreateBabelConfig({ actions }, options) {
  actions.setBabelPlugin({
    name: require.resolve(`@babel/plugin-proposal-decorators`),
    options: { legacy: true },
  })
}
exports.onCreateBabelConfig = onCreateBabelConfig
