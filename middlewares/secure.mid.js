module.exports.isAuthenticated = (rep, res, next) => {
  if (requestAnimationFrame.user) {
    next();
  } else {
    res.redirect("/login");
  }
};
