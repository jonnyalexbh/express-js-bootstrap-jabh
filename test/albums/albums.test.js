const request = require('supertest');
const axios = require('axios');
const mocksAlbums = require('../mocks/album');

const app = require('../../app');

jest.mock('axios');

describe('albums', () => {
  it('get list albums', (done) => {
    axios.get.mockResolvedValue({ data: mocksAlbums.allAlbums });
    request(app)
      .get('/albums')
      .then((res) => {
        expect(res.body).toHaveProperty('albums');
        expect(res.body.albums.length).toBeGreaterThanOrEqual(2);
        expect(res.status).toBe(200);
        done();
      });
  });
  it('get list albums with async', async () => {
    axios.get.mockResolvedValue({ data: mocksAlbums.allAlbums });
    const res = await request(app)
      .get('/albums');
    expect(res.body.albums.length).toBeGreaterThanOrEqual(2);
    expect(res.status).toBe(200);
  });
});
