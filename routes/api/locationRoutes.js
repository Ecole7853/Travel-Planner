//loaded our express module
const { response } = require("express");
const express = require("express");
//initializing a router object, with a Router function, that is a part of express
const router = express.Router();

//building our route /locations
router.get("/", (request, response) => {
  response.send("test");
});

router.post("/", (request, response) => {
  response.send("test");
});

router.get("/:id", (request, response) => {
  response.send("test");
});

router.delete("/:id", (request, response) => {
  response.send("test");
});

//exporting our Router()
module.exports = router;
