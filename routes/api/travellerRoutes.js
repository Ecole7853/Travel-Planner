//loaded our express module
const { response } = require("express");
const express = require("express");
//initializing a router object, with a Router function, that is a part of express
const router = express.Router();

const { traveller } = require("../../models/index");

//building our route /travellers SELECT * FROM <table>
router.get("/", (request, response) => {
  traveller.findAll().then((travellers, fields) => {
    response.send(travellers);
  });
});

//gets converted into INSERT INTO <table> (<columns>) VALUES (<actual values>) in sql
router.post("/", (request, response) => {
  const travellerObj = {
    name: request.body.name,
    email: request.body.email,
  };
  console.log(request.body);
  traveller.create(travellerObj).then((data) => {
    response.send(data);
  });
});

router.get("/:id", (request, response) => {
  traveller.findByPk(request.params.id).then((traveller, fields) => {
    response.send(traveller);
  });
});

router.delete("/:id", (request, response) => {
  traveller.findByPk(request.params.id).then((traveller, fields) => {
    traveller
      .destroy({
        where: { id: traveller.id },
      })
      .then((data) => {
        response.send(data);
      });
    console.log("Traveller " + traveller.id + " has been deleted!");
  });
});

//exporting our Router()
module.exports = router;
