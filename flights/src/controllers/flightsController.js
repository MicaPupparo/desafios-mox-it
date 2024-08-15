const { where } = require("sequelize"); //chequear
const Flight = require("../database/models/Flight");

const controller = {
    showCreate: (req, res) => {
        res.render("formFlight", { title: "Alta de Vuelos", name: "Alta", button: "Crear" });
    },
    create: async (req, res) => {
        try {
            const { flightNumber, arrival, airline, delayed } = req.body;
            await Flight.create({ flightNumber, arrival, airline, delayed });
            res.redirect("/"); 
          } catch (error) {
            console.error("Error al crear el vuelo:", error);
            res.status(500).send("Error en la creacion del vuelo.");
          }
    },
    showDelete: async (req, res) => {
        try {
            const onlyFlightsNumber = await Flight.findAll( {attributes: ["flightNumber"]} );
            res.render("selectFlight", { title: "Baja de Vuelos", name: "Baja", button: "Eliminar", onlyFlightsNumber });
        }
        catch (error) {
            console.error("Error buscando los numeros de vuelo:", error);
        }
        
    },
    delete: async (req, res) => {
        const flightNumber = req.body.flightNumber;

        if (!flightNumber) {
            return res.status(400).send('ID del registro no proporcionado.'); //ACA HAY QUE VALIDARLO DE OTRA FORMA
        }

        try {
            const result = await Flight.destroy({
                where: { flightNumber: flightNumber }
            });
    
            if (result) {
                res.redirect("/");
            } else {
                res.status(404).send("Vuelo no encontrado.");
            }
        } catch (error) {
            console.error("Error al eliminar el vuelo:", error);
            res.status(500).send("Error en la eliminación del vuelo.");
        }
    },
    showModify: async (req, res) => {
        try {
            const flightSelected = req.params.flightNumber;
            const flight = await Flight.findOne( { where: { flightNumber: flightSelected }});
            res.render("formFlight", { title: "Modificacion de Vuelo", name: "Modificación", button: "Modificar", flight });
        }
        catch (error) {
            console.error('Error al seleccionar vuelo:', error);
        }
    },
    modify: async (req, res) => {
        try {
            const { previousFlightNumber, flightNumber, arrival, airline, delayed } = req.body;
            await Flight.update(
                { flightNumber, arrival, airline, delayed },
                {where: {flightNumber: previousFlightNumber}});
            res.redirect("/"); 
          } catch (error) {
            console.error("Error al modificar el vuelo:", error);
            res.status(500).send("Error en la modificacion del vuelo.");
          }
    },
    selectFlight: async (req, res) => {
        try {
            const onlyFlightsNumber = await Flight.findAll( {attributes: ["flightNumber"] });
            res.render("selectFlight", { title: "Modificacion de Vuelo", name: "Selecciona un vuelo", button: "Enviar", onlyFlightsNumber });
        }
        catch (error) {
            console.error('Error buscando los numeros de vuelo:', error);
        }
    },
    sendSelectedFlight: async (req, res) => {
        try {
            const flightSelected = req.body.flightNumber;
            res.redirect(`/modify/${flightSelected}`);
        } 
        catch (error) {
            console.error('Error mostrando el vuelo seleccionado:', error);
        }
    }
}

module.exports = controller;