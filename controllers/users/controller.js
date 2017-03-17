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
  // console.log('***', req.body.user.email)
  User.findByEmail(req.body.user.email)
  .then((user) => {
    // res.sendStatus(201);

    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password);
      if (isAuthed) {
        // console.log('isAuthed is true');
        // set up JWT token. Sending email as the payload
        //myToken as the secret (stored in .env)
        const token = jwt.sign({email: user.email}, myToken, { expiresIn: "7d"});

         res
         // .sendStatus(201)
         .json({
            token: token,
            firstname: user.first_name,
            lastname: user.last_name
          })

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

//use jwt.verify to compare the secret in the Token to the one in .env
controller.restricted = (req, res) => {
  jwt.verify(req.headers.authorization, myToken, (err, decoded) => {
    if (err) {
      res.
      status(401)
      .json({error: err.message});
    } else {
      res.json({message: 'this is content coming from Node.'});
    }
  })
}




module.exports = controller;
