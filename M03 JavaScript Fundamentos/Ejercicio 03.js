/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if(x === y) {
      return true;
   } else {
      return false;
   }
}

// Ejemplo de uso:(GPT)
var resultado = sonIguales(5, 5);
console.log(resultado); // Esto imprimirá "true" en la consola

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if(str1.length === str2.length) {
      return true;
   } else {
      return false;
   }
}

 // Ejemplo de uso:(GPT)
 var resultado = tienenMismaLongitud("hola", "adios");
 console.log(resultado); // Esto imprimirá "true" en la consola

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
      return true;
   } else {
      return false;
   }
}

// ejemplo:(GPT)
var resultado = menosQueNoventa(85);
console.log(resultado); // el resultado sera "true" 

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) {
      return true;
   } else {
      return false;
   }
}

// Ejemplo de uso:(GPT)
var resultado = mayorQueCincuenta(60);
console.log(resultado); // Esto imprimirá "true" en la consola

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 === 0) {
      return true;
   } else {
      return false;
   }
}

// Ejemplo de uso:(GPT)
var resultado = esPar(4);
console.log(resultado); // Esto imprimirá "true" en la consola

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 !== 0) {
      return true;
   } else {
      return false;
   }
}

// Ejemplo de uso:(GPT)
var resultado = esImpar(5);
console.log(resultado); // Esto imprimirá "true" en la consola

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
