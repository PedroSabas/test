
// Verificar si un numero es par
function numerosPares(number) {
    // El numero es par
    if ( number % 2 == 0 ) {
        //console.log("SI");
        return "SI";
    } else {
        //console.log("NO");
        return "NO";
    }
}


// Verificar si todos los numeros son pares en un array

//let arrayPar = [34, 19, 17, 16, 31, 27, 2];
function numerosParesInArray(arrayPar) {
    let pares = [];
    let impares = [];
    for (let i = 0; i < arrayPar.length; i++) {
        if (arrayPar[i] % 2 == 0) {
            pares.push(arrayPar[i]);
        } else {
            impares.push(arrayPar[i]);
        }
    }
    if ( pares.length > impares.length ) {
        //console.log("SI");
        return "SI";
    } else {
        //console.log("NO");
        return "NO";
    }
}


// Longuitud de un string
function longuitudDeString(string) {
    //console.log(string.length);
    return string.length;
}


// Dado un número retornar el día de la semana, comenzando con domingo
function dayOfTheWeek(number) {
    const array = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    /*if ( number <= 0 || number > array.length ) {
        return console.log("Ingrese del 1 a 7 respectivamente");
    }*/
    //console.log(array[number - 1]);
    return array[number - 1];
}



// Retorna la hora actual
function hr() {
    var fecha = new Date();
    var hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    return hora;
}



// Ordena los numero de un array
//let array = [5, 1, 2, 3, 8, 20];
function sort(array) {
    const l = array.length;
    for (let i = 0; i < l; i++ ) {
        for (let j = 0; j < l - 1 - i; j++ ) {
            if ( array[ j ] > array[ j + 1 ] ) {
                [ array[ j ], array[ j + 1 ] ] = [ array[ j + 1 ], array[ j ] ];
            }
        }
    }
    //console.log(array);
    return array;
}

/*
const result = sort([5, 1, 2, 3, 8, 20]);
console.log(result);
*/


// LowerCase to UpperCase
function letras(palabra) {
    palabra = palabra + "";
    //console.log(palabra.toUpperCase());
    return palabra.toUpperCase();
}
//letras("hola mundo");

module.exports = {
    numerosPares,
    numerosParesInArray,
    longuitudDeString,
    dayOfTheWeek,
    hr,
    sort,
    letras

}
