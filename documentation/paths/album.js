module.exports = {
  '/albums': {
    get: {
      tags: ['albums'],
      description: 'Get albums',
      operationId: 'GetAlbums',
      parameters: [],
      responses: {
        200: {
          description: 'Album were obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/GetAlbums',
              },
            },
          },
        },
      },
    },
  },
};
