
var Hola = "Hola Culero";
var numero = 1;
var concatenacion = Hola + " " + numero;
/* document.write(concatenacion); */
/* document.write(Hola);
document.write(numero); */

/* var datos = document.getElementById("datos");
datos.innerHTML = `
<h1>Hola soy una caja de datos</h1>
<h2> Yo te saludo: ${Hola}</h2>
<h3>Soy el numero: ${numero}</h3>
`;

if(numero >= 0){
    datos.innerHTML += `Eres el numero 1 papasito`
}else{
    datos.innerHTML += `Eres caca papasito` 
}

for(var i = 2000; i<=2021; i++){
    //bloque de instrucciones 
    datos.innerHTML += `<h2> Estamos en el año: `+i;
} */
function MuestraMiSaludo(Hola, numero) {
    var misDatos = `
<h1>Hola soy una caja de datos</h1>
<h2> Yo te saludo: ${Hola}</h2>
<h3>Soy el numero: ${numero}</h3>
`;
return misDatos;
}
function imprimir(){
    var datos = document.getElementById("datos");
datos.innerHTML = MuestraMiSaludo("Hola Marper", 2);
}
imprimir();

var nombres = ['Daniel', 'Emmanuel', 'Angel'];
/* document.write('<h2>Listado de Nombres </h2>');
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
} */

nombres.forEach((nombre) => {
    document.write(nombre + '<br/>')
});