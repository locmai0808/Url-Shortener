const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/', (req, res) => {
  queries
    .getAll(req)
    .then(e => {
      if (e.originalUrl) return res.redirect(e.originalUrl);
      res.status(200).json(e);
    })
    .catch(e => {
      res.status(404).json(e);
    });
});

module.exports = router;
