const controller = {
    index: (req, res) => {
        res.render("home", { title: "Pagina de Inicio", message: "holaaa" });
    }
}

module.exports = controller;