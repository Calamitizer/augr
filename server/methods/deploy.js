(() => {
  'use strict';

  const path = require('path');
  const express = require('express');
  const morgan = require('morgan');
  const bodyParser = require('body-parser');
  const compression = require('compression');

  const { config } = require('../../common.config');
  const assetRouter = require('../routers/asset');
  const navRouter = require('../routers/nav');

  const AUGR = express();

  AUGR.set('port', config.port)
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(
      bodyParser.urlencoded({
        extended: true,
      })
    )
    .use(compression())
    .use('/', assetRouter)
    .use('/', navRouter);

  AUGR.listen(AUGR.get('port'), () => {
    console.log(`App server listening on port ${AUGR.get('port')}`);
  });
})();
