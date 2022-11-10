function cargarMensajes(){
    fetch('http://localhost:8080/api/mensajes/normalize')
    .then((response) => response.json())
    .then((data) => {
        const dataDesnormalizada = desnormalizar(data)
        cargarDatosMensajes(dataDesnormalizada)
        cargarCompresion()
    })
}

function cargarCompresion(){
    fetch('http://localhost:8080/api/mensajes/compresion')
    .then((response) => response.json())
    .then((data) => {
        const porcentaje = document.getElementById('porcentaje')
        porcentaje.innerText = `${data.porcentaje}%`
    })
}


function desnormalizar(data){
    let dataDesnormalizada = []
    for(let idMensajes of data.entities.mensajes[1].messages){
        let objeto = data.entities.message[idMensajes]
        objeto.author = data.entities.author[objeto.author]
        dataDesnormalizada.push(objeto)
    }
    return dataDesnormalizada
}

async function addMensaje(e) {
    const fechaActual = new Date();
    const mensaje = {
        author: {
            email:document.getElementById('email').value,
            nombre:document.getElementById('nombre').value,
            apellido:document.getElementById('apellido').value,
            edad:document.getElementById('edad').value,
            alias:document.getElementById('alias').value,
            avatar:document.getElementById('avatar').value
        },
        text: document.getElementById('text').value,
        fecha: Date()
    };
    const mensaje_input = document.getElementById('text');
    mensaje_input.focus();
    mensaje_input.value = "";
    await postData('http://localhost:8080/api/mensajes',mensaje)
    cargarMensajes()
    return false;
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    // return response.json(); // parses JSON response into native JavaScript objects
}


function cargarDatosMensajes(data) {
    const chat_box = document.getElementsByClassName('chat_box')[0];
    chat_box.innerHTML = "";
    data.map(x => {
        const p = document.createElement('p');
        const spanMensaje = document.createElement('span');
        const spanName = document.createElement('span');
        const spanFecha = document.createElement('span');

        p.className = 'chat_row'
        spanMensaje.className = 'span_mensaje';
        spanFecha.className = 'span_fecha';
        spanName.className = 'span_name';
        
        spanMensaje.innerText = x.text;
        spanName.innerText = `${x.author.alias} :`;
        const fecha = new Date(x.fecha);
        spanFecha.innerText = `[${fecha.toLocaleString()}]`;
        p.appendChild(spanName);
        p.appendChild(spanMensaje);
        p.appendChild(spanFecha);
        chat_box.appendChild(p);
    })
}

cargarMensajes();