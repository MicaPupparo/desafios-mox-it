const flightController = require("../controllers/flightsController");
const express = require("express");
const router = express.Router();

router.get("/", flightController.selectFlight);
router.post("/", flightController.showModify);

module.exports = router;