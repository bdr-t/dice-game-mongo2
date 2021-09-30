const request = require('supertest');
// const faker = require('faker');
const httpStatus = require('http-status');

const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { User } = require('../../src/models');
const { userOne, insertUsers } = require('../fixtures/user.fixture');
const { userOneAccessToken, insertToken } = require('../fixtures/token.fixture');

setupTestDB();

describe('Players routes', () => {
  const newUser = { name: 'bader' };

  describe('POST /players', () => {
    test('should return 201 and succesfuly create new user', async () => {
      await insertUsers([userOne]);
      await insertToken();

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

      const dbUser = await User.findById(res.body.user.id).lean();
      expect(dbUser).toBeDefined();
    });
    test('should return 401 error if access token is missing', async () => {
      await request(app).post('/players').send(newUser).expect(httpStatus.UNAUTHORIZED);
    });
    test('should return 400 error if name is already used', async () => {
      await insertUsers([userOne]);
      await insertToken();

      await request(app)
        .post('/players')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send(newUser)
        .expect(httpStatus.CREATED);

      await request(app)
        .post('/players')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });
    test('should return 201 and succesfully create new user without name', async () => {
      await insertUsers([userOne]);
      await insertToken();

      const res = await request(app)
        .post('/players')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .expect(httpStatus.CREATED);

      expect(res.body.user).toEqual({
        id: expect.anything(),
        name: 'ANÒNIM-1',
        games: [],
        succes_rate: 0,
      });

      const res2 = await request(app)
        .post('/players')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .expect(httpStatus.CREATED);

      expect(res2.body.user).toEqual({
        id: expect.anything(),
        name: 'ANÒNIM-2',
        games: [],
        succes_rate: 0,
      });
    });
  });
});
