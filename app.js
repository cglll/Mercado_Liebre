const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/views/register.html')
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.listen(3001, ()=>{
    console.log('Servidor funcionando');
});

