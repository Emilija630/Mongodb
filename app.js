const express = require('express');
const res = require('express/lib/response');
const app = express();

// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })


app.get('/',(rsq,res)=>{
    res.send("Ova e Get metoda")
})

app.post('/',(rsq,res)=>{
    res.send("Ova e Post metoda")
})

app.post('/random',(rsq,res)=>{
    res.send("Ova e Random Post metoda")
})

app.use('/random',(rsq,res,next)=>{
    console.log("Log za send");
    next();
})
app.listen(4000)