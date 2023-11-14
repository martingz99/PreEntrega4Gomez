const cursos = [
    {
        id: 0,
        nombre: "Preparación Física infantil",
        duracion: "10 semanas",
        nivel: "Principiante",
        url: "", 
        precio: "45usd"
    },
    {
        id: 1,
        nombre: "Entrenamiento Cardiovascular ",
        duracion: "8 semanas",
        nivel: "Intermedio",
        precio: "80usd"
    },
    {
        id: 2,
        nombre: "Fuerza para gente adulta",
        duracion: "6 semanas",
        nivel: "Principiante",
        precio: "50usd"
    },
    {
        id: 3,
        nombre: "Funcional para gente adulta",
        duracion: "8 semanas",
        nivel: "Principiante",
        precio: "100usd"
    },
    {
        id: 4,
        nombre: "Preparación Física clasicc",
        duracion: "8 semanas",
        nivel: "Avanzado",
        precio: "200usd"
    },
    {
        id: 5,
        nombre: "Preparación Física 212 lbs",
        duracion: "12 semanas",
        nivel: "Avanzado",
        precio: "100usd"
    },{
        id: 6,
        nombre: "Rutina  de powerlifting",
        duracion: "8 semanas",
        nivel: "Principiante",
        precio: "100usd"
    },{
        id: 7,
        nombre: "Preparacion  de culturismo",
        duracion: "12 semanas",
        nivel: "Avanzado",
        precio: "40usd"
    },{
        id: 8,
        nombre: "Preparacion para Men's Physique",
        duracion: "12 semanas",
        nivel: "Avanzado",
        precio: "90usd"
    },{
        id: 9,
        nombre: "Rutina de hipertrofia muscular",
        duracion: "6 semanas",
        nivel: "Principiante",
        precio: "110usd"
    },
    {
        id: 10,
        nombre: "Funcional para gente adulta",
        duracion: "12 semanas",
        nivel: "Intermedio",
        precio: "130usd"
    },
    {
        id: 11,
        nombre: "Preparación Física Adolescentes",
        duracion: "10 semanas",
        nivel: "Intermedio",
        precio: "50usd"
    },
];

const carritoCursos = [];
const cursosCompradosKey = 'cursosComprados';

// Agregar un evento para buscar cursos cuando se presione una tecla en el campo de búsqueda
document.getElementById('busquedaInput').addEventListener('keyup', buscarCursosPorNombre);

function buscarCursosPorNombre() {
    const busquedaInput = document.getElementById('busquedaInput');
    const criterioBusqueda = busquedaInput.value.toLowerCase();
    
    // Hacer una solicitud Fetch al archivo JSON local
    fetch('js/cursos.json') // Reemplaza 'ruta/al/archivo/json.json' con la ruta correcta de tu archivo JSON
        .then(response => response.json())
        .then(data => {
            // Filtrar los cursos según el criterio de búsqueda
            const cursosFiltrados = data.filter(curso => curso.nombre.toLowerCase().includes(criterioBusqueda));
            
            // Mostrar los cursos filtrados en la interfaz
            mostrarCursosFiltrados(cursosFiltrados);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

function mostrarCursosFiltrados(cursos) {
    const cursosContainer = document.getElementById('cursos-container');
    cursosContainer.innerHTML = ''; // Limpiar el contenedor de cursos antes de mostrar los nuevos cursos filtrados
    
    cursos.forEach(curso => {
        const cursoCard = document.createElement('div');
        cursoCard.classList.add('card');
        cursoCard.innerHTML = `
            <h2>${curso.nombre}</h2>
            <p>Precio: ${curso.precio}</p>
            <p class="description">${curso.nivel}</p>
            <p class="description">${curso.duracion}</p>
            <button onclick="agregarAlCarrito(${curso.id})">Añadir al carrito</button>
        `;
        cursosContainer.appendChild(cursoCard);
    });
}

const cursosContainer = document.getElementById('cursos-container');
const carritoList = document.getElementById('carrito-list');
const totalElement = document.getElementById('total');
const nombreInput = document.getElementById('nombreInput');

function buscarCursos() {
    const busquedaInput = document.getElementById('busquedaInput');
    const criterioBusqueda = busquedaInput.value.toLowerCase();

    const cursosFiltrados = cursos.filter(curso => curso.nombre.toLowerCase().includes(criterioBusqueda));

    cursosContainer.innerHTML = '';
    cursosFiltrados.forEach(curso => {
        const cursoCard = document.createElement('div');
        cursoCard.classList.add('card');
        cursoCard.innerHTML = `
            <h2>${curso.nombre}</h2>
            <p>Precio: ${curso.precio}</p>
            <p class="description">${curso.nivel}</p>
            <p class="description">${curso.duracion}</p>
            <button onclick="agregarAlCarrito(${curso.id})">Añadir al carrito</button>
        `;
        cursosContainer.appendChild(cursoCard);
    });
}

function mostrarCursos() {
    cursosContainer.innerHTML = '';
    cursos.forEach(curso => {
        const cursoCard = document.createElement('div');
        cursoCard.classList.add('card');
        cursoCard.innerHTML = `
            <h2>${curso.nombre}</h2>
            <p>Precio: ${curso.precio}</p>
            <p class="description">${curso.nivel}</p>
            <p class="description">${curso.duracion}</p>
            <button onclick="agregarAlCarrito(${curso.id})">Añadir al carrito</button>
        `;
        cursosContainer.appendChild(cursoCard);
    });

    const mostrarCursosCompradosButton = document.querySelector('button#mostrar-cursos-comprados');
    mostrarCursosCompradosButton.addEventListener('click', mostrarCursosComprados);
}


function obtenerDetallesExternos(cursoId) {
    const curso = cursos.find(curso => curso.id === cursoId);

    if (curso) {
        const detallesElement = document.getElementById('detalles-curso');

        detallesElement.innerHTML = `
            <h3>${curso.nombre}</h3>
            <p><strong>Duración:</strong> ${curso.duracion}</p>
            <p><strong>Nivel:</strong> ${curso.nivel}</p>
            <p><strong>Precio:</strong> ${curso.precio}</p>
            <!-- Puedes agregar más detalles según sea necesario -->
        `;

        detallesElement.style.display = 'block';
    } else {
        mostrarNotificacion("Curso no encontrado.");
    }
}

function mostrarDetallesCurso(detalles) {
    
    const detallesElement = document.getElementById('detalles-curso');

    detallesElement.innerHTML = `
        <p><strong>Días del curso:</strong> ${detalles.dias}</p>
        <!-- Puedes agregar más detalles según sea necesario -->
    `;

    
    detallesElement.style.display = 'block';
}

function agregarAlCarrito(cursoId) {
    const curso = cursos.find(curso => curso.id === cursoId);
    if (curso && !carritoCursos.includes(curso)) {
        carritoCursos.push(curso);
        actualizarCarrito();
        mostrarNotificacion("¡Curso agregado al carrito!");
    }
}

function mostrarNotificacion(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        backgroundColor: "#6B6ECC"
    }).showToast();
}

function eliminarDelCarrito(cursoId) {
    const index = carritoCursos.findIndex(curso => curso.id === cursoId);
    if (index !== -1) {
        carritoCursos.splice(index, 1);
        actualizarCarrito();
        mostrarNotificacion("¡Curso eliminado del carrito!");
    }
}

function mostrarNotificacion(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        backgroundColor: "#6B6ECC"
    }).showToast();
}

