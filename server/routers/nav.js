(() => {
  'use strict';

  const path = require('path');
  const express = require('express');

  const {
    config: { srcDir },
  } = require('../../common.config');

  const navRouter = express
    .Router()
    // .use((req, res, next) => {
    //   console.log(`
    //             Site request made.
    //             Base: ${req.baseUrl}
    //             Original: ${req.originalUrl}
    //             Url: ${req.Url}
    //         `);
    //   next();
    // })
    .get('*', (req, res) => {
      res.status(200).sendFile('/index.html', {
        root: srcDir,
      });
    });

  module.exports = navRouter;
})();
