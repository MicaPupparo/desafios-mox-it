const flightController = require("../controllers/flightsController");
const express = require("express");
const router = express.Router();

router.get("/", flightController.showModify);
router.post("/", flightController.modify);

module.exports = router;