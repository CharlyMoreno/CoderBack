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

function cargarDatos(){
    fetch('http://localhost:8080/api/productos/7')
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
    });
}

cargarDatos();

