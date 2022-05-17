const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const path = require('path');

app.use(express.static('dist'));

app.get('*', (request, response) => {
    response.sendFile(path.resolve('dist', 'index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})