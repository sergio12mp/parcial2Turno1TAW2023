var initModels = require("../data/init-models");
const sequelize = require("sequelize");
var models = initModels(sequelize);

const controller = {};

// Iniciar Sesion /////////////////////////////////////////////////////////////////////////////////////////////////////

controller.iniciarSesion = async function (req, res, next) {
    try {
        res.render("iniciarSesion");
    } catch (error) {
        res.send("Se ha producido un error " + error);
    }
};

//Autenticas
controller.autenticar = async function (req, res, next) {
    try {
        const datos = await models.customers.findOne({
            where: {
                Email: req.body.Email,
                City: req.body.City
            }
        });
        if (datos) {
            res.redirect('/listarPedidosCliente/' + datos.CustomerId);
        } else {
            res.render("iniciarSesion", {caca: req.body.Email});
        }
    } catch (error) {
        res.send("Se ha producido un error " + error);
    }
}


// Listar clientes /////////////////////////////////////////////////////////////////////////////////////////////////////
controller.listarPedidos = async function (req, res, next) {
    try {
        const datos = await models.invoices.findAll({
            where: {
                CustomerId: req.params.id
            }
        });

        //res.json(data);
        res.render("listarPedidosCliente", {datos: datos});
    } catch
        (error) {
        res.send("Se ha producido un error " + error);
    }
};
// Detalles /////////////////////////////////////////////////////////////////////////////////////////////////////

controller.detalles = async function (req, res, next) {
    try {
        const datos = await models.invoice_items.findAll({
            where: {
                InvoiceId: req.params.id
            }
        });

        res.json(datos);
        //res.render("listarPedidosCliente", {datos: datos});
    } catch
        (error) {
        res.send("Se ha producido un error " + error);
    }
};
//Editar /////////////////////////////////////////////////////////////////////////////////////////////////////

controller.editar = async function (req, res, next) {
    try {
        const datos = await models.invoices.findOne({
            where: {
                InvoiceId: req.params.id
            }
        });
        //res.json(datos);
        res.render("editar", {datos: datos});
    } catch
        (error) {
        res.send("Se ha producido un error " + error);
    }
}


controller.guardarPedido = async function (req, res, next) {
    try {
        let value
        if (typeof req.body.InvoiceId != "undefined") {
            const datos = await models.invoices.findOne({
                where: {
                    InvoiceId: req.body.InvoiceId
                }
            });

            if (datos) {
                await datos.update(
                    {
                        CustomerId: req.body.CustomerId,
                        InvoiceDate: req.body.InvoiceDate,
                        BillingPostalCode: req.body.BillingPostalCode,
                        BillingAddress: req.body.BillingAddress,
                        BillingCity: req.body.BillingCity,
                        BillingState: req.body.BillingState,
                        Total: req.body.Total

                    }
                );
            }
            value = req.body.CustomerId;

        }
        res.redirect('/listarPedidosCliente/' + value);

    } catch (error) {
        res.send("Se ha producido un error " + error);
    }
};


module.exports = controller;