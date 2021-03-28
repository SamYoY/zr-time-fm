module.exports = {
  build: {

  },
  dev: {
    proxyTable: {
      '/api': {
        target: 'http://test.com',
        changeOrigin: true,
      },
      '/promote': {
        target: 'http://test.com',
        changeOrigin: true,
      },
      '/product': {
        target: 'http://test.com',
        changeOrigin: true,
      },
    },
  },
};
