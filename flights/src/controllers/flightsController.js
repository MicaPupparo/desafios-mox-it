const controller = {
    showCreate: (req, res) => {
        res.render("createFlight", { title: "Alta de Vuelos" });
    },
    showDelete: (req, res) => {
        res.render("deleteFlight", { title: "Baja de Vuelos" });
    },
    showModify: (req, res) => {
        res.render("modifyFlight", { title: "Modificar Vuelos" });
    }
}

module.exports = controller;