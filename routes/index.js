const express = require("express");
const router = express.Router();
const controlador = require("../controllers/controlador");


router.get("/",controlador.iniciarSesion);//Muestra el iniciar sesion pero no autentica
router.get("/listarPedidosCliente/:id", controlador.listarPedidos);//Funciona
router.get("/detalles/:id", controlador.detalles);//Funciona
router.get("/editar/:id", controlador.editar);//Funciona
router.post("/guardarPedido", controlador.guardarPedido);//Funciona
router.post("/autenticar", controlador.autenticar);//Funciona



module.exports=router;
