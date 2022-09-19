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

let tabla = document.getElementById('tabla_prodcutos')
let body = document.querySelector('tbody')

function cargarDatos(){
    fetch('http://localhost:8080/api/productos')
    .then((response) => response.json())
    .then((data) => { data.map(x => {
        const tr = document.createElement('tr')
        const td_img = document.createElement('tr')
        const td_id = document.createElement('td')
        const td_titulo = document.createElement('td')
        const td_precio = document.createElement('td')
        const td_btn = document.createElement('td')

        td_img.className = 'col_img'
        td_id.className = 'col_id'
        td_titulo.className = 'col_titulo'
        td_precio.className = 'col_producto'

        td_img.innerHTML = '<img src="logo_coder.png" alt="" srcset="" class="img_table">';
        td_id.innerHTML = x.id;
        td_titulo.innerHTML = x.titulo;
        td_precio.innerHTML = x.precio
        td_btn.innerHTML = `<button class="modificar"><span class="material-symbols-outlined"> auto_fix_normal</span></button ><button class="eliminar"><span class="material-symbols-outlined">delete</span></button>`
        tr.appendChild(td_img)
        tr.appendChild(td_id)
        tr.appendChild(td_titulo)
        tr.appendChild(td_precio)
        tr.appendChild(td_btn)
        body.appendChild(tr)
    })
    });
}

cargarDatos();