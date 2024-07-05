// Define an interface named Vehicle with specific properties and methods.
interface Vehicle {
    make: string;   // Property: Represents the make of the vehicle as a string.
    model: string;  // Property: Represents the model of the vehicle as a string.
    year: number;   // Property: Represents the year of manufacture of the vehicle as a number.
    start(): void;  // Method: Represents a method that starts the vehicle and returns void.
}

// Implement the Car class that adheres to the Vehicle interface.
class Car implements Vehicle {
    make: string;    // Property: Holds the make of the car.
    model: string;   // Property: Holds the model of the car.
    year: number;    // Property: Holds the year of manufacture of the car.

    // Constructor: Initializes the make, model, and year properties when an instance of Car is created.
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method: Implements the start method defined in the Vehicle interface.
    start(): void {
        console.log("Car engine started");  // Logs a message indicating that the car engine has started.
    }

    // Method: Displays information about the car.
    displayInfo(): void {
        console.log(`Car Details - Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// Create an instance of the Car class.
let myCar: Vehicle = new Car("Range Rover", "Mercedes", 2026);

// Call methods on the instance of myCar.
myCar.start(); // Outputs: Car engine started

(myCar as Car).displayInfo();  
// Outputs: Car Details - Make: Toyota, Model: Camry, Year: 2023



//my other notes about the checkpoint
// Interface (Vehicle): Defines a contract specifying that any class implementing Vehicle must have make, model, year properties (with specified types) and a start() method that returns void.

// Class (Car): Implements the Vehicle interface, meaning it must include make, model, year properties and a start() method. The constructor initializes these properties when an instance of Car is created.

// Instance Creation: let myCar: Vehicle = new Car("Toyota", "Camry", 2023); creates an instance (myCar) of Car, initializing it with "Toyota" as make, "Camry" as model, and 2023 as year.

// Method Call: myCar.start(); calls the start() method on myCar, which logs "Car engine started" to the console.

// This example demonstrates how interfaces and classes work together in TypeScript to define and implement structured data types (Vehicle in this case), ensuring adherence to a specific contract (interface) while providing concrete implementations (class Car).