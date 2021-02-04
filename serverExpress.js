//Levantar un servidor express
//node servidorExpress.js
const express = require('express')
const app = express()

//servidor disponible
app.listen(3000, ()=> {
    console.log('localhost/servidorExpress OK')
})

app.use(express.static('assets'))

const usuarios = ["eric", "fabiola", "elias", "elena"]


app.get("/abracadabra/usuarios", (req, res)=> {
    res.send(usuarios)
})


app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const { usuario } = req.params;
    console.log(req.params)  
    usuario == "eric" || usuario == "fabiola" || usuario == "elias" || usuario == "elena" ?
    next() : res.sendFile(__dirname + "/assets/who.jpeg")
})

app.get("/abracadabra/juego/:usuario", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})



app.get("/abracadabra/conejo/:n", (req, res, next) => {
    const numAleatorio = Math.floor(Math.random() * 4) + 1
    const numParam = Number(req.params.n)
    console.log(numParam)
    if ( numAleatorio === numParam){
        res.sendFile(__dirname + "/assets/conejito.jpeg")
    }else{
        res.sendFile(__dirname + "/assets/voldemort.jpeg")
    }
})

// para todo acceso que no tenga una ruta
app.get("*", (req, res) => {
    res.send(`<center>
    <h1>La ruta no Existe</h1>
    <h2>Para ingresar seleccione uno de los siguientes links</h2>
    <h2><a href="http://localhost:3000/abracadabra/juego/eric">Ingreso Abracadabra como usuario eric</a></h2>
    <h2><a href="http://localhost:3000/abracadabra/juego/elena">Ingreso Abracadabra como usuario elena</a></h2>
    <h2><a href="http://localhost:3000/abracadabra/juego/fabiola">Ingreso Abracadabra como usuario fabiola</a></h2>
    <h2><a href="http://localhost:3000/abracadabra/juego/elias">Ingreso Abracadabra como usuario elias</a></h2>
    <h2><a href="http://localhost:3000/abracadabra/usuarios">revisar los usuarios</a></h2>
    </center>    
    `);
})