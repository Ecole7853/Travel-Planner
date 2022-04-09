//creating variables that allow to reach the files within this folder with router
const travellerRoutes = require("./travellerRoutes");
const locationRoutes = require("./locationRoutes");
const tripRoutes = require("./tripRoutes");

//import and initialize router
const router = require("express").Router();

//defining our routes here, rather than in the individual js files
router.use("/travellers", travellerRoutes);
router.use("/locations", locationRoutes);
router.use("/trips", tripRoutes);

//exporting
module.exports = router;
