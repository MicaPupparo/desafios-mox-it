const flightController = require("../controllers/flightsController");
const express = require("express");
const router = express.Router();

router.get("/", flightController.showCreate);
router.post("/", flightController.create);

module.exports = router;