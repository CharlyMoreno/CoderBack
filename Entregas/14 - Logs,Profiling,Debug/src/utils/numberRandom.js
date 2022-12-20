function generateRandomNumbers(cant,max) {
    const randomNumbers = new Map();
    
    for (let i = 0; i < cant; i++) {
        const number = Math.floor(Math.random() * max)
        if(!randomNumbers.has(number)){
            randomNumbers.set(number,1)
        }
        else{
            const cantActual = randomNumbers.get(number)
            randomNumbers.set(number, cantActual+1)
        }
    }
    return randomNumbers;
}

process.on('message', (params) => {
    const numbers = generateRandomNumbers(params.cant,params.max);
    let array = Array.from(numbers, ([numero, cant]) => ({ numero, cant }));
    process.send(array);
})