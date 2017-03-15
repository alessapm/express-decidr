const Restaurant = require('../../models/restaurant.js');
const GooglePlaces = require('../../services/restaurants.js');

const controller = {};


controller.index = (req, res) => {
  // console.log('req.params.zip: ', req.params.zip)
  GooglePlaces.search(req.params.zip)
  .then(r => r.json())
  .then(data => console.log(data.results))
  .catch(err => console.log(err));
};

//controller.show will give us all the favorites
//of a certain user
controller.show = (req, res) => {
  Restaurant.findAllById(req.params.id) //will request
  //to a route with the user id as :user_id
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
  // Restaurant.update(req.body.restaurant, req.params.id)
  // .then()
  // .catch((err) => console.log(err))
}

//controller.destroy deletes a favorite from a user
controller.destroy = (req, res) => {
  // Restaurant.destroy(req.params.id)
  // .then()
  // .catch()
}


module.exports = controller;
