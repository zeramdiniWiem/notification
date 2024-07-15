const express = require('express');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const notificationRoute = require('./notification.route');

const router = express.Router();

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
  {
    path:'/notification',
    route: notificationRoute,
  }
];

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
