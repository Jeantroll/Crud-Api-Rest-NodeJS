const express = require('express')
const cors = require('cors');
const db = require('./config/conexion');


const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use(cors());

app.get('/productos',(req,res)=>{
    db.query('SELECT * FROM frutas', (err, data)=>{
        if(err){
            return err;
        }
        res.json({
            mensaje: 'Resultado',
            data
        })

    })

});
app.post('/productos', (req,res)=>{
    console.log(Object.values(req.body))
    const values = Object.values(req.body);
    const sql = "INSERT INTO frutas (Nombre, Color, Precio) VALUES(?,?,?)"
    db.query(sql, values, (err,data)=>{
        if(err){
            console.log(err);
            return err;
        }
        res.json({
            mensaje: "Producto agragado", 
            data
        })
    })

    
})

app.post('/eliminar', (req,res)=>{
    console.log(Object.values(req.body))
    const values = Object.values(req.body);
    const sql = "DELETE FROM frutas WHERE id= ? "
    db.query(sql, values, (err,data)=>{
        if(err){
            console.log(err);
            return err;
        }
        res.json({
            mensaje: "Producto eliminado", 
            data
        })
    })

    
})

app.listen(PORT, ()=>{
    console.log("servidor en ejecución en el puerto: "+ PORT);
});