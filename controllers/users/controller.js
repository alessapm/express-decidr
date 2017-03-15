const User = require('../../models/user.js');
const bcrypt = require('bcrypt');

const controller = {};

//this will create a new user
controller.create = (req, res) => {
  User.create(req.body.user)
  .then((data) => {
    res.sendStatus(201);
    console.log('controller.create running');
  })
  .catch((err) => console.log('error: ', err));
}

//this will verify if someone has the right email and password:
controller.login = (req, res) =>  {
  User.findByEmail(req.body.user.email)
  .then((user) => {
    res.sendStatus(201);

    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password);
      if (isAuthed) {
        //redirect to homepage? via backend? via request to react-decidr?
        console.log('isAuthed is true');
      } else {
        //would we do a redirect to login from backend?
        console.log('isAuthed is false');
      }
    } else {
      //would we do a redirect to create user page from backend?
      console.log('cannot find match email address')
    }
  })
};






module.exports = controller;
