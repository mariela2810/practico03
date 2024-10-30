////////////////////////////////////////////////////////////////////////
/////////////////CONFIGURACION BASICA DEL SERVIDOR//////////////////////
////////////////////////////////////////////////////////////////////////

import express from 'express'
const app = express() //crea una instancia de express
const PORT = 3000 //configura el puerto en el que el servidor escuchara
app.get('/', (req,res) => {
    res.send('¡Hola mundo!') //ruta basica
})
app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}') //inicia servidor
})