function actualizarCarrito() {
    carritoList.innerHTML = '';
    let total = 0;
    carritoCursos.forEach(curso => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${curso.nombre} - ${curso.precio}
            <button onclick="eliminarDelCarrito(${curso.id})">Eliminar</button>
        `;
        carritoList.appendChild(listItem);
        total += parseFloat(curso.precio);
    });
    totalElement.textContent = `${total} usd`;

    // Guardar en localStorage los cursos comprados
    localStorage.setItem(cursosCompradosKey, JSON.stringify(carritoCursos));
}

function mostrarCursosComprados() {
    const cursosCompradosContainer = document.getElementById('cursos-comprados');
    cursosCompradosContainer.innerHTML = '';

    if (carritoCursos.length === 0) {
        cursosCompradosContainer.innerHTML = 'No has comprado cursos todavía.';
    } else {
        const listaCursosComprados = document.createElement('ul');
        let total = 0;

        carritoCursos.forEach(curso => {
            const listItem = document.createElement('li');
            listItem.textContent = `${curso.nombre} - ${curso.precio}`;
            listaCursosComprados.appendChild(listItem);
            total += parseFloat(curso.precio);
        });

        const totalElement = document.createElement('p');
        totalElement.textContent = `Total a pagar: ${total} usd`;
        cursosCompradosContainer.appendChild(listaCursosComprados);
        cursosCompradosContainer.appendChild(totalElement);

        mostrarNotificacion("¡Mostrando cursos comprados!");

        // Generar notificación con la información de los cursos comprados
        const cursosCompradosNotificacion = carritoCursos.map(curso => `${curso.nombre} - ${curso.precio}`).join('\n');
        Toastify({
            text: `Cursos Comprados:\n${cursosCompradosNotificacion}\nTotal a pagar: ${total} usd`,
            duration: 4000,
            gravity: "top",
            backgroundColor: "#6B6ECC"
        }).showToast();

        centrarCursosComprados();
    }
}

function mostrarNotificacion(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        backgroundColor: "#6B6ECC"
    }).showToast();
}




function guardarNombre() {
    const nombre = nombreInput.value;
    if (nombre) {
        localStorage.setItem('nombreUsuario', nombre);
        const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
        mensajeBienvenida.textContent = `¡Hola, ${nombre}! Tu nombre ha sido guardado.`;

        mostrarNotificacion(`¡Hola de nuevo, ${nombre}! Tu nombre ha sido guardado.`, 3000);
    }
}

function mostrarNotificacion(mensaje, duracion = 3000) {
    Toastify({
        text: mensaje,
        duration: duracion,
        gravity: "top",
        backgroundColor: "#6B6ECC"
    }).showToast();
}

function cargarCursosDesdeLocalStorage() {
    const cursosCompradosGuardados = localStorage.getItem(cursosCompradosKey);
    if (cursosCompradosGuardados) {
        carritoCursos.push(...JSON.parse(cursosCompradosGuardados));
        actualizarCarrito();
    }
}

const nombreGuardado = localStorage.getItem('nombreUsuario');
if (nombreGuardado) {
    const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
    mensajeBienvenida.textContent = `¡Hola de nuevo, ${nombreGuardado}!`;

    mostrarNotificacion(`¡Hola de nuevo, ${nombreGuardado}!`, 3000);
}

mostrarCursos();
cargarCursosDesdeLocalStorage();

