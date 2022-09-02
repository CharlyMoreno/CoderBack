const fs = require('fs')

//SINCRONICO
try{
    const data = fs.readFileSync('./data.txt','utf8')
    console.log(data)
}
catch(error) {
    console.log(error)
}


//ASINCRONICO
console.log('1')
fs.readFile('./data.txt','utf-8',(err,data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
console.log('2')
