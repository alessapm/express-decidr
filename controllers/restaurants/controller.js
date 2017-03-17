const Restaurant = require('../../models/restaurant.js');
const GooglePlaces = require('../../services/restaurants.js');

const controller = {};


controller.index = (req, res) => {
  // console.log('req.params.zip: ', req.params.zip)
  console.log('req.params ', req.params)
  GooglePlaces.search(req.params.zip, req.params.category)
  .then(r => r.json()
  .then((data) => {
    console.log('******data.: ', data);
    res.send(data.results);
  }))
  .catch(err => console.log(err));
};

//controller.show will give us all the favorites
//of a certain user
controller.show = (req, res) => {
  Restaurant.findAllById(req.params.id)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => console.log(err))

}

//controller.create will add to the favorites
//of a certain user
controller.create = (req, res) => {
  Restaurant.create(req.body.restaurant, req.params.user_id)
  //assuming we receive an object with {restaurant: {restaurant details}}
  .then((data) => {
    console.log('controller.create is working');
    res.sendStatus(201);
  })
  .catch((err) => console.log(err))

}

controller.update = (req, res) => {
  Restaurant.update(req.body.restaurant, req.params.user_id, req.params.restaurant_id)
  .then((data) => {
    console.log('controller.update is working')
    res.sendStatus(200);
  })
  .catch((err) => console.log(err))
}

//controller.destroy deletes a favorite from a user
controller.destroy = (req, res) => {
  Restaurant.destroy(req.params.restaurant_id)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => console.log(err))
}


module.exports = controller;
