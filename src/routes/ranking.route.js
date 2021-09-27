const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.send('ranking');
});

module.exports = router;

/*
1. router.get('/') => retorna ranking de tots el jugadors per percentatge exit
2. router.get('/loser')=> retorna pitjor precentatje d¡exit
2. router.get('/winner')=> retorna millor precentatje d¡exit
*/
