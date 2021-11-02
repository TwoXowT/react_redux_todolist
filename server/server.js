const express = require("express");
const config = require('config')
const mongoose = require('mongoose')

const app = express();

const PORT = config.get('port') || 5000

async function start(){
    try{
        await mongoose.connect(config.get('mongoURI'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT,()=>console.log("working"))

    }catch(e){
        console.log('Error', e.message)
        process.exit(1)
    }
}
start()
