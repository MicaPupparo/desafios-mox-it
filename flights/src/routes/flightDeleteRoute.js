const flightController = require("../controllers/flightsController");
const express = require('express');
const router = express.Router();

router.get("/", flightController.showDelete);
router.post("/", flightController.delete);

module.exports = router;