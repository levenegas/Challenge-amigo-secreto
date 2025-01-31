//--->Definición de variables
let listaAmigos = [];
let indicesRandom = 0;
let indicesUsados = [];
let nombre = "";
let friendList = document.getElementById('listaAmigos')//Busca en INDEX.HTLM un elemento con el ID "listaAmigos" y lo guarda en la variable friendList
let resultadoList = document.getElementById('resultado');//Busca en INDEX.HTLM un elemento con el ID "resultado" y lo guarda en la variable resultadoList.
//<---

//--->// Coloca automáticamente el cursor en el input con el ID "amigo". cuando la página termine de cargarse.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("amigo").focus();
});//<---

//--->Funcion para agregar amigos asociada al texbox y boton que debe limpiar patalla al agregar cada amigo
function agregarAmigo(){
    let input = document.getElementById("amigo");//Obtener el texto ingresado en el campo con ID "amigo", le elimina los espacios al inicio y al final
        nombre = input.value.trim(); //Guarda en la variable "nombre" la salida de la linea #18.
        if (nombre === "" || /\d/.test(nombre)) {
            const notification = document.getElementById("notification");
            notification.innerText = "No se permiten nombres en blanco, espacios vacios o números, favor reintentar";
            notification.style.display = "block";
                            
            setTimeout(() => {// Ocultar la notificación después de 2 segundos
                notification.style.display = "none";
            }, 2000);

            input.value = ""; // Limpiar el campo de entrada
            return;
        }

    listaAmigos.push(nombre);// Agrega el nombre digitado por el usuario almacenado en la variable "nombre" a nuestro array

    input.value = ""; // Borra el texto dentro del campo de entrada guardado en la variable input

    document.getElementById("amigo").focus(); // Coloca automáticamente el cursor en el input con el ID "amigo". 
    friendList.innerHTML = ""; // Borra todo el contenido dentro del elemento con el ID "listaAmigos".

    listaAmigos.forEach(amigo => { //Recorre cada elemento del array listaAmigos y lo asigna temporalmente a la variable amigo.
            const li = document.createElement('li');// Crea un nuevo elemento <li> (elemento de lista) en la página.
            li.textContent = amigo; //Asigna el nombre del amigo como texto dentro del elemento <li>.
            friendList.appendChild(li); //Agrega el elemento <li> dentro del elemento con ID "listaAmigos" en la página.
        });
} //<---

//--->Funcion asociada al sorteo de los amigos
function sorteoAmigos () {
    friendList.innerHTML = "";

    if (indicesUsados.length === listaAmigos.length) {
            const notification = document.getElementById("notification");
            notification.innerText = "No hay más nombres disponibles, favor recargar la lista de nombres";
            notification.style.display = "block";

            setTimeout(() => {// Ocultar la notificación después de 3 segundos
                notification.style.display = "none";
            }, 3000);

            listaAmigos = []; //Retable el array "listaAmigos" en estado vacio.
            resultadoList.innerHTML = '';
            return null;
    }
        // Condicional para generar un índice aleatorio que no haya sido usado
        do {
            indicesRandom = Math.floor(Math.random() * listaAmigos.length); //Generamos un # de pocisión entero aleatorio por almacenar en "indicesRandom"
        } while (indicesUsados.includes(indicesRandom)); //Verifica si el número generado ya está en la lista "indicesUsados"; Si el índice ya fue utilizado, el bucle se repite hasta encontrar un número nuevo.
            
        indicesUsados.push(indicesRandom);// Agregar el índice al registro de usados

        resultadoList.innerHTML = '';
        resultadoList.textContent = `Tu amigo secreto es: ${listaAmigos[indicesRandom]}`;
}//<---


