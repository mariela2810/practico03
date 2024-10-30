import express from 'express'
const app = express() //crea una instancia de express
const PORT = 3000 //configura el puerto en el que el servidor escuchara
//ruta GET para recibir datos simples
app.get('/datos', (req,res) =>{
    res.send('datos recibidos') //solicitud http://localhost:3000/data
})
app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}') //inicia servidor
})