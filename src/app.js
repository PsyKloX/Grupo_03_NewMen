const express = require('express');
const app = express();
const path= require('path')

app.use(express.static(path.resolve(__dirname, '../public')));


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




// app.get('/', (req, res) => {
//   res.send('Servidor en funcionamiento');
//  });

  app.listen(4545, () =>{
    console.log('Servidor 4545 funcionando')
});