(() => {
  'use strict';

  const serveStatic = require('serve-static');
  const path = require('path');

  const {
    config: { distDir },
  } = require('../../common.config');

  const options = {
    index: false,
  };

  const assetRouter = serveStatic(distDir, options);

  module.exports = assetRouter;
})();
