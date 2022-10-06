function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Color {
    get(){
        let color = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
        return color;
    }
}

let colorcito = new Color();

console.log(colorcito.get())

