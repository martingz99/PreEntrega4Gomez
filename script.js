let savedEdad = 18;

alert('Hola, necesitas más de 17 años para poder ingresar.');

function pass() {
    let ingresar = false;

    while (true) {
        let userEdad = prompt('Hola, por favor ingresa tu edad');
        if (userEdad >= savedEdad) {
            alert('Genial, tienes ' + userEdad + ' años, puedes ingresar.');
            ingresar = true;
            break;
        } else {
            alert('Tu edad es ' + userEdad + ', no puedes ingresar, vuelve a intentarlo');
        }
    }
    return ingresar;
}

if (pass()) {
    let nombre = prompt('Bienvenido, ingresa tu nombre.');
    alert('Bienvenido/a, ' + nombre + ' a nuestra página.');
    let cursos = [ //pienso agregar mas cursos
        {
            nombre: "Preparación Física Avanzada",
            duracion: "10 semanas",
            nivel: "Avanzado",
            precio: 15000
        },
        {
            nombre: "Entrenamiento Cardiovascular",
            duracion: "8 semanas",
            nivel: "Intermedio",
            precio: 8000
        },
        {
            nombre: "Pesas para Principiantes",
            duracion: "6 semanas",
            nivel: "Principiante",
            precio: 10000
        }
    ];

    let carritoDeCompras = []; //array donde se van a guardar los cursos elegidos por el usuario

    function mostrarCarrito() {
        let carritoInfo = 'Cursos en tu carrito:\n';
        carritoDeCompras.forEach((curso, index) => {
            carritoInfo += `${index + 1}. ${curso.nombre} - Precio: ${curso.precio} Pesos\n`;
        });
        return carritoInfo;
    }

    let cursosInfo = 'Cursos Disponibles:\n';
    for (let i = 0; i < cursos.length; i++) {
        cursosInfo += `${i + 1}. ${cursos[i].nombre} - Duración: ${cursos[i].duracion} - Nivel: ${cursos[i].nivel} - Precio: ${cursos[i].precio} Pesos\n`;
    }
    alert(cursosInfo);
    let cantidadCursos = parseInt(prompt('¿Cuántos cursos quieres comprar?'));

    if (isNaN(cantidadCursos) || cantidadCursos <= 0) {
        alert('Por favor, ingresa un número válido y mayor a cero.');
    } else {
        let i = 0;

        while (i < cantidadCursos) {
            let seleccionCurso = parseInt(prompt('Elegí el/los cursos donde quieres participar:'));

            if (seleccionCurso >= 1 && seleccionCurso <= cursos.length) {
                carritoDeCompras.push(cursos[seleccionCurso - 1]);
                i++;
            } else {
                alert('Selección no válida.');
            }
        }

        let precioTotal = carritoDeCompras.reduce((total, curso) => total + curso.precio, 0);

        alert(`Has añadido los siguientes cursos a tu carrito:\n${mostrarCarrito()}\nEl precio total de tus cursos es: ${precioTotal} Pesos. ¡Gracias por tu compra!`);

        let eliminarCurso = prompt('¿Quieres eliminar algún curso del carrito? (Sí/No)').toLowerCase();
        if (eliminarCurso === 'si') {
            let cursoEliminar = parseInt(prompt('Elige el número del curso que quieres eliminar del carrito:'));
            if (cursoEliminar >= 1 && cursoEliminar <= carritoDeCompras.length) {
                const cursoEliminado = carritoDeCompras.splice(cursoEliminar - 1, 1)[0];
                precioTotal = carritoDeCompras.reduce((total, curso) => total + curso.precio, 0);
                
                // Mostrar cursos restantes en caso de eliminar alguno
                if (carritoDeCompras.length > 0) {
                    alert(`Curso eliminado: ${cursoEliminado.nombre}\nCursos restantes:\n${mostrarCarrito()}\nEl precio total de tus cursos es: ${precioTotal} Pesos.`);
                } else {
                    alert(`Curso eliminado: ${cursoEliminado.nombre}\nNo hay más cursos en el carrito.`);
                }
            } else {
                alert('Selección no válida.');
            }
        }
    }
} else {
    alert('No cumpliste con el requisito mínimo, adiós.');
}
alert('Hasta luego!');