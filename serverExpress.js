const express = require('express')
const app = express()

//servidor disponible
app.listen(3000, ()=> {
    console.log('localhost/servidorExpress OK')
})





// para todo acceso que no tenga una ruta
app.get("*", (req, res)=>{
    res.send("<center><h1>No existe la ruta</h1></center>")
})