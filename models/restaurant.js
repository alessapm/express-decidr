const db = require('../config/database.js');

let Restaurant = {};

Restaurant.findAllById = (user_id) => {
  return db.manyOrNone(`SELECT * FROM favorites where user_id = $1`, [user_id])
}


Restaurant.create = (restaurant, user_id) => {
return db.none(`INSERT INTO favorites (user_id, name, lat, lng, price_level,
   formatted_address, rating, comment)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
  [user_id, restaurant.name, restaurant.geometry.location.lat, restaurant.geometry.location.lng, restaurant.price_level, restaurant.formatted_address,
 restaurant.rating, null])

}

Restaurant.update = (restaurant, user_id, restaurant_id) => {
  return db.none(`UPDATE favorites SET user_id = $1, name = $2, lat = $3, lng = $4,
    price_level = $5, formatted_address = $6, rating = $7, comment = $8 WHERE id = $9`,
    [user_id, restaurant.name, restaurant.geometry.location.lat, restaurant.geometry.location.lng, restaurant.price_level, restaurant.formatted_address,
   restaurant.rating, restaurant.comment, restaurant_id])
}

Restaurant.destroy = (restaurant_id) => {
  return db.none(`DELETE FROM favorites where id = $1`, [restaurant_id])
};

module.exports = Restaurant;
