const request = require('supertest');
const expect = require('chai').expect;

const app = require('../index.js');

describe('Restaurants', () => {

  it("GET /restaurants/zip/:zip/:category should return 200 status code and be an array", (done) => {
    request(app)
    .get("/restaurants/zip/10022/restaurant")
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    });
  });

it("GET /restaurants/:user_id should return 200 and be an Array", (done) => {
  request(app)
  .get("/restaurants/1")
  .end((err, results) => {
    expect(results.statusCode).to.equal(200);
    // expect(results.body).to.be.an.instanceOf(Array);
    done();
  });
});

it("POST /resturants/:user_id should return 201 and return nothing", (done) => {
  request(app)
  .post("/restaurants/1")
  .send({
    restaurant: {
      user_id: 1,
      restaurant_id: 1,
      name: "Chez Pantalons Fancies",
      html_attributions: "<a href=\"https://maps.google.com/maps/contrib/115395854612694541189/photos\">Hasina Bender</a>",
      price_level: 5,
      formatted_address: "4540 Center Blvd, New York, NY 10044, United States",
      rating: 4.5,
      comment: null
    }
  })
  .end((err, results) => {
    expect(results.statusCode).to.equal(201);
    done();
  });
});

it("PUT /restaurants/:user_id/:restaurant_id should return 200", (done) => {
  request(app)
  .put('/restaurants/1/1')
  .send({
    restaurant: {
      user_id: 1,
      name: "Rib in a Cup",
      html_attributions: "<a href=\"https://maps.google.com/maps/contrib/115395854612694541189/photos\">Hasina Bender</a>",
      price_level: 1,
      formatted_address: "4540 Center Blvd, New York, NY 10044, United States",
      rating: 3.5,
      comment: "this place has good ribs"
    }
  })
  .end((err, results) => {
    expect(results.statusCode).to.equal(200);
    done();
  });
});


it("DELETE /restaurants/:user_id/:restaurant_id should return a 200 status code", (done) => {
  request(app)
  .delete('/restaurants/1/1')
  .end((err, results) => {
    expect(results.statusCode).to.equal(200);
    done();
  })
})


}) //closes restaurants




