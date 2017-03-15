const db = require('../config/database.js');

let Restaurant = {};

Restaurant.findAllById = (user_id) => {
  return db.manyOrNone(`SELECT * FROM favorites where user_id = $1`, [user_id])
}


Restaurant.create = (restaurant, user_id) => {
  something like, return db.none
  INSERT INTO favorites (user_id, name, location, rating, etc)
  VALUES ($1, $2, $3, $4),
  [id, restaurant.name, restaurant.location, restaurant.rating]

}

Restaurant.update = (restaurant, user_id) => {

}

Restaurant.destroy = (restaurant_id) => {
  return db.none(`DELETE FROM favorites where id = $1`, [restaurant_id])
};

module.exports = Restaurant;
