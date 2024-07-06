/* Punto principal de acceso al servidor */

//1- importamos express
const express = require("express");

//2- instanciamos express
const app = express();
//3- importamos módulo router/pedidos
const pedidos = require("../routes/pedidos");
//4- declaramos el puerto
const PORT = 3000;
//5- usamos el middleware de json
app.use(express.json());
//6- prefijo principal de rutas y subrutas
app.use("/pedido", pedidos);

//7- iniciamos servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto: ${PORT}`);
});

//8- continúa en 'routes/pedidos'...
