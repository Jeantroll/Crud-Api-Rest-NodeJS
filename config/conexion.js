const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apirest_db'
});

conexion.connect( (err) => {
    if(err){
        console.log('Error DB: ', err);
        return err;
    }
    console.log('Conexion establecida')
});

module.exports= conexion;