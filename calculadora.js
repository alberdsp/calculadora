// Declaramos la letante que será la pantalla
const pantalla = document.querySelector('.screen');

// Declaramos la letante que serán los botones 
const botones = document.querySelectorAll('.btn');
// Declaramos la letante que será el borrado C
const botonesC = document.querySelectorAll('.btnc');
// Declaramos la letante que serán los botones de operadores
const botonesO = document.querySelectorAll('.operator');

pantalla.addEventListener('input', function () {
    let input = pantalla.value;

    if (input.length > 12) {


        // mostramos alerta
        alert('limite sobrepasado')
    }
});





// Añadimos el listener para cuando pulsamos C o DEL
botonesC.forEach(botonC => {
    botonC.addEventListener('click', () => {
        // Asignamos el valor
        let valorBotonC = botonC.value;


        // si pulsamos C ponemos a 0 
        if (valorBotonC === 'C') {
            pantalla.value = 0;


        }


        // si pulsamos DEL eliminamos la ultima cifra introducida
        else {

            if (pantalla.value != 0) {
                let numeroString = pantalla.value.toString();

                let nuevoNumeroString = numeroString.slice(0, -1);

                if (nuevoNumeroString.length === 0) {

                    pantalla.value = 0;
                    // mostramos alerta
                    alert('Pantalla ya borrada ')


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
        let valorBotonO = botonO.value;


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
                
                pantalla.value = eval(pantalla.value) / 100;


            }
        }


    })
});


// Añadimos el listener para cuando pulsamos un botón
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Asignamos el valor
        let valorBoton = boton.value;

        // Si la pantalla está en 0 lo eliminamos para que tome valor
        if (pantalla.value === '0') {

            pantalla.value = '';

        }
        // Acción para cuando pulsamos '=' 
        if (valorBoton === '=') {
            try {
                let resultado = eval(pantalla.value); // resultado
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

// mensaje de ayuda

function mensajeAyuda(mimensaje) {
    let mensajeDiv = document.getElementById('mensaje');

    // Crear el mensaje
    let mensajeTexto = mimensaje;
    let mensajeParrafo = document.createElement('p');
    mensajeParrafo.textContent = mensajeTexto;

    // Añadimos el  el mensaje al DOM
    mensajeDiv.appendChild(mensajeParrafo);
    setTimeout(function () {
        mensajeDiv.removeChild(mensajeParrafo);
    }, 5000);


}





