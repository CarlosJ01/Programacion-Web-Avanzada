//innerHTML -> Codigo HTML
//textContent -> Texto dentro

/* document.getElementById('lenguajes').innerHTML = ''; */
//Altarar Contenido
document.querySelector('h1').textContent += " mas populares en la web ";
document.querySelector('h1').setAttribute('id','titulo');
document.querySelector('h1').id = 'titulo01';

/*---------------------------------------------------------------------------*/
//Cambiar Clases
var tituloElt = document.querySelector('h1');
tituloElt.classList.remove('titulo');
tituloElt.classList.add('encabezado');
console.log(tituloElt);

/* -------------------------------------------------------------------------- */
//Crear y añadir elementos
var javaElet = document.createElement('li');
javaElet.id = 'java';
javaElet.textContent = 'Java';
document.getElementById('lenguajes').appendChild(javaElet);