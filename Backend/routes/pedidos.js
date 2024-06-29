/* Enrutador 
 * Endpoints*/

//1- Importamos el módulo 
const express = require("express");
//2- instanciamos el router express
const router = express.Router();
//3- importamos el modulo propio
const acciones = require("../controllers/acciones");
//4- Declaramos las rutas y métodos, y el llamado específico para cada acción.
// Ruta de listado en general
router.get('/', acciones.getAllSabores);
//Ruta para la consulta de peliculas por id
router.get('/:id', acciones.getSaborID);
//Ruta para crear una pelicula
router.post('/', acciones.createPedido);
//Ruta para actualizar una pelicula
router.put('/:id', acciones.updatePedido);
//Ruta para borrar una pelicula
router.delete('/:id',  acciones.deletePedido);
//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar 'acciones'
