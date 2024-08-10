const flightController = require("../controllers/flightsController");
const express = require("express");
const router = express.Router();

router.get("/", flightController.selectFlight);
router.post("/", flightController.sendSelectedFlight);

router.get("/:flightNumber", flightController.showModify);
router.post("/:flightNumber", flightController.modify);

module.exports = router;