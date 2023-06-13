// Declaramos la constante que será la pantalla
const pantalla = document.querySelector('.screen');

// Declaramos la constante que serán los botones 
const botones = document.querySelectorAll('.btn');
// Declaramos la constante que será el borrado C
const botonesC = document.querySelectorAll('.btnc');
// Declaramos la constante que serán los botones de operadores
const botonesO = document.querySelectorAll('.operator');


// Añadimos el listener para cuando pulsamos C
botonesC.forEach(botonC => {
    botonC.addEventListener('click', () => {
        // Asignamos el valor
        const valorBotonC = botonC.value;



        if (valorBotonC === 'C') {
            pantalla.value = 0;
        }


        // si pulsamos DEL eliminamos la ultima cifra introducida
        else {

            if (pantalla.value != 0) {
                const numeroString = pantalla.value.toString();
                console.log(numeroString)
                const nuevoNumeroString = numeroString.slice(0, -1);

                if (nuevoNumeroString.length === 0) {

                    pantalla.value = 0;

                } else {

                    pantalla.value = parseFloat(nuevoNumeroString);

                }


            }

        }



    })
});




// Añadimos el listener para los operadores
botonesO.forEach(botonO => {
    botonO.addEventListener('click', () => {
        // Asignamos el operador
        const valorBotonO = botonO.value;


        if (valorBotonO === '+') {
            pantalla.value += valorBotonO

        }
        else if (valorBotonO === '-') {
            pantalla.value += valorBotonO

        }

        else if (valorBotonO === '*') {
            pantalla.value += valorBotonO

        }

        else if (valorBotonO === '/') {
            pantalla.value += valorBotonO

        }

        else if (valorBotonO === '√') {
            pantalla.value = Math.sqrt(pantalla.value)

        }
        // pasamos parametro del mensaje de ayuda
        else if (valorBotonO === '%') {

            
               if (pantalla.value === '0')
            mensajeAyuda('Pulsa el número sobre el que quieres calcular, después la tecla * y el segundo número, finalmente el %');
           
           
            else {
                mostrarMensaje();
                pantalla.value = eval(pantalla.value)/100;
              

            }
        }


    })
});


// Añadimos el listener para cuando pulsamos un botón
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Asignamos el valor
        const valorBoton = boton.value;

        // Si la pantalla está en 0 lo eliminamos para que tome valor
        if (pantalla.value === '0') {

            pantalla.value = '';

        }
        // Acción para cuando pulsamos '=' 
        if (valorBoton === '=') {
            try {
                const resultado = eval(pantalla.value); // resultado
                pantalla.value = resultado;
            } catch (error) {
                pantalla.value = 'Error';
            }
        }
        // Acción para cuando pulsamos '.'
        else if (valorBoton === '.') {
            // Evitamos agregar más de un punto decimal
            if (!pantalla.value.includes('.')) {
                pantalla.value += valorBoton;
            }
        }
        // Añadimos el valor a la pantalla
        else {
            pantalla.value += valorBoton;
        }
    });
});


function mensajeAyuda( mimensaje) {
    const mensajeDiv = document.getElementById('mensaje');
  
    // Crear el mensaje
    const mensajeTexto = mimensaje;
    const mensajeParrafo = document.createElement('p');
    mensajeParrafo.textContent = mensajeTexto;
  
    // Añadimos el  el mensaje al DOM
    mensajeDiv.appendChild(mensajeParrafo);
    setTimeout(function() {
        mensajeDiv.removeChild(mensajeParrafo);
      }, 5000);
  }
  


 
