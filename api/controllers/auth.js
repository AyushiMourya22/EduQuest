const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { setUserInSession } = require('../middleware/session');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: req.body.email });

    if (user && bcrypt.compare(password, user.password)) {
      // Update the last_login variable
      user.last_login = new Date();

      setUserInSession(req, user);
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Incorrect email or password' });
    }
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      isAdmin: req.body.role == 'user' ? false : true,
    });
    const existUser = await User.findOne({ email: req.body.email });
    console.log(existUser);
    if (!existUser) {
      await newUser.save();
      setUserInSession(req, newUser);
      res.status(200).json({ message: 'Successfully registered', newUser });
    } else {
      res.status(400).json({ message: 'email already exists' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login: login,
  register: register,
};
