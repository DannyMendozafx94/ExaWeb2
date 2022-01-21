window.addEventListener('load', function() {
    let htmlGenerado = ``;
    htmlGenerado += `<label for="txtid">ID:</label>`;
    htmlGenerado += `<input type="text" id="txtid">`;
    htmlGenerado += `<label for="txtnombre">Nombres:</label>`;
    htmlGenerado += `<input type="text" id="txtnombre">`;
    htmlGenerado += `<label for="txtapellido">Apellidos:</label>`;
    htmlGenerado += `<input type="text" id="txtapellido">`;
    htmlGenerado += `<label for="txtcurso">Curso Asignado:</label>`;
    htmlGenerado += `<input type="text" id="txtcurso">`;
    htmlGenerado += `<label for="txtedad">Edad:</label>`;
    htmlGenerado += `<input type="text" id="txtedad">`;
    htmlGenerado += `<br>`;
    htmlGenerado += `<br>`;
    htmlGenerado += `<br>`;
    htmlGenerado += `<button id="btnnuevo" class="btn btn-primary">nuevo</button>`;
    htmlGenerado += `<button id="btngrabar" class="btn btn-success">grabar</button>`;
    htmlGenerado += `<button id="btnmodificar" class="btn btn-warning">modificar</button>`;
    htmlGenerado += `<button id="btnconsultar" class="btn btn-info">consultar</button>`;
    htmlGenerado += `<button id="btneliminar" class="btn btn-danger">eliminar</button>`;
    htmlGenerado += `<br>`;
    htmlGenerado += `<br>`;
    /*htmlGenerado += `<select class="btn btn-outline-dark">
    <option selected>Seleccione el tipo de usuario</option>
    <option value="1">Administrador</option>
    <option value="2">Invitado</option>
    <option value="3">Gestiòn</option>
  </select>`;*/
    htmlGenerado += `<br>`;
    htmlGenerado += `<br>`;
    htmlGenerado += `<div id="divcontenido"></div>`;
    htmlCuerpo.innerHTML = htmlGenerado;

    btnnuevo.addEventListener('click', function() {
        txtid.value = ``;
        txtnombre.value = ``;
        txtapellido.value = ``;
        txtcurso.value = ``;
        txtedad.value = ``;
    });
    btngrabar.addEventListener('click', function() {
        let url = `http://localhost:3000/v1/pruebas/api/sistemas`;
        let data = {
            nombre: txtnombre.value,
            apellido: txtapellido.value,
            curso: txtcurso.value,
            edad: txtedad.value,
        };
        fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': "application/json"
                }
            })
            .then(
                res => res.json()
            )
            .then(res2 => console.log(res2))
            .catch(error => console.log(error));
    });
    btnmodificar.addEventListener('click', function() {
        let url = `http://localhost:3000/v1/pruebas/api/sistemas/${txtid.value}`;
        let data = {
            nombre: txtnombre.value,
            apellido: txtapellido.value,
            curso: txtcurso.value,
            edad: txtedad.value,
        };
        fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': "application/json"
                }
            })
            .then(
                res => res.json()
            )
            .then(res2 => console.log(res2))
            .catch(error => console.log(error));
    });
    btnconsultar.addEventListener('click', function() {
        let url = `http://localhost:3000/v1/pruebas/api/sistemas`;
        fetch(url).then(resultado => {
                return resultado.json();
            })
            .then(consulta => {
                let tabla = `<table border=1 class="container">`;
                for (const elemento in consulta.sistemas) {
                    const actual = consulta.sistemas[elemento];
                    tabla += `<tr class="row row-cols-4">`;
                    tabla += `<td class="col"> <button class='actualizar btn btn-warning d-grid gap-2 d-md-block' value='${actual._id}' > ${ actual.nombre  } </button> </td>`;
                    tabla += `<td> <span>Apellidos</span>: ${ actual.apellido  } </td>`;
                    tabla += `<td> <span>Curso</span>:${ actual.curso  }</td>`;
                    tabla += `<td><span>Edad</span>:${ actual.edad  }</td>`;
                    tabla += `</tr>`;
                }
                tabla += `</table>`;
                divcontenido.innerHTML = tabla;
                document.querySelectorAll('.actualizar').forEach(e => {
                    e.addEventListener('click', () => {
                        let url2 = `http://localhost:3000/v1/pruebas/api/sistemas/${e.value}`;
                        fetch(url2).then(respuesta => {
                                return respuesta.json();
                            })
                            .then(convertido => {
                                txtid.value = convertido._id;
                                txtnombre.value = convertido.nombre;
                                txtapellido.value = convertido.apellido;
                                txtcurso.value = convertido.curso;
                                txtedad.value = convertido.edad;
                            });
                    });
                });

            });
    });
    btneliminar.addEventListener('click', function() {
        let url = `http://localhost:3000/v1/pruebas/api/sistemas/${txtid.value}`;
        fetch(url, {
                method: 'DELETE',
            })
            .then(
                res => res.json()
            )
            .then(res2 => console.log(res2))
            .catch(error => console.log(error));
    });
});