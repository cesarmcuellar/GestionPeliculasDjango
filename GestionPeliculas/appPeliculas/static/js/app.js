/**
 * Función que verifica si el usuario
 * quiere eliminar una pelicula de acuerdo con
 * su id.
 * @param {*} id 
 */
function eliminarPelicula(id) {
    Swal.fire({
        title: "¿Está usted seguro de querer eliminar la Pelicula",
        showDenyButton: true,
        confirmButtonText: "SI",
        denyButtonText: "NO"
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = "/eliminarPelicula/" + id
        }
    });
}

