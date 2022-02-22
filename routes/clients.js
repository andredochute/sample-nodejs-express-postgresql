var express = require('express');
var router = express.Router();
const Client = require("../models/client");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const data = await Client.select();
  res.json(data.rows);
});

router.post('/', async function(req, res, next) {
  const data = await Client.insert();
  res.json(data.rows);
});

module.exports = router;
