const http = require('http');
let today = new Date();

const server = http.createServer((req,res)=>{
    let message = ""
    if(today.getHours() >= 6 && today.getHours() <= 12) message = "Buenos dias!";
    else if(today.getHours() >= 13 && today.getHours() <= 19) message = "Buenas Tardes!"
    else if(today.getHours() >= 20 || today.getHours() <= 5) message = "Buenas noches!"

    res.end(message);
});

const connectServer = server.listen(8080,()=>{
    console.log('Listening on port 8080');
});