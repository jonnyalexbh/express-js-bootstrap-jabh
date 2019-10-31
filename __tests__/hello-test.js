const request = require('supertest');
const app = require('../app');

describe('test our hello world with jest', () => {
  it('you must respond to the get method', (done) => {
    request(app).get('/sample-test').then((res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});
