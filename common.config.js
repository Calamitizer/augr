(() => {
  'use strict';

  const path = require('path');

  const resolve = (...pathSegments) => path.resolve(__dirname, ...pathSegments);

  const CLIENT = 'client';
  const SERVER = 'server';
  const SOURCE = 'src';
  const DIST = 'www';

  const config = {
    appName: 'augr',
    appPrefix: 'augr',
    port: 3030,
    devPort: 4040,
    srcDir: resolve(CLIENT, SOURCE),
    distDir: resolve(CLIENT, DIST),
  };

  module.exports = {
    config,
    resolve,
  };
})();
