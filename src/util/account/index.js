const constants = {
  CLOSED: false,
  OPENED: true,
  SIGN_IN: 0,
  REGISTER: 1
};

const routes = {
  SIGN_IN: '/api/1/signin',
  SIGN_OUT: '/api/1/signout',
  REGISTER: '/api/1/register',
  VALIDATE: '/api/1/validate'
};

export default {
  c: constants,
  r: routes
};
