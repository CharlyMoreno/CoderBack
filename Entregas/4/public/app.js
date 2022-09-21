// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
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

// Get the modal
var modal_mod = document.getElementById("myModal_mod");

// Get the <span> element that closes the modal
var span_mod = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span_mod.onclick = function() {
  modal_mod.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_mod) {
    modal_mod.style.display = "none";
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
btn_enviar.onclick = crearDatos
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

// Example POST method implementation:
async function putData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
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

const btn_modificar = document.getElementById('btn_modificar');
const titulo_mod = document.getElementById('titulo_mod')
const precio_mod = document.getElementById('precio_mod')
const thumbnail_mod = document.getElementById('thumbnail_mod')

function botonClick(id){
  fetch(`http://localhost:8080/api/productos/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const title = document.getElementById("title_modal_mod")
      title.innerHTML = `MODIFICAR - Id: # <span id="id_product">${id}</span>`;
      titulo_mod.value = data.titulo
      precio_mod.value = data.precio
      thumbnail_mod.value = data.thumbnail
      modal_mod.style.display = "block";
     })

}

btn_modificar.onclick = async () => {
  const id = document.getElementById('id_product').textContent
  const data = {
    "titulo": titulo_mod.value,
    "precio": precio_mod.value,
    "thumbnail": thumbnail_mod.value,
  }
  await putData(`http://localhost:8080/api/productos/${id}`,data)
  alert('Modificado Correctamente')
  cargarDatos();
  span_mod.onclick();
}

async function eliminar(id){
  await deleteData(`http://localhost:8080/api/productos/${id}`)
  alert(`Borrado correctamente - Id: ${id}`)
  cargarDatos();
}



cargarDatos();