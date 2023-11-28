const express = require('express');
const app = express();
const path= require('path')

app.use(express.static(path.resolve(__dirname, '../public')));

/*
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
 });

 app.get('/carrito.html', (req,res)=>{
  res.sendFile(path.join(__dirname, '/views/carrito.html'));
});

app.get('/detallesproducto.html', (req,res)=>{
  res.sendFile(path.join(__dirname, '/views/detallesproducto.html'));
});

app.get('/login.html', (req,res)=>{
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/registro.html', (req,res)=>{
  res.sendFile(path.join(__dirname, '/views/registro.html'));
});
*/




//requiero las rutas 
const index = require('./routes/index');

const carrito = require('./routes/carrito');

const detalles = require('./routes/detalles');

const login = require('./routes/login');

const registro = require('./routes/registro');

// seteo para saber donde estan las vistas
app.set('views', path.resolve(__dirname, './views'));

//consumo el llamado a mis rutas
app.use('/', index);

app.use('/carrito', carrito);

app.use('/detallesproducto', detalles);

app.use('/login', login);

app.use('/registro', registro);



// seteo para que el programa sepa que estoy usando ejs
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.send('Servidor en funcionamiento');
//  });

  app.listen(4545, () =>{
    console.log('Servidor 4545 funcionando')
});