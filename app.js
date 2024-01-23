//query selector es para seleccionar elementos de html, aqui selecciono el elementyo h1
// lo asigno a la variable titulo


/*---------------------- USAMOS LA FUNCIÓN asignarTextoElemento PARA ESTE PROCESO
let parrafo = document.querySelector('p');

parrafo.innerHTML = "Indica un número del 1 al 10";
*/


//ejecutamos la funcion asignandola a la variable numeroSecreto
let numeroSecreto = 0;

//declarar variable de contador
let intentos = 0;

//lista para guardar numero que ya se hayan sorteado
let listaNumerosSorteados = [];

let numeroMaximo = 10;



//USANDO LAS FUCIONES



//encerrar todo en una función
//esta función recibe parametros para poder mostsrarlos
function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento); 

    //llamo la variable y con inner le doy texto con html
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//importante value ya que me trae el valor de ese elemtno
    //console.log(numeroDeUsuario === numeroSecreto); //comparando los valores === sirve para comparar tipo de dato y valor que se iingresa
    
    console.log(intentos);
    
    if(numeroDeUsuario === numeroSecreto){
        //reusamos una función
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //usamos operador ternario para evaluar
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();//ejecutar función
    }
    return;
}


//función para limpiar caja de texto
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

//crear numero aleatorio
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //estamos retornando el numero directamente
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        // si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();//si el numero existe se llama a la misma función y generar otro numero
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

//mensajes iniciales
function condicionesIniciales(){
    //ejecutamos la función
    asignarTextoElemento('h1', 'Juego del número secreto!!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


//función para reinciar juego
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo numeros    
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}


//llamamos la función completa de mensajes inciales
condicionesIniciales();



