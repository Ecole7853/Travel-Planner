//loaded our express module
const { response } = require("express");
const express = require("express");
//initializing a router object, with a Router function, that is a part of express
const router = express.Router();

//building our route /trips
router.post("/trips", (request, response) => {
  response.send("test");
});

router.delete("/trips/:id", (request, response) => {
  response.send("test");
});

//exporting our Router()
module.exports = router;
