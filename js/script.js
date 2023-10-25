// Array de los cursos
const cursos = [
    {
        id: 0,
        nombre: "Preparación Física infantil",
        duracion: "10 semanas",
        nivel: "Principiante",
        // thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuxTdSCY7mWPGjN_MudBaa5VPHjQ-GH5pqAfJiAA4z49rx4r1m8z13iR0kvHRe2kLR88&usqp=CAU',
        precio: "45usd"
    },
    {
        id: 0,
        nombre: "Preparación Física Adolescentes",
        duracion: "10 semanas",
        nivel: "Intermedio",
        // thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuxTdSCY7mWPGjN_MudBaa5VPHjQ-GH5pqAfJiAA4z49rx4r1m8z13iR0kvHRe2kLR88&usqp=CAU',
        precio: "50usd"
    },
    {
        id: 1,
        nombre: "Entrenamiento Cardiovascular ",
        duracion: "8 semanas",
        nivel: "Intermedio",
        // thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3rNh6cKsHXWfe89x4NpOHnmFrSd6o6q_eI8BjoUpW52a58nbv9HIplX8Dwoe-djUbeg&usqp=CAU',
        precio: "80usd"
    },
    {
        id: 2,
        nombre: "Fuerza para gente adulta",
        duracion: "6 semanas",
        nivel: "Principiante",
        // thumbnail:'https://www.escueladefitness.com/assets/images/cursos/personalTrainerNiver2.jpg',
        precio: "50usd"
    },
    {
        id: 3,
        nombre: "Funcional para gente adulta",
        duracion: "8 semanas",
        nivel: "Principiante",
        // thumbnail:'https://i.ytimg.com/vi/6lCeNlSoonk/hqdefault.jpg',
        precio: "100usd"
    },
    {
        id: 3,
        nombre: "Funcional para gente adulta",
        duracion: "12 semanas",
        nivel: "Intermedio",
        // thumbnail:'https://i.ytimg.com/vi/6lCeNlSoonk/hqdefault.jpg',
        precio: "130usd"
    },
    {
        id: 4,
        nombre: "Preparación Física clasicc",
        duracion: "8 semanas",
        nivel: "Avanzado",
        // thumbnail:'https://www.fisiologiadelejercicio.com/wp-content/uploads/2022/07/7-1024x1024.jpg.webp',
        precio: "200usd"
    },
    {
        id: 5,
        nombre: "Preparación Física 212 lbs",
        duracion: "12 semanas",
        nivel: "Avanzado",
        // thumbnail:'https://www.cienciasdeldeporteysalud.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-05-at-7.58.56-PM.jpeg',
        precio: "100usd"
    },{
        id: 6,
        nombre: "Rutina  de powerlifting",
        duracion: "8 semanas",
        nivel: "Principiante",
        // thumbnail:'https://www.cienciasdeldeporteysalud.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-05-at-7.58.56-PM.jpeg',
        precio: "100usd"
    },{
        id: 7,
        nombre: "Preparacion  de culturismo",
        duracion: "12 semanas",
        nivel: "Avanzado",
        // thumbnail:'https://www.cienciasdeldeporteysalud.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-05-at-7.58.56-PM.jpeg',
        precio: "40usd"
    },{
        id: 8,
        nombre: "Preparacion para Men's Physique",
        duracion: "12 semanas",
        nivel: "Avanzado",
        // thumbnail:'https://www.cienciasdeldeporteysalud.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-05-at-7.58.56-PM.jpeg',
        precio: "90usd"
    },{
        id: 9,
        nombre: "Rutina de hipertrofia muscular",
        duracion: "6 semanas",
        nivel: "Principiante",
        // thumbnail:'https://www.cienciasdeldeporteysalud.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-05-at-7.58.56-PM.jpeg',
        precio: "110usd"
    }
];


//carrito vacio
const carritoCursos = [];

const cursosContainer = document.getElementById('cursos-container');
        const carritoList = document.getElementById('carrito-list');
        const totalElement = document.getElementById('total');
        const nombreInput = document.getElementById('nombreInput');
//JSON y DOM
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
//agregar al carrito
        function agregarAlCarrito(cursoId) {
            const curso = cursos.find(curso => curso.id === cursoId);
            if (curso && !carritoCursos.includes(curso)) {
                carritoCursos.push(curso);
                actualizarCarrito();
            }
        }

        function eliminarDelCarrito(cursoId) {
            const index = carritoCursos.findIndex(curso => curso.id === cursoId);
            if (index !== -1) {
                carritoCursos.splice(index, 1);
                actualizarCarrito();
            }
        }
//actualizacion de carrito
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
            }
        }
//localStorage
        function guardarNombre() {
            const nombre = nombreInput.value;
            if (nombre) {
                localStorage.setItem('nombreUsuario', nombre);
                const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
                mensajeBienvenida.textContent = `¡Hola, ${nombre}! Tu nombre ha sido guardado.`;
            }
        }

        const nombreGuardado = localStorage.getItem('nombreUsuario');
        if (nombreGuardado) {
            const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
            mensajeBienvenida.textContent = `¡Hola de nuevo, ${nombreGuardado}!`;
        }

        mostrarCursos();