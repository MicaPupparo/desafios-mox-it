const flightController = require("../controllers/flightsController");
const express = require('express');
const router = express.Router();

router.get("/", flightController.showDelete);

module.exports = router;