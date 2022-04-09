//creating variables that allow to reach the files within this folder with router
const traveller = require("./travellerRoutes");
const location = require("./locationRoutes");
const trip = require("./tripRoutes");

//exporting
module.exports = { traveller, location, trip };
