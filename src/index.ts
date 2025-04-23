// Suma de dos números
//Crea dos variables a y b, asígnales valores numéricos y muestra la suma.
let a: number = 5;
let b: number = 10;

console.log(a + b);


// Edad mínima
// Crea una variable edad, luego usa una condicional para imprimir si alguien es mayor de edad (>= 18).
let age: number = 18

if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a kid');
}


// Par o impar
// Escribe una función isPar(numero: number): boolean que devuelva true si el número es par.
function isPar(number: number){
    let result = number % 2
    if (result !=0){
        return "Es impar";
    } else {
        return "Es par";
    }
}
console.log(isPar(10));


// Iterar un array
// Dado un array de números, imprime cada número en la consola con un for...of.
let listNumers = [10, 45, 2, 90, 100]
for (let i = 0; i < listNumers.length; i++) {
    console.log(listNumers[i]);
}


// Contar elementos mayores a 10
// Dado un array de números, cuenta cuántos son mayores que 10.
let listNumers2 = [10, 45, 2, 90, 100]
let counter:number = 0
for (let i = 0; i < listNumers.length; i++) {
    if (listNumers2[i] > 10){
        counter += 1
    }
}
console.log('counter', counter);


// Revertir un array
// Escribe una función que reciba un array de números y devuelva un nuevo array invertido.
function reverseArray(arr:number[]){
    return arr.reverse()
}
console.log(reverseArray([10, 20, 30, 40]));


// Sumar elementos del array
// Crea una función que reciba un array de números y devuelva la suma total.
function sumArray(arr:number[]) {
    const total = arr.reduce((total, num) => {
        return total + num;
    }, 0);
   return total;
}
console.log(sumArray([4,1]));


// Buscar un elemento
// Escribe una función searchElement(arr: string[], element: string): boolean 
// que diga si existe un elemento dentro del array.
function searchElement(arr: string[], element: string) {
    const result = arr.indexOf(element)
    if (result) {
        return true
    }
    return false
}
console.log(searchElement(["Manzana", "Pera", "Limon"], "Manzana"));


// Contar ocurrencias
// Dado un array de strings, cuenta cuántas veces aparece una palabra específica.
function countRepeats(arr: string[], word: string){
    return 'FAIL'
}

let arrString: string[] = ["Juan", "Pedro", "Maria", "Francisco", "Pedro"];
console.log(countRepeats(arrString, "Pedro"));


// Filtrar pares
// Crea una función que devuelva un nuevo array con solo los números pares de un 
// array original.
function getNewList(arr: number[]){
    let result: number[] = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element % 2 === 0) {
            result.push(element);
        } 
    }
    return result
}

let arrNumber: number[] = [1, 2, 3, 4]
console.log(getNewList(arrNumber));


// Palíndromo
// Crea una función que determine si una palabra es un palíndromo 
// ("oso", "reconocer").
function getPalindromo(element: string){

}
console.log(getPalindromo('reconocer'));