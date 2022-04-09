//loaded our express module
const { response } = require("express");
const express = require("express");
//initializing a router object, with a Router function, that is a part of express
const router = express.Router();

//testing routes
router.get("/whateveriwant", (request, response) => {
  response.send("WHATEVER I WANT");
});

//exporting our Router()
module.exports = router;
