// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  const title = document.getElementById("title_modal")
  title.innerText = `Crear`;
  btn_enviar.onclick = crearDatos
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let tabla = document.getElementById('tabla_prodcutos')
let body = document.querySelector('tbody')

function cargarCabeceras(){
  const tr = document.createElement('tr')
  const th_img = document.createElement('th')
  const th_id = document.createElement('th')
  const th_titulo = document.createElement('th')
  const th_precio = document.createElement('th')
  const th = document.createElement('th')

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
  tr.appendChild(th)
  body.appendChild(tr)
}

function cargarDatos(){
    fetch('http://localhost:8080/api/productos')
    .then((response) => response.json())
    .then((data) => { 
      body.innerHTML = "";  
      cargarCabeceras()
      data.map(x => {
        const tr = document.createElement('tr')
        const td_img = document.createElement('td')
        const td_id = document.createElement('td')
        const td_titulo = document.createElement('td')
        const td_precio = document.createElement('td')
        const td_btn = document.createElement('td')

        td_img.className = 'col_img'
        td_id.className = 'col_id'
        td_titulo.className = 'col_titulo'
        td_precio.className = 'col_producto'

        td_img.innerHTML = `<img src="${x.thumbnail}" alt="" srcset="" class="img_table">`;
        td_id.innerHTML = x.id;
        td_titulo.innerHTML = x.titulo;
        td_precio.innerHTML = x.precio
        td_btn.innerHTML = `<button onclick="botonClick(${x.id})" class="modificar" id_product="${x.id}"><span class="material-symbols-outlined"> auto_fix_normal</span></button ><button onclick="eliminar(${x.id})" class="eliminar" id_product="${x.id}"><span class="material-symbols-outlined">delete</span></button>`
        tr.appendChild(td_img)
        tr.appendChild(td_id)
        tr.appendChild(td_titulo)
        tr.appendChild(td_precio)
        tr.appendChild(td_btn)
        body.appendChild(tr)
    })
    });
}

const btn_enviar = document.getElementById('btn_enviar')
const titulo = document.getElementById('titulo')
const precio = document.getElementById('precio')
const thumbnail = document.getElementById('thumbnail')


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

async function deleteData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
  });
  // return response.json(); // parses JSON response into native JavaScript objects
}

async function crearDatos(){
  const data = {
    "titulo": titulo.value,
    "precio": precio.value,
    "thumbnail": thumbnail.value,
  }
  await postData('http://localhost:8080/api/productos',data)
  alert('Creado Correctamente')
  cargarDatos();
  span.onclick();
}

function modificar(){
  alert('modfiicas')
}

function botonClick(id){
  const title = document.getElementById("title_modal")
  title.innerText = `Modificar - Id: ${id}`;
  titulo.value = "1"
  precio.value = "2"
  thumbnail.value = "3"
  btn_enviar.onclick = modificar
  btn.onclick()
}

async function eliminar(id){
  await deleteData('http://localhost:8080/api/productos/id')
  alert(`Borrado correctamente - Id: ${id}`)
  cargarDatos();
}


cargarDatos();