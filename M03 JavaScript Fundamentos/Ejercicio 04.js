/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   //var resultado = num * num;(GPT)
   //return resultado;(GPT)
   // return num ** 2;
   return Math.pow(num, 2)
}

// Ejemplo de uso:(GPT)
var resultado = elevarAlCuadrado(4);
console.log(resultado); // Esto imprimirá "16" en la consola

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   // var resultado = num * num * num;
   //return resultado;
   return num ** 3;  
}

// Ejemplo de uso:(GPT)
var resultado = elevarAlCubo(3);
console.log(resultado); // Esto imprimirá "27" en la consola

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   //var resultado = num ** exponent;
   //return resultado; (GPT)
   return Math.pow(num, exponent);
}

console.log(elevar(15,6))
// Ejemplo de uso: (GPT)
//var resultado = elevar(2, 3);
//console.log(resultado); // Esto imprimirá "8" en la consola

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   var redondeo = Math.round(num) // 0.49
   return redondeo;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random()
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
