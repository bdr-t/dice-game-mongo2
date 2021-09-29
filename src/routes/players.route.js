const express = require('express');
const auth = require('../middlewares/auth');
const playersController = require('../controllers/players.controller');

const router = express.Router();

// router.get('/', function (req, res) {
//   res.send('user');
// });

router.post('/', auth(), playersController.createUser);
module.exports = router;

/*
1. router.post('/') => crear jugador
2. router.put('/') => modifica el nom jugador
3. router.post('/:id/games') => jugar partida
4. router.delete('/:id:games') => elimina jocs del jugadore
5. router.get('/') => retorna tots els jugadors amb percentatje exits
6. router.get('/:id:games) => retorna llista de juagades per jugador
*/
