// const request = require('supertest');
// // const faker = require('faker');
// const httpStatus = require('http-status');

// const app = require('../../src/app');
// const setupTestDB = require('../utils/setupTestDB');
// // const { User } = require('../../src/models');
// const { userTwo, insertUsers } = require('../fixtures/user.fixture');
// const { userTwoAccessToken } = require('../fixtures/token.fixture');

// setupTestDB();

// describe('Players routes', () => {
//   describe('POST /players', () => {
//     test('should return 201 and succesfuly create new user', async () => {
//       const admin = {
//         name: 'admin',
//         password: 'password1',
//       };
//       const newUser = { name: 'bader' };
//       let register = await request(app).post('/auth/register').send({ admin }).expect(httpStatus.CREATED);
//       console.log(register)
//       const res = await request(app)
//         .post('/players')
//         .set('Authorization', `Bearer ${userTwoAccessToken}`)
//         .send(newUser)
//         .expect(httpStatus.CREATED);

//       expect(res.body.user).toEqual({
//         id: expect.anything(),
//         name: newUser.name,
//         games: [],
//         succes_rate: 0,
//       });
//     });
//   });
// });
