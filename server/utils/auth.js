/* The code provided is different from module 21.  I will use module 21 as a guide and highlight the differences */

const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };
    
    return jwt.sign({ date: payload }, secret, {
      expiresIn: expiration 
    });
  },
  
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // if no token, return request object as is
    if (!token) {
      return req;
    }

    // decodde and attach user data to request object
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // send to next endpoint
    return req;
  },
  
};
