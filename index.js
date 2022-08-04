//const express = require('express') //require extrae las dependencias
import express from 'express'
//crear la app
const app=express();
//Routing
app.get('/', )



//definir un puerto y arrancar un proyectos
const port=3000;
app.listen(port, ()=>{
    console.log(`El servidor esta conectado en el puerto ${port}`);
});