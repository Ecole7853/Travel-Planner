//loading in express library
const express = require("express");

//initialising app for express
const app = express();

//declaring a port we'll use for express
const port = 3000;

//setting our route on app with a request and response arguments
app.get("/route", (request, response) => {
  response.send("Hello World");
});

//listens for our port, which is set on line 6, and if it's heard, it console logs confirmation
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
