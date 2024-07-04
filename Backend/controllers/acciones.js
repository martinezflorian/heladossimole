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
    const {name, ingredientes} = req.body; 
    //creamos consulta
    const sql = 'INSERT INTO sabores (name, ingredientes) VALUES (?,?)';
    //enviamos a base de datos
    bd.query(sql, [name,ingredientes], (err,result)=>{
        if(err){throw err}
        res.json({mensaje: "Sabor editado"})
    });
};

//Generamos el método 4- borrarSabor //delete
const borrarSabor =(req,res)=>{
    //destructuración
    const {id} = req.params;
    //consulta sql
    const sql = 'DELETE FROM sabores WHERE id = ?';
    //Pasamos la consulta
    bd.query(sql,[id],(err,result)=>{
        if(err) {throw err}
        res.json({mensaje:"Sabor eliminado"})
    })
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
        res.json({mensaje: "Su sabor/es fue elegido"})
    });
};

//Generamos el métoido 7- cambiarPedido //put
const cambiarPedido = (req,res)=>{
    const {id} =req.params;
    const {tipo, sabores, pago, retiro} =req.body;
    const sql= 'UPDATE pedidos SET tipo=?, sabores=?, pago=?, retiro=? WHERE id=?';
    bd.query(sql, [tipo, sabores, pago, retiro], (err,result)=>{
        if(err) {throw err}
        res.json({mensaje:"Pedido actualizado"})
    });
};

//Generamos el método 8- deletePedido //delete
const deletePedido = (req,res)=>{
    //destructuración
    const {id} = req.params;
    //consulta sql
    const sql = 'DELETE FROM pedidos WHERE id = ?';
    bd.query(sql, [id], (err,result)=>{
        if(err){throw err}
        res.jason({mensaje: "Pedido eliminado"})
    });
};

//Exportamos los módulos
module.exports = {
    getAllSabores,
    editarSabor,
    agregarSabor,
    borrarSabor,
    createPedido,
    elegirSabor,
    cambiarPedido,
    deletePedido 
};

// Pasamos a codificar bd.js
