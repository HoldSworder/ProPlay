module.exports = {
  publicPath:'./',
  devServer: {
    // 设置代理
    proxy: 'http://localhost:8080'
  }
}