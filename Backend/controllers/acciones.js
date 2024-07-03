/* En este archivo tenemos que codificar los métodos
 * 1 -.getAllSabores /get // acceso admi y usuarios
 * 2- .editarSabor /put // si por ej, no era solo chocolate sino choco con almendras /acceso solo admi
 * 3 -.agregarSabor /post //acceso solo admi
 * 4- .borrarSabor /delete //acceso solo admi
 * 5- .createPedido /post //acceso usuarios
 * 6- .elegirSabor /get //acceso usuarios 
 * 7- .cambiarPedido /put //acceso usuarios y admi
 * 8- .deletePedido /delete //acceso usuarios y admi
 */

//Importamos el módulo db.js
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos. 
const db = require("../bd/bd.js");

// Generamos el método 1 getAllSabores //get
const getAllSabores = (req,res)=>{
    const sql = 'SELECT * FROM sabores';
    //enviamos consulta a la base de datos
    bd.query(sql,(err,result)=>{
        if(err){throw err}
        res.json(result)
    });
};

//Generamos el método 2- editarSabor //put
const editarSabor =(req,res)=>{
    const {id}=req.params; 
    const {name,ingredientes}= req.body;
    //creamos consulta sql 
    const sql ='UPDATE sabores SET name=?, ingredientes=? WHERE id =?';
    //enviar consulta a base de datos
    bd.query(sql, [name,ingredientes], (err,result)=>{
        if (err){throw err}
        res.json({mensaje:"Sabor agregado al menú"})
    });
};


//Generamos el método 3- agregarSabor //post
const agregarSabor = (req,res)=>{
    //desestructuramos request
    const {name, ingredientes} = req.body 
    //creamos consulta
    const sql = 'INSERT INTO sabores (name, ingredientes) VALUES (?,?)';
    //enviamos a base de datos
    bd.query(sql, [name,ingredientes], (err,result)=>{
        if(err){throw err}
        res.json(result)
    });
};

//Gerenamos el método 5- createPedido //post
const createPedido = (req,res)=>{
    //desestructuramos req
    const {tipo, sabores, pago, retiro} =req.body;
    //creamos consulta
    const sql = 'INSERT INTO pedidos (tipo, sabores, pago, retiro) VALUES (?,?,?,?)';
    //enviamos a base de datos
    bd.query(sql, [tipo, sabores, pago, retiro], (err,result)=>{
        if(err){throw err}
        res.json(result) 
    });
};

// Generamos el método 6- elegirSabor //get
const elegirSabor =(req,res)=>{
    //desestucturación del id
    const {id} =req.params;
    //creamos la consulta
    const sql = 'SELECT * FROM sabores WHERE id = ?';
    //enviamos a base de datos
    bd.query(sql, [id], (err,result)=>{
        if(err) {throw err};
        res.json(result)
    });
};

//Generamos el métoido 7- cambiarPedido //put

//5- .updateMovie
//const updateMovie = (req,res)=>{
    //desestructuracion de la cosnulta
    //const {id} = req.params;
    //const {title,director,year} = req.body;
    //creamos la consulta sql 
    //const sql = 'UPDATE movies SET title = ?, director = ?, year = ? WHERE id = ?';
    //enviar la consulta a la base de datos
    //db.query(sql, [title,director,year,id], (err, result)=>{
        //si sucede algun error
        //if(err){throw err}
        //si todo sale bien
        //res.json({mensaje:"Película actualizada"})
    //});
//};
