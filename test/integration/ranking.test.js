const request = require('supertest');
const mongoose = require('mongoose');
const httpStatus = require('http-status');

const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { userOne, insertUsers } = require('../fixtures/user.fixture');
const { userOneAccessToken, insertToken } = require('../fixtures/token.fixture');

setupTestDB();

describe('Ranking routes', () => {
  const winner = {
    _id: mongoose.Types.ObjectId(),
    name: 'winner',
    games: [],
    succes_rate: 1,
    lost: 0,
    won: 1,
  };

  const loser = {
    _id: mongoose.Types.ObjectId(),
    name: 'loser',
    games: [],
    succes_rate: 0,
    lost: 1,
    won: 0,
  };

  describe('GET /', () => {
    test('should return 200 and successfully return the ranking of the players', async () => {
      await insertUsers([userOne, winner, loser]);
      await insertToken();
      const res = await request(app)
        .get('/ranking')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .expect(httpStatus.OK);

      const response = {
        users: [
          { name: 'winner', succes_rate: 1 },
          { name: 'loser', succes_rate: 0 },
        ],
      };
      expect(res.body.users).toEqual(response.users);
    });

    test('should return 200 if there are no users', async () => {
      await insertUsers([userOne]);
      await insertToken();
      const res = await request(app)
        .get(`/ranking`)
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        users: [],
      });
    });

    test('should return 401 error if access token is missing', async () => {
      await request(app).get(`/ranking`).expect(httpStatus.UNAUTHORIZED);
    });
  });
});
