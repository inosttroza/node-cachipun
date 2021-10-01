const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const app = express();
const { eleccionServer } = require('cachipun-ino');
//console.log(eleccionServer());

// Settings
app.set('port', process.env.PORT || 5000);

// indico ruta y cual es mi motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Static files
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.get('/', function (req, res) {
    return res.render('main.ejs', { title: "Cachipun | Inostroza" });
});
app.get('/contacto', function (req, res) {
    return res.render('contacto.ejs', { title: "Cachipun | Inostroza" });
});
app.get('/eleccionServer', function (req, res) {    
    try {
        (async function () {
            let serverEleccion = eleccionServer();
            //console.log(serverEleccion)
            return res.status(200).json({ ok: true, mensaje: serverEleccion});
        })()
    } catch (error) {
        return res.status(409).json({ ok: false, mensaje: Error });
    }
});

//rutas inexistente
app.get("*", function (req, res) {
    res.status(200).send("Ruta no existe!")
});

module.exports = app;