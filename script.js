
let incidencias = [];

const boton = document.getElementById("agregar");

boton.addEventListener("click", function () {

    const matricula = document.getElementById("matricula").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const clave = document.getElementById("clave").value;
    const fecha = document.getElementById("fecha").value;
    const descripcion = document.getElementById("descripcion").value.trim();

    if (!matricula || !clave || !fecha || !descripcion) {
        alert("Completa todos los campos.");
        return;
    }

    if (incidencias.length >= 3) {
        alert("Esta papeleta ya tiene 3 incidencias. Debes generar otra papeleta.");
        return;
    }

    incidencias.push({
        matricula,
        nombre,
        clave,
        fecha,
        descripcion
    });

    mostrarIncidencias();

    document.getElementById("clave").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("descripcion").value = "";

});

function mostrarIncidencias() {

    const lista = document.getElementById("listaIncidencias");

    lista.innerHTML = "";

    incidencias.forEach((incidencia, index) => {

        const elemento = document.createElement("div");

        elemento.textContent =
            (index + 1) + ". " +
            incidencia.clave + " - " +
            incidencia.fecha + " - " +
            incidencia.descripcion;

        lista.appendChild(elemento);

    });

}
