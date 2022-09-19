// https://youtu.be/Oe421EPjeBE?t=6122

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    res.write('Welcome to our home page')
    res.end()
})


server.listen(5000);
