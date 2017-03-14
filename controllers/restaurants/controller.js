const Restaurant = require('../../models/restaurant.js');

const controller = {};

//controller.show will give us all the favorites
//of a certain user
controller.show = (req, res) => {
  Restaurant.findAllById(req.params.id) //will request
  //to a route with the user id as :id
  .then()
  .catch((err) => console.log(err))

}

//controller.create will add to the favorites
//of a certain user
controller.create = (req, res) => {
  Restaurant.create(req.body.restaurant, req.params.id)
  //assuming we receive an object with {restaurant: {restaurant details}}
  .then()
  .catch((err) => console.log(err))

}

controller.update = (req, res) => {
  Restaurant.update(req.body.restaurant, req.params.id)
  .then()
  .catch((err) => console.log(err))
}

//controller.destroy deletes a favorite from a user
controller.destroy = (req, res) => {
  Restaurant.destroy(req.params.id)
  .then()
  .catch()
}


module.exports = controller;
