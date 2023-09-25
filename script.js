let savedEdad = 18;

alert('Hola, necesitas mas de 17 años para poder ingresar.')
for (let i = 0; i < 3; i++) {
    let userEdad = prompt('Hola, ingresá tu edad por favor.');
    if (userEdad >= savedEdad) {
        alert('Genial, tenés '+userEdad+ ' años, podés ingresar.');
        let nombre = prompt('Bienvenido, ingresa tu nombre.');
        alert('Bienvenido/a, ' + nombre + ' a nuestra página.');
    let opcion = prompt ('¿Querés empezar a entrenar con nosotros ' + nombre + '? \n1 - Si \n2 - No');
    switch(opcion){
    case'1':
    alert('Excelente, manos a la obra!');
    break;
    case'2':
    alert('Elegiste No, Adios.');
    break;
    default:
    alert('opcion invalida.');
    break;
    }
    break;
    }else {
        alert('Error, tenés que tener 18 años o más')
    }
}




