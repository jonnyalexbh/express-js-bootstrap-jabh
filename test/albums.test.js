const request = require('supertest');
const axios = require('axios');
const mocksAlbums = require('./mocks/album');

const app = require('../app');

jest.mock('axios');

describe('albums', () => {
  it('get list albums', (done) => {
    axios.get.mockResolvedValue({ data: mocksAlbums.allAlbums });
    request(app)
      .get('/albums')
      .then((res) => {
        expect(res.body.length).toBeGreaterThanOrEqual(2);
        expect(res.status).toBe(200);
        done();
      });
  });
});
