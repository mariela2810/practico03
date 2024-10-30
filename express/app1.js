////////////////////////////////////////////////////////////////////////
////////////////////EJEMPLOS DE RUTEO EN EXPRESS////////////////////////
////////////////////////////////////////////////////////////////////////
import express from 'express'
const app = express() //crea una instancia de express
const PORT = 3000 //configura el puerto en el que el servidor escuchara
//Ruta GET para el home
app.get('/', (req,res) =>{
    res.send('Pagina de inicio') //solicitud http://localhost:3000/
})
app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}') //inicia servidor
})

