const express = require('express');
const path = require('path');
const app= express();
const PORT = process.env.PORT || 8000;
app.use(express.static('public'));//which folder to watch for staticfiles
app.use(express.json());
const connectDB=require('./config/db');
connectDB();

//template engine
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
//routes initialization

app.use('/api/files',require('./routes/files'))
app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'))


app.listen(PORT, ()=>{
    console.log(`listening to the port on ${PORT}`);
})

