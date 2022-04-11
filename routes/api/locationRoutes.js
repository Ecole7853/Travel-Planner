//loaded our express module
const { response } = require("express");
const express = require("express");
//initializing a router object, with a Router function, that is a part of express
const router = express.Router();

const { location } = require("../../models/index");

//building our route /locations
router.get("/", (request, response) => {
  location.findAll().then((locations, fields) => {
    response.send(locations);
  });
});

router.post("/", (request, response) => {
  const locationObj = {
    name: request.body.name,
  };
  location.create(locationObj).then((data) => {
    response.send(data);
  });
});

router.get("/:id", (request, response) => {
  location.findByPk(request.params.id).then((location, fields) => {
    response.send(location);
  });
});

router.delete("/:id", (request, response) => {
  location.findByPk(request.params.id).then((location, fields) => {
    location
      .destroy({
        where: { id: location.id },
      })
      .then((data) => {
        response.send(data);
      });
    console.log("Location " + location.id + " has been deleted!");
  });
});

//exporting our Router()
module.exports = router;
