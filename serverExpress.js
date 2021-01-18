//Levantar un servidor express
//node servidorExpress.js
const express = require('express')
const app = express()

const usuarios = ["eric", "fabiola", "elias", "elena"]
//servidor disponible
app.listen(3000, ()=> {
    console.log('localhost/servidorExpress OK')
})

app.use(express.static('assets'))

app.get("/abracadabra/usuarios", (req, res)=> {
    console.log(JSON.stringify(usuarios))
    res.send(JSON.stringify(usuarios))
})


app.use("/abracadabra/juego/:usuario ", (req, res, next) => {
    if (usuarios.includes(req.params.usuarios)){
        console.log(req.params.usuario)
        next()
    }else{
        res.sendFile(__dirname + "/assets/who.jpeg")
    }
})

app.get("/abracadabra/juego/:usuario", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.use("abracadabra/conejo/:n", (req, res, next) => {
    const numAleatorio = Math.floor(Math.random() * 4) + 1
    const numParam = Number(req.params.n)
    if ( numAleatorio === numParam){
        res.sendFile(__dirname + "/assets/conejito.jpg")
    }else{
        res.sendFile(__dirname + "/assets/voldemort.jpg")
    }
})

// para todo acceso que no tenga una ruta
app.get("*", (req, res)=>{
    res.send("<center><h1>No existe la ruta</h1></center>")
})