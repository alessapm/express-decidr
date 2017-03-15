const fetch = require('node-fetch');

const googlePlaces = {};
const apiKey = process.env.API_KEY;

googlePlaces.search = (zip, category) => {
  // console.log('zip is', zip);
  // console.log('category is: ', category)
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${zip}&key=${apiKey}&type=${category}&opennow=true`

  );
}

module.exports = googlePlaces;
