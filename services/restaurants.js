const fetch = require('node-fetch');

const googlePlaces = {};
const apiKey = process.env.API_KEY;

googlePlaces.search = (zip) => {
  console.log('zip is', zip)
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${zip}&key=${apiKey}&type=restaurant&opennow=true`

  );
}

module.exports = googlePlaces;
