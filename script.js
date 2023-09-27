let savedEdad = "18";
alert('Hola, necesitas mas de 18 años para poder ingresar.')
function pass() {
    let ingresar = false;
    for (let i = 3; i > 0; i--) {
        let userEdad = prompt('Hola por favor ingresá tu edad');
        if (userEdad >= savedEdad) {
            alert('Genial, tenés '+userEdad+ ' años, podés ingresar.');
            ingresar = true;
            break;
        } else {
            alert('Tu edad es ' +userEdad+ ' no podes ingresar, volve a intentarlo');
        }
    }
    return ingresar;
}

if (pass()) {
    let nombre = prompt('Bienvenido, ingresa tu nombre.');
        alert('Bienvenido/a, ' + nombre + ' a nuestra página.');
    let opcion = prompt ('¿Querés empezar a entrenar con nosotros ' + nombre + '? \n1 - Si \n2 - No');
    switch(opcion){
    case'1':
    alert('Excelente, manos a la obra!');
    //luego de esta opción irian los cursos de preparacion fisica.
    break;
    case'2':
    alert('Elegiste No, Adios.');
    break;
    default:
    alert('opcion invalida.');
    break;
    }
    }else {
    alert('No cumpliste con el requisito minimo, adios.');
}

alert('Hasta luego!.');
