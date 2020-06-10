const axios = require('axios');
const controller = require('../../app/controllers/albums');

jest.mock('axios');

const mockAlbums = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
  },
];

const req = {};
const res = {};
let next = null;

beforeEach(() => {
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  next = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Controller Albums', () => {
  it('allAlbums function is defined', () => {
    expect(typeof controller.allAlbums).toBe('function');
  });
  it('should get the albums successfully', async () => {
    axios.get.mockResolvedValue({ data: mockAlbums });
    await controller.allAlbums(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ albums: mockAlbums });
  });
  it('should call next method with error when getAlbums service return an error', async () => {
    const stub = axios.get.mockRejectedValueOnce({ statusCode: 500, message: 'test' });
    await controller.allAlbums(req, res, next);
    expect(stub).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalled();
  });
});
