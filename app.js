const express = require('express')
const app = express()
const root = require('./routers/todo.routher.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const PORT = require('config').get('port_server')
const URI=require('config').get('URI')
const db = mongoose.connection



// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/api/", root)

app.listen(PORT, async () => {
    try {
        console.log('Ответ сервера:', 'server is starting',new Date())
        console.log('Ответ сервера:', 'Подключаюсь к базе данных',new Date())
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        db.once('open', ()=>{
            console.log('Ответ базы данных:', 'Подключение успешно',new Date())
        });
        db.on('error',()=>{console.log( 'connection error:')
    });
} catch (error) {
console.log(error)
}})

