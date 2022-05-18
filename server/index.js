//BoilerPlate Code

const express = require('express');
const path = require('path');

const app = express();



//MiddleWare
app.use(express.static(path.join(__dirname, '../client')))


//Endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../client/index.html'))
})


//Port Information
const port = process.env.PORT|| 4000;

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})