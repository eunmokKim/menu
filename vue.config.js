module.exports = {
  devServer : {
    proxy : {
      '/kakao' : {
        target : 'http://localhost:12345'
      },
      '/menu' : {
        target : 'http://localhost:12345'
      }
    }
  }
}
