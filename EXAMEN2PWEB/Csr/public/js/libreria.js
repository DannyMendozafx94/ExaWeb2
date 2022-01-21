window.addEventListener('load', function() {
    let htmlGenerado = ``;
    htmlGenerado += `<label for="txtid">ID:</label>`;
    htmlGenerado += `<input type="text" id="txtid">`;
    htmlGenerado += `<label for="txtdetalle">Detalle:</label>`;
    htmlGenerado += `<input type="text" id="txtdetalle">`;
    htmlGenerado += `<label for="txtestudiante">Estudiante:</label>`;
    htmlGenerado += `<input type="text" id="txtestudiante">`;
    htmlGenerado += `<label for="txtfecha">Fecha:</label>`;
    htmlGenerado += `<input type="date" id="txtfecha">`;
    htmlGenerado += `<label for="txtdepartamento">departamento:</label>`;
    htmlGenerado += `<input type="text" id="txtdepartamento">`;
    htmlGenerado += ` <select class="form-select" aria-label="Tipo de tramite"   id="txtNivelUrgencia" for="txtNivelUrgencia">
        <option selected>Nivel de urgencia</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>`
    htmlGenerado += ` <select class="form-select" aria-label="Tipo de tramite"  id="txttipoTramite" for="txttipoTramite">
        <option selected>Tipo de tramite</option>
        <option value="Estudiantil">Estudiantil</option>
        <option value="Docente">Docente</option>
        <option value="Juridico">Juridico</option>
      </select>`;
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
        txtdetalle.value = ``;
        txtestudiante.value = ``;
        txtfecha.value = ``;
        txtdepartamento.value = ``;
        txtNivelUrgencia.value = ``;
        txttipoTramite.value = ``;
    });
    btngrabar.addEventListener('click', function() {
        let url = `http://localhost:3000/MicroservicioTramites2/Tramite`;
        let data = {

            detalle: txtdetalle.value,
            estudiante: txtestudiante.value,
            fecha: txtfecha.value,
            departamento: txtdepartamento.value,
            NivelUrgencia: txtNivelUrgencia.value,
            tipoTramite: txttipoTramite.value
        };
        fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(
                res => res.json()
            )
            .then(res2 => console.log(res2))
            .catch(error => console.log(error));
    });
    btnmodificar.addEventListener('click', function() {
        let url = `http://localhost:3000/MicroservicioTramites2/Tramite/${txtid.value}`;
        let data = {
            detalle: txtdetalle.value,
            estudiante: txtestudiante.value,
            fecha: txtfecha.value,
            departamento: txtdepartamento.value,
            NivelUrgencia: txtNivelUrgencia.value,
            tipoTramite: txttipoTramite.value
        };
        fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(
                res => res.json()
            )
            .then(res2 => console.log(res2))
            .catch(error => console.log(error));
    });
    btnconsultar.addEventListener('click', function() {
        let url = `http://localhost:3000/MicroservicioTramites2/Tramite/`;
        fetch(url).then(resultado => {
                return resultado.json();
            })
            .then(consulta => {
                let tabla = `<table border=1 class="container">`;
                for (const elemento in consulta.tramites) {
                    const actual = consulta.tramites[elemento];
                    tabla += `<tr class="row row-cols-4">`;
                    tabla += `<td class="col"> <button class='actualizar btn btn-warning d-grid gap-2 d-md-block' value='${actual._id}' > ${ actual.detalle  } </button> </td>`;
                    tabla += `<td> <span>Estudiante</span>: ${ actual.estudiante } </td>`;
                    tabla += `<td> <span>Fecha</span>:${ actual.fecha  }</td>`;
                    tabla += `<td> <span>NivelUrgencia</span>:${ actual.NivelUrgencia }</td>`;
                    tabla += `<td> <span>Tipo de Tramite</span>:${ actual.tipoTramite  }</td>`;
                    tabla += `</tr>`;
                }
                tabla += `</table>`;
                divcontenido.innerHTML = tabla;
                document.querySelectorAll('.actualizar').forEach(e => {
                    e.addEventListener('click', () => {
                        let url2 = `http://localhost:3000/MicroservicioTramites2/Tramite/${e.value}`;
                        fetch(url2).then(respuesta => {
                                return respuesta.json();
                            })
                            .then(convertido => {
                                txtid.value = convertido._id;
                                txtdetalle.value = convertido.detalle;
                                txtestudiante.value = convertido.estudiante;
                                txtfecha.value = convertido.fecha;
                                txtdepartamento.value = convertido.departamento;
                                txtNivelUrgencia.value = convertido.NivelUrgencia;
                                txttipoTramite.value = convertido.tipoTramite;
                            });
                    });
                });

            });
    });
    btneliminar.addEventListener('click', function() {
        let url = `http://localhost:3000/MicroservicioTramites2/Tramite/${txtid.value}`
        let data = {
            detalle: txtdetalle.value,
            estudiante: txtestudiante.value,
            fecha: txtfecha.value,
            departamento: txtdepartamento.value,
            NivelUrgencia: txtNivelUrgencia.value,
            tipoTramite: txttipoTramite.value
        };
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