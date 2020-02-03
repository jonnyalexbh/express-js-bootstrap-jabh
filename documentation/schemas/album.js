const albums = {
  type: 'array',
  example: [
    {
      userId: 1,
      id: 1,
      title: 'book 1',
    },
    {
      userId: 1,
      id: 2,
      title: 'book 2',
    },
  ],
  items: {
    type: 'object',
    properties: {
      userId: { type: 'integer' },
      id: { type: 'integer' },
      title: { type: 'string' },
    },
  },
};

module.exports = {
  GetAlbums: {
    type: 'object',
    properties: {
      albums,
    },
  },
};
