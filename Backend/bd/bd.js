/* El archivo db.js será el que cree el objeto que conecta con la base de datos. 
 * Esa conexión usará el objeto mysql del módulo mysql2
 */

// Importamos módulo SQL
const mysql= require("mysql2");
//Configuramos la  conexion a la base de datos
const connection = mysql.createConnection({
    host: "localhost",
    user: "root", // USER el de Mysql local de sus PCs
    password: "admi123", //PASS el de Mysql local de sus PCs
    port: 3306
});

//CONEXIÓN
connection.connect((err)=>{
    //en caso de error
    if (err){
        console.log("Error de conexión con el servidor" + err);
        return;
    };
    //en caso OK
    console.log("Estado de conexión: CONECTADA")});
    
    //creamos una consulta
    const sqlCreateBD = 'CREATE DATABASE IF NOT EXISTS heladeria_bd';
    //pasamos la consulta  la base de datos
    connection.query(sqlCreateBD, (err,results)=>{
        //en caso de error
        if (err){
            console.log("Error de conexión con el servidor" + err);
            return;
        };
        //en caso de éxito
        console.log("Base de datos: CREADA/EXISTENTE");

        //creacion de las tablas
        connection.changeUser({database:"heladeria_db"}, (err)=>{
            if (err){
                console.log("Error al cambiar a la base de datos heladeria_db:" + err);
                return;
            };
            
        //generamos la consulta para generar las tablas
        const createTableQuery = `
        CREATE TABLE IF NOT EXISTS sabores (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            ingredientes VARCHAR(255) NOT NULL,
        );
        `;
        const createTableQuery2 = `
        CREATE TABLE IF NOT EXISTS pedidos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            tipo VARCHAR(255) NOT NULL,
            isabores VARCHAR(255) NOT NULL,
            pago INT NOT NULL
            retiro VARCHAR(25) NOT NULL
        );
        `;
        //pasamos la consulta
        connection.query(createTableQuery, (err,results)=>{
            //en caso de error 
            if (err) {
                console.error('Error al crear la tabla:', err);
                return;
            };
            //en caso de exito
            console.log ("tabla: CREADA/EXISTENTE");
            
         connection.query(createTableQuery2, (err,results)=>{
                //en caso de error 
                if (err) {
                    console.error('Error al crear la tabla:', err);
                    return;
                };
                //en caso de exito
            console.log ("tabla: CREADA/EXISTENTE");
        });
        });
    });
});

//Exportacion del modulo 
module.exports= connection;
