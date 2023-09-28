'use strict';

const Authenticate = (request, response, next) => {
  const authHeader = (request.header('Authorization') ?? '');

  if (!authHeader.startsWith('Bearer ')) {
    return response.status(401).send('Unauthorization.');
  }

  const token = authHeader.replace(/^Bearer\s+/, '');

  next();
};

module.exports = Authenticate;
