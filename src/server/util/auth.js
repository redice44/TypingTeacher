const auth = (req, res, next) => {
  if (!req.user) {
    console.log('Not authenticated.');
    return res.redirect('/');
  }
  next();
};

export default auth;
