class Movie{
    name?: string;
    protagonists?: string[];
    actors?: string[];

    showInCinema(){
        console.log(`${this.name} is in cinema`);
    }

    constructor(name:string, protagonists:string[], actors:string[]){
        this.name = name,
        this.protagonists = protagonists,
        this.actors = actors
    }
}

const movie1 = new Movie(
    'Oppenheimer', 
    ['Robert Oppenheimer', 'Lewis Strauss', 'Leslie Groves'],
    ['Cillian Murphy', 'Robert Downey Jr.', 'Matt Damon']
);
movie1.showInCinema();



class Counter {
    private value: number;
  
    constructor(initialValue: number = 0) {
      this.value = initialValue;
    }
  
    increment(): void {
      this.value++;
    }
  
    demecrent(): void {
      this.value--;
    }
  
    getValue(): number {
      return this.value;
    }
}
  
// Ejemplo de uso:
const counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.demecrent();
console.log(counter1.getValue()); // Salida: 1



// Rectángulo
// Crea una clase Rectangulo con ancho y alto y un método que calcule el área.
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height:number) {
        this.width = width
        this.height = height
    }

    calculateArea(): number{
        return this.width * this.height;
    }
}
const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.calculateArea());



// Cuenta bancaria
// Clase CuentaBancaria con propiedades privadas saldo, métodos depositar(), 
// retirar(), y verSaldo().
class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance
    }

    deposit(value: number){
        this.balance += value;
    }

    withdraw(value: number){
        this.balance -= value;
    }

    showBalance(): number {
        return this.balance;
    }
}

const account1 = new BankAccount(100)
account1.deposit(20);
console.log(account1.showBalance());
account1.withdraw(10);
console.log(account1.showBalance());



// Animal (Herencia)
// Crea una clase Animal con un método hacerSonido(), y clases hijas Perro y 
// Gato que sobrescriben ese método.
class Animal{
    makeNoise(): void {
        console.log('Make noise!');
    } 
}

class Dog extends Animal{
    override makeNoise(): void {
        console.log('Woof! Woof!');
    } 
}

class Cat extends Animal{
    override makeNoise(): void {
        console.log('Miau! Miau!');
    } 
}

const animal = new Animal();
animal.makeNoise();

const dog = new Dog();
dog.makeNoise();

const cat = new Cat();
cat.makeNoise();


// Estudiante y promedio
// Clase Estudiante con un array de notas. Crea un método calcularPromedio() y 
// uno que determine si aprueba.
class Student{
    grade: number[];

    constructor(grade:number[]){
        this.grade = grade
    }

    calculateAverage(): number {
        const arr = this.grade;
        let result = 0;

        const total = arr.reduce((total, num) => {
            return total + num;
        }, 0);
        result = total / arr.length

        return Math.round(result)
    } 

    isPass(): boolean{
        const average = this.calculateAverage()

        if(average >= 40){
            return true
        } else {
            return false
        }
    }
}
const student = new Student([50, 43, 50]);
console.log(student.calculateAverage());
console.log(student.isPass());


// Interfaz Figura y clases concretas
// Crea una interfaz Figura con un método calcularArea().
// Implementa clases Cuadrado, Círculo, Triángulo que implementen esa interfaz.