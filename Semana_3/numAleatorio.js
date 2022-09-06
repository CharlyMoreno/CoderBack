let mapNumbers = new Map();

for(let i = 0; i <= 10000; i++){
    let num = Math.ceil(Math.random() * 20)

    if(mapNumbers.has(num)){
        let cantVeces = mapNumbers.get(num) + 1;
        mapNumbers.set(num, cantVeces);
    }
    else{
        mapNumbers.set(num, 1);
    }
}

console.log(mapNumbers)

