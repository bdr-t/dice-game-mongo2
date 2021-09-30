const request = require('supertest');
// const faker = require('faker');
const httpStatus = require('http-status');

const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
// const { User } = require('../../src/models');
const { userOne, insertUsers } = require('../fixtures/user.fixture');
const { userOneAccessToken, insertToken } = require('../fixtures/token.fixture');

setupTestDB();

describe('Players routes', () => {
  describe('POST /players', () => {
    test('should return 201 and succesfuly create new user', async () => {
      await insertUsers([userOne]);
      await insertToken();
      const newUser = { name: 'bader' };

      const res = await request(app)
        .post('/players')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send(newUser)
        .expect(httpStatus.CREATED);

      expect(res.body.user).toEqual({
        id: expect.anything(),
        name: newUser.name,
        games: [],
        succes_rate: 0,
      });
    });
  });
});
