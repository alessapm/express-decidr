const User = require('../../models/user.js');

const controller = {};

//this will create a new user
controller.create = (req, res) => {
  User.create(req.body.user)
  .then()
  .catch((err) => console.log('error: ', err));
}

//this will verify if someone has the right email and password:
controller.login = (req, res) =>  {
  User.findByEmail(req.body.user.email)
  .then((user) => {
    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password);
      if (isAuthed) {
        //redirect to homepage? via backend? via request to react-decidr?
      } else {
        //would we do a redirect to login from backend?
      }
    } else {
      //would we do a redirect to create user page from backend?
    }
  })
};






module.exports = controller;
