const middleware = require('../../app/middlewares/isAdmin');

let req = {
  params: {
    admin: '1',
    age: '26',
  },
};

const res = {};
let next = null;

beforeEach(() => {
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);

  next = jest.fn();
});

describe('middleware isAdmin', () => {
  it('isAdmin function is defined', () => {
    expect(typeof middleware).toBe('function');
  });

  it('should call res.send method with when isAdmin ', () => {
    middleware(req, res, next);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith('you are an administrator your age is 26');
  });

  it('should call next method with error when isAdmin return an error ', () => {
    req = {
      params: {
        admin: '2',
      },
    };
    middleware(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalled();
  });
});
