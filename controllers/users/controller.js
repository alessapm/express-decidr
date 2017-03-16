const User = require('../../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const myToken = process.env.myToken

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
  console.log('***', req.body.user.email)
  User.findByEmail(req.body.user.email)
  .then((user) => {
    // res.sendStatus(201);

    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password);
      if (isAuthed) {

        console.log('isAuthed is true');
        //generate the token here,
        //(add it to the end of a url route and then) send it to the front end.
        // ex:
        const token = jwt.sign({email: user.email}, myToken, { expiresIn: "7d"});
        // console.log('token: ', token);
        console.log('token is: ', token)
         res
         // .sendStatus(201)
         .json({token: token})


      } else {

        console.log('isAuthed is false');
        res.status(401)
      }
    } else {

      console.log('cannot find match email address');
      res.status(404)
      .json({error: "No user found"});
    }
  })
};






module.exports = controller;
