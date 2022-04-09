//loading in express library
const express = require("express");

//pulling in our ./routes file in our file structure
const routes = require("./routes");

//pulling in our sequelize, because we typed ./config, it doesn't pull from node modules
//and instead of pulls from our file structure
const sequelize = require("./config/connection");

//initialising app for express
const app = express();

//declaring a port we'll use for express
const port = 3000;

//setting our route on app with a request and response arguments
//telling app, when you get a .get request, first it needs to process the routes, if it doesn't === /route, will repond 404, if it does, 200, and pass into function
app.get("/route", (request, response) => {
  response.send("Hello World");
});

//turn on routes
app.use(routes);

//sequelize.sync (tries to connect).then
sequelize.sync().then(() => {
  //listens for our port, which is set on line 6, and if it's heard, it console logs confirmation
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
