const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/api', createProxyMiddleware({
    target: 'http://dev.admin.carrots.ptteng.com/',
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }}));

  // app.use('/api2', createProxyMiddleware({
  //   target: 'http://dev.admin.carrots.ptteng.com',
  //   changeOrigin: true,
  //   pathRewrite: { //路径替换
  //     '^/api2': '/api', // axios 访问/api2 == target + /api
  //   }
  // }));

};