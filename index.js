const express= require('express');
const app= express();


app.get('',(req,res)=>{
    res.send('<h1>consultas de clientes</h1>');
});

app.get('/usuario',(req,res)=>{
    res.send({
        id:12,
        name:'juan',
        mail:'juanfb19@gmail.com'
    });
});

app.get('/formularios',(req,res)=>{
    res.send('  PAGINA DE FORMULARIOS');
});


app.listen(3000,()=>{
    console.log('el servidor esta funcionando');
});

