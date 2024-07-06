/* Enrutador
 * Endpoints*/

//1- Importamos el módulo
const express = require("express");
//2- instanciamos el router express
const router = express.Router();
//3- importamos el modulo propio
const acciones = require("../controllers/acciones");
//4- Declaramos las rutas y métodos, y el llamado específico para cada acción.
// Ruta de listado en general de sabores
router.get("/sabores", acciones.getAllSabores);
//Ruta para la consulta de sabor
router.put("/sabores/:id", acciones.editarSabor); //
//Ruta para editar el menú de sabores disponibles
router.post("/sabores", acciones.agregarSabor);
//Ruta para quitar sabores del menú
router.delete("/sabores/:id", acciones.borrarSabor);
//Ruta para crear un pedido
router.post("/pedidos", acciones.createPedido);
//Ruta para elegir sabores según el pedido
router.get("/pedidos", acciones.elegirPedido);
//Ruta para cambiar pedido
router.put("/pedidos/:id", acciones.cambiarPedido);
//Ruta para borrar pedido
router.delete("/pedidos/:id", acciones.deletePedido);
//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar 'acciones'
