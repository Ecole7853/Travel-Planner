//loaded our express module
const { response } = require("express");
const express = require("express");
//initializing a router object, with a Router function, that is a part of express
const router = express.Router();

const { trip } = require("../../models/index");

//building our route /trips
router.post("/", (request, response) => {
  const tripObj = {
    trip_budget: request.body.name,
    traveller_amount: request.body.traveller_amount,
    traveller_id: request.body.traveller_id,
    location_id: request.body.location_id,
  };
  trip.create(tripObj).then((data) => {
    response.send(data);
  });
});

router.delete("/:id", (request, response) => {
  trip.findByPk(request.params.id).then((trip, fields) => {
    trip
      .destroy({
        where: { id: trip.id },
      })
      .then((data) => {
        response.send(data);
      });
    console.log("Trip " + trip.id + " has been deleted!");
  });
});

//exporting our Router()
module.exports = router;
