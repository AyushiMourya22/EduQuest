
function setUserInSession(req, user) {
    console.log(user);
  req.session.user = user;
}

// Middleware to get user information from session
function getUserFromSession(req) {
  return req.session.user;
}

module.exports = {
  setUserInSession,
  getUserFromSession,
};
