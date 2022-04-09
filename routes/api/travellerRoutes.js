//loaded our express module
const { response } = require("express");
const express = require("express");
//initializing a router object, with a Router function, that is a part of express
const router = express.Router();

//building our route /travellers
router.get("/travellers", (request, response) => {
  response.send("test");
});

router.post("/travellers", (request, response) => {
  response.send("test");
});

router.get("/travellers/:id", (request, response) => {
  response.send("test");
});

router.delete("/travellers/:id", (request, response) => {
  response.send("test");
});

//exporting our Router()
module.exports = router;
