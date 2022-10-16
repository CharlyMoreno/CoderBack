const socket = io();

let tabla = document.getElementById('tabla_prodcutos')
let body = document.querySelector('tbody')

function cargarCabeceras(){
    const tr = document.createElement('tr')
    const th_img = document.createElement('th')
    const th_id = document.createElement('th')
    const th_titulo = document.createElement('th')
    const th_precio = document.createElement('th')
    
    tr.className = "table_header"
    th_img.className = 'col_img'
    th_id.className = 'col_id'
    th_titulo.className = 'col_titulo'
    th_precio.className = 'col_producto'
    
    th_img.innerHTML = 'Imagen'
    th_id.innerHTML = 'Id'
    th_titulo.innerHTML = 'Titulo'
    th_precio.innerHTML = 'Precio'
    
    tr.appendChild(th_img)
    tr.appendChild(th_id)
    tr.appendChild(th_titulo)
    tr.appendChild(th_precio)
    body.appendChild(tr)
}

function cargarDatosTabla(data){
    body.innerHTML = "";  
    cargarCabeceras()
    data.map(x => {
        const tr = document.createElement('tr')
        const td_img = document.createElement('td')
        const td_id = document.createElement('td')
        const td_titulo = document.createElement('td')
        const td_precio = document.createElement('td')
        
        td_img.className = 'col_img'
        td_id.className = 'col_id'
        td_titulo.className = 'col_titulo'
        td_precio.className = 'col_producto'
        
        td_img.innerHTML = `<img src="${x.thumbnail}" alt="" srcset="" class="img_table">`;
        td_id.innerHTML = x.id;
        td_titulo.innerHTML = x.titulo;
        td_precio.innerHTML = x.precio
        tr.appendChild(td_img)
        tr.appendChild(td_id)
        tr.appendChild(td_titulo)
        tr.appendChild(td_precio)
        body.appendChild(tr)
    })
}

function addProduct(e) {
    const producto = {
        titulo: document.getElementById('titulo').value,
        precio: document.getElementById('precio').value,
        thumbnail: document.getElementById('thumbnail').value
    };
    socket.emit('new-product', producto);
    return false;
}
   
function addMensaje(e) {
    const fechaActual = new Date();
    const mensaje = {
        author: document.getElementById('username').value,
        mensaje: document.getElementById('mensaje').value,
        fecha: Date()
    };
    const mensaje_input = document.getElementById('mensaje');
    mensaje_input.focus();
    mensaje_input.value = ""
    socket.emit('new-message', mensaje);
    return false;
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
        
        spanMensaje.innerText = x.mensaje;
        spanName.innerText = x.author + ": ";
        const fecha = new Date(x.fecha);
        spanFecha.innerText = `[${fecha.toLocaleString()}]`;
        p.appendChild(spanName);
        p.appendChild(spanMensaje);
        p.appendChild(spanFecha);
        chat_box.appendChild(p);
    })
}

socket.on('dataProducts', (data) => { 
    cargarDatosTabla(data[0]) 
})
socket.on('dataMessages', (data) => {
    cargarDatosMensajes(data[0])
})