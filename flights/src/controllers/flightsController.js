const { where } = require("sequelize");
const Flight = require("../database/models/Flight");

const controller = {
    showCreate: (req, res) => {
        res.render("createFlight", { title: "Alta de Vuelos" });
    },
    create: async (req, res) => {
        try {
            const { flightNumber, arrival, airline, delayed } = req.body;
            await Flight.create({ flightNumber, arrival, airline, delayed });
            res.redirect("/"); // Redirige a la lista de usuarios después de guardar
          } catch (error) {
            res.status(500).send('Error al crear vuelo:');
          }
    },
    showDelete: async (req, res) => {
        try {
            const onlyFlightsNumber = await Flight.findAll( {attributes: ["flightNumber"]} );
            res.render("deleteFlight", { title: "Baja de Vuelos", onlyFlightsNumber });
        }
        catch (error) {
            console.error('Error buscando los numeros de vuelo:', error);
        }
        
    },
    delete: async (req, res) => {
        const flightNumber = req.body.flightNumber;

        if (!flightNumber) {
            return res.status(400).send('ID del registro no proporcionado.'); //ACA HAY QUE VALIDARLO DE OTRA FORMA
        }

        try {
            // Elimina el registro con el ID especificado
            const result = await Flight.destroy({
                where: { flightNumber: flightNumber }
            });
    
            if (result) {
                res.redirect("/");
            } else {
                res.status(404).send('Registro no encontrado.');
            }
        } catch (error) {
            console.error('Error al eliminar el registro:', error);
            res.status(500).send('Error en la eliminación del registro.');
        }
    },
    showModify: async (req, res) => {
        try {
            const flightSelected = req.body;
            const flight = await Flight.findByPk(flightSelected.selectFlightNumber)
            res.render("modifyFlight", { title: "Modificacion de Vuelo", flight });
        }
        catch (error) {
            console.error('Error al seleccionar vuelo:', error);
        }
    },
    modify: async (req, res) => {
        try {
            const { flightNumber, arrival, airline, delayed } = req.body;
            console.log(req.body)
            await Flight.update(
                { arrival, airline, delayed },
                {where: {flightNumber}});
            res.redirect("/"); // Redirige a la lista de usuarios después de guardar
          } catch (error) {
            res.status(500).send('Error al modificar vuelo:');
          }
    },
    selectFlight: async (req, res) => {
        try {
            const flights = await Flight.findAll( {attributes: ["flightNumber"] });
            res.render("selectFlight", { title: "Modificacion de Vuelo", flights });
        }
        catch (error) {
            console.error('Error buscando los numeros de vuelo:', error);
        }
    }

}

module.exports = controller;