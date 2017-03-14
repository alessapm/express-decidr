const db = require('../config/database.js');

let Restaurant = {};

Restaurant.findAllById = (id) => {
  return db.manyOrNone(`SELECT * FROM restaurants where user_id = $1`, [id])
}


Restaurant.create = (restaurant, id) => {
  //something like,
  //INSERT INTO restaurants (user_id, name, location, rating, etc)
  //VALUES ($1, $2, $3, $4),
  //[id, restaurant.name, restaurant.location, restaurant.rating]

}

Restaurant.destroy = (restaurant_id) => {};

module.exports = Restaurant;
