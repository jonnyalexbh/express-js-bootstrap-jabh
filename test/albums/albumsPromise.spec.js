const request = require('supertest');
const rpMock = require('request-promise');
const mocksAlbums = require('../mocks/album');

const app = require('../../app');

jest.mock('request-promise');

describe('albums', () => {
  it('should list all albums with success', (done) => {
    rpMock.mockResolvedValueOnce(mocksAlbums.allAlbums);
    request(app)
      .get('/sample-promise-albums')
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('albums');
        expect(res.body.albums.length).toBeGreaterThanOrEqual(2);
        done();
      });
  });
  it('should list all albums with success async', async () => {
    rpMock.mockResolvedValueOnce(mocksAlbums.allAlbums);
    const res = await request(app)
      .get('/sample-promise-albums');
    expect(res.body.albums.length).toBeGreaterThanOrEqual(2);
    expect(res.status).toBe(200);
  });
});
