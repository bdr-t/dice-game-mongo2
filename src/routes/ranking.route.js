const express = require('express');
const auth = require('../middlewares/auth');
const rankingController = require('../controllers/ranking.controller');

const router = express.Router();

router.get('/', auth(), rankingController.getAllUsers);
router.get('/loser', auth(), rankingController.getLoser);
router.get('/winner', auth(), rankingController.getWinner);

module.exports = router;

/*
1. router.get('/') => retorna ranking de tots el jugadors per percentatge exit
2. router.get('/loser')=> retorna pitjor precentatje d¡exit
2. router.get('/winner')=> retorna millor precentatje d¡exit
*/
