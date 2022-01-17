require('dotenv').config();

const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;
// TODO: require('hbs');

//HANDLEBARS
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
//SERVIR CONTENIDO ESTATICO
app.use(express.static('public')); //especificar el path


//RUTAS
app.get('/',  (req, res) =>{
  // res.sendFile(__dirname+'/public/index.html');
  res.render('home',{ //RENDERIZADO DE RUTAS PARA HBS
    titulo:'Curso de Node',
    nombre:'Gonzalo Ovando'
  })
});

app.get('/generic',  (req, res) =>{
  res.render('generic',{titulo:'Curso de Node',nombre:'Gonzalo Ovando'});
});
app.get('/elements',  (req, res) =>{
  res.render('elements',{titulo:'Curso de Node',nombre:'Gonzalo Ovando'});
});

app.get('*',(req,res)=>{
    res.sendFile( __dirname +'/public/404.html');
});


//ESCUCHAR EN EL PUERTO:
app.listen(port,()=>{
    console.log(`El servidor se inicio en: http://localhost:${port}`);
});