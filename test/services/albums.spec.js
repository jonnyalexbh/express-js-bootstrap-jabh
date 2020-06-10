const axios = require('axios');
const service = require('../../app/services/album');

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

afterEach(() => {
  jest.clearAllMocks();
});

describe('Service Photos', () => {
  it('getAlbums function is defined', () => {
    expect(typeof service.getAlbums).toBe('function');
  });
  it('should call getAlbums service successfully', async () => {
    axios.get.mockResolvedValue({ data: mockAlbums });
    jest.spyOn(service, 'getAlbums');
    const result = await service.getAlbums('/albums');
    expect(service.getAlbums).toHaveBeenCalledTimes(1);
    expect(service.getAlbums).toHaveBeenCalledWith('/albums');
    expect(result).toBe(mockAlbums);
  });
  it('should error when getAlbums service return an error ', async () => {
    const stub = axios.get.mockRejectedValueOnce({ message: 'test' });
    await expect(service.getAlbums('/albums')).rejects.toMatchObject({ message: 'test' });
    expect(stub).toHaveBeenCalledTimes(1);
  });
});
