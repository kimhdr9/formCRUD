const express = require('express');
const PORT = process.env.port || 3000 ;
const app = express();
// l'application va écouter sur le port n° PORT

app.listen(PORT,()=>console.log(`le serveur écoute sur le port ${PORT}`));

// register view engine
app.set('view engine','ejs');


app.get('/employee',(req,res)=>{
    res.render('formulaire');
});
// 404 page 
app.use((req,res)=>{
    res.status(404).render('404');
});