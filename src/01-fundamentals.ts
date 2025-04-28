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
    let result: string[] = element.split("")
    let word_inverse: string[] = result.reverse()

    if (result === word_inverse){
        return "Es palindromo"
    }
    return "No es palindromo"
}
console.log(getPalindromo('oso'));


// Array de objetos con condicional
// Tienes un array de objetos: Filtra los que tengan más de 18 años.
const arr: any[] = [
    {name: "Ana", age: 17}, 
    {name: "Bruce", age: 18},
    {name: "Luis", age: 21}
]
let arr_adults: any[] = arr.find((x) => x.age >= 18);
console.log(arr_adults);


// FizzBuzz con TypeScript Desde 1 hasta 100, imprime 
// "Fizz" si es múltiplo de 3, 
// "Buzz" si es múltiplo de 5 y 
// "FizzBuzz" si es múltiplo de ambos.
function fizzBuzz(elem: number){
    let multiple_three: number = elem % 3;
    let multiple_five: number = elem % 5;

    if (multiple_three == 0 && multiple_five == 0){
        return "FizzBuzz";
    } else if (multiple_five == 0){
        return "Buzz";
    } else if (multiple_three == 0){
        return "Fizz";
    }
    return "No es multiplo ni de 3 ni 5"
    
}
console.log(fizzBuzz(20));


// Máximo valor en un array
// Escribe una función que devuelva el número más alto en un array de números.
function getMaxArr(arr: number[]) {
    return arr.reduce((max, num) => {
        return num > max ? num : max;
    }, arr[0]);
}
console.log(getMaxArr([5, 10, 45, 23]));
