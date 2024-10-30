import express from 'express'
const app = express() //crea una instancia de express
const PORT = 3000 //configura el puerto en el que el servidor escuchara
//ruta get con multiples parametros
//solicitud http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req,res) =>{
    const {category, id} = req.params
    res.send(`Categoria: ${category}, ID del producto: ${id}`)
})
app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}') //inicia servidor
})