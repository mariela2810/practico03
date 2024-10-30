import express from 'express'
const app = express()
const PORT = 3000
//ruta get con multiples parametros de consulta
//solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req,res) =>{
    const {type, minPrice, maxPrice} = req.query
    res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`)
})
app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}') //inicia servidor
})
