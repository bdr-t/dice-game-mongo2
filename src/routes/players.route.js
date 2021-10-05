const express = require('express');
const auth = require('../middlewares/auth');
const playersController = require('../controllers/players.controller');

const router = express.Router();

// router.get('/', function (req, res) {
//   res.send('user');
// });

router.post('/', auth(), playersController.createUser);
router.put('/:name', auth(), playersController.updateUser);
router.post('/:name', auth(), playersController.createGame);
router.delete('/:name', auth(), playersController.deleteGames);
router.get('/', auth(), playersController.getAllUsers);
router.get('/:name', auth(), playersController.getUser);

module.exports = router;

/*
1. TODO router.post('/') => crear jugador 
2. TODO router.put('/') => modifica el nom jugador
3. TODO router.post('/:id/games') => jugar partida
4. TODO router.delete('/:id:games') => elimina jocs del jugadore
5. TODO router.get('/') => retorna tots els jugadors amb percentatje exits
6. TODO router.get('/:id:games) => retorna llista de juagades per jugador
*/
