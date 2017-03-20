# Express-decidr

## About express-decidr

This is the repository for the backend code of Decidr. 

This repository will contain the sources for building the backend of the Decidr app. It is intended to be used alongside its frontend repository, https://github.com/Decidr/react-decidr

## Purpose

The main functions of express-decidr are to submit node-fetch requests to the Google Places API,
 to create users, generate JWT tokens, and store favorite restaurants for each user in a database. 

## Installation 

 To install express-decidr, fork and clone this repository. 

 1. Fork this project on github.

2. In your local terminal clone your fork to your device, e.g.:

$ git clone https://github.com/${YOUR-GITHUB-NAME}/express-decidr.git

3. Next, go into the just created directory:

$ cd express_decidr/

In order to get all needed dependencies (express, body-parser etc), install from npm:

$ npm install

If you choose to add requests to this remote repository, add the repo as upstream:

$ git remote add upstream https://github.com/Decidr/express-decidr

Verify the remote exists:

$ git remote -v


## Set Up: 

This repository is setup to run on a local device on localhost:8000. 

**In order to get a functional product, you will need to create your own developer keys
with for the Google Places API and Google Maps. These are to be stored in your .env file, 
which will need to be created in the root directory.** 

On a local machine, This project is designed to alter a local database titled express_decidr. 


## Usage 

*Note:* This assumes that you have setup React-Decidr, the front-end component as well. 

* All user routes are configured to /users.

* All restaurant/favoriting routes are configured to /restaurants.

* This project follows a simple controller-model pattern with routes leading to 
either the API fetch request, or postgreSQL queries. 


