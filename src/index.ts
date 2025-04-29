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
interface Figure{
    calculateArea(): number;
}

class Square implements Figure {
    constructor(private side: number) {}
  
    calculateArea(): number {
      return this.side * this.side;
    }
}

class Circle implements Figure {
    constructor(private radio: number) {}
  
    calculateArea(): number {
      return Math.PI * (this.radio * 2)
    }
}

class Triangle implements Figure {
    constructor(private height: number, private base:number) {}
  
    calculateArea(): number {
      return 0.5 * this.base * this.height
    }
}

const square = new Square(4);
console.log(square.calculateArea());

const circle = new Circle(5);
console.log(circle.calculateArea());

const triangle = new Triangle(7, 5);
console.log(triangle.calculateArea());


// Sistema de empleados
// Clase base Empleado con método calcularSalario().
// Subclases EmpleadoPorHora y EmpleadoFijo que sobrescriban ese método con 
// diferentes fórmulas
abstract class Employee{
    abstract calculateSalary(): void;
}

class EmployeeByHour extends Employee{
    override calculateSalary(): void {
        console.log('EmployeeByHour');
    } 
}

class PermanentEmployee extends Employee{
    override calculateSalary(): void {
        console.log('PermanentEmployee');
    } 
}

const employee1 = new EmployeeByHour();
employee1.calculateSalary();

const employee2 = new PermanentEmployee();
employee2.calculateSalary();


// Inventario con Encapsulamiento
// Clase Producto con nombre, precio y stock (privado).
// Métodos para vender productos, reponer stock y consultar disponibilidad.
class Product {
    public id: number;
    public name: string;
    public price: number;
    private stock: number;

    constructor(id:number, name:string, price:number, stock:number){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }

    sellProduct(): string {
        if (this.stock > 0) {
            this.stock -= 1;
            return `${this.name} sold. Stock: ${this.stock}`
        } else {
            return `No stock available for ${this.name}.`;
        }
    }

    getStock(): number {
        return this.stock
    }
}

const product1 = new Product(1, 'Coca Cola 3Lt', 5000, 3)
const product2 = new Product(2, 'Cono de Papas fritas', 1000, 10)
const product3 = new Product(3, 'Empanada de Queso', 2000, 7)

console.log(product1.sellProduct());
console.log(product3.sellProduct());

console.log(product3.getStock());


// Simulador de combate (Polimorfismo)
// Clase abstracta Personaje con método abstracto atacar().
// Subclases Guerrero, Mago, Arquero que implementen ataques distintos.
abstract class Character {
    abstract attack(): void;
}

class Warrior extends Character{
    override attack(): void {
        console.log('warrior attack');
    } 
}

class Wizard extends Character{
    override attack(): void {
        console.log('Wizard attack');
    } 
}

class Archer extends Character{
    override attack(): void {
        console.log('Archer attack');
    } 
}

const warrior1 = new Warrior();
warrior1.attack();