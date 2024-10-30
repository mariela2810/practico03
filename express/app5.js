import express from 'express'
const app = express()
const PORT = 3000
//ruta get con parametro de consulta
//solicitud http://localhost:3000/search?q=javascript
app.get('/search', (req, res) =>{
    const query = req.query.q
    res.send(`Resultados de busqueda para: ${query}`)
})
app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}') //inicia servidor
})