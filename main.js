/*function calculadora(){
    let num1 = prompt("mete el primer numero")
    let signo = prompt ()
}*/

/*function mostrarNota() {  

    let nota1 = prompt ('Por favor introduce nota:');
    if (nota1 =="") { alert ('No has introducido edad'); }
    
    switch (true) {
        /*case nota1 <= 4:
            console.log("insuficiente");
            break;
        case nota1 >4 && nota1 <7:
            console.log("Suficiente");
            break;
        case nota1 >6 && nota1 <9:
            console.log("notable");
            break;
        case nota1 >8 && nota1 <=10:
            console.log("sobresaliente")
            break;
        default: 
        console.log("no has puesto nada")
}}
mostrarNota()*/

/*Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.**/

/*function resta(a, b){
    return a-b
}
console.log(resta(2, 3));*/

/*Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’*/

/*function duplicaNumero(numero1){
    if (typeof numero1 != "number") {
        return console.log("Debo ser ejecutada con un número");
      }
    return numero1*2
}
console.log(duplicaNumero("hbnfuf"))*/
  

/*Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'*/

/*let string = "holi"
function caracterInicial (string){
console.log(string)
   if(typeof string != "string"){
    return console.log("debo ser ejecutada como string")

   }else if (string === ""){
    return console.log("no quiero estar vacio pls")
   }
   return string [0];
}
caracterInicial("")*/

/*Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.*/


/*let string = 'string';
 
string = string.slice(0, string.length - 1);
console.log(string);

let string = "STRING"
function ultimoCaracter(string) {
    if (typeof string != "string"){
        return "tengo que ser ejecutada con un string"
    }else if (string ===""){
        return "debo ser ejecutada con string no vacio"
    }
   return string.slice(-1);
}*/
/*console.log(string.slice(-1));*/
/*console.log(ultimoCaracter(7))*/

/*Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'*/


/*let string = "DanielMiguelez"*/

/*function cuentaCaracteres (string){
    if (typeof string != "string"){
        return "debo ser ejecutada con un string"
    }
    return string.length;
}
    console.log(cuentaCaracteres(string));
   console.log(cuentaCaracteres("gjhngjorgibgro"));*/

   /*Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
   Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'*/
   
   /*function espalindromo (daniel) {
    if (typeof daniel != "string" ){
        return "no es un formato correcto"
    }else if(daniel === ""){
        return "no es un formato correcto"
    }
    const danielReversed = daniel.split("").reverse().join("");

    return danielReversed === daniel ? "es palindromo" : "no lo es";
   }
   console.log(espalindromo("hyppppio"));
   console.log(espalindromo(""))
   console.log(espalindromo(8))
   console.log(espalindromo("oso"))*/


/*Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
Si la función no recibe un número debería devolver devolver 'no es un formato correcto'*/

/*function getPrecioMostrar(texto1){
    if(typeof texto1 != "number"){
        return"no es formato correcto"
    }
    return texto1.toFixed(2) && texto1.toLocaleString('es-ES', {style:'currency', currency:'EUR'});
} 
console.log(getPrecioMostrar("hola"));*/


/*Crea la función division que acepte como argumento dos números y devuelva el resultado de su división*/

/*let a = 10
let b = 20

function division (){
    return a/b
}

console.log(division(10, 20))*/



/*Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]*/

/*const Array = [1,2,3,4,5,6,7,8,9,10]
function getArray (){
    return Array.slice(4, 11);
}
console.log(getArray(Array));*/


/*Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.*/

function primo(numero) {
    let question = prompt("mete tu numero");
    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  };
  console.log(primo(7))