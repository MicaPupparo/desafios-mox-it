const Flights = require("../database/models/Flight");

const controller = {
    index: async (req, res) => {
        const flights = await Flights.findAll();
        res.render("home", { title: "Vuelos", flights}); 
    }
}

module.exports = controller