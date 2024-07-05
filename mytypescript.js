// Implement the Car class that adheres to the Vehicle interface.
var Car = /** @class */ (function () {
    // Constructor: Initializes the make, model, and year properties when an instance of Car is created.
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method: Implements the start method defined in the Vehicle interface.
    Car.prototype.start = function () {
        console.log("Car engine started"); // Logs a message indicating that the car engine has started.
    };
    // Method: Displays information about the car.
    Car.prototype.displayInfo = function () {
        console.log("Car Details - Make: ".concat(this.make, ", Model: ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Car;
}());
// Create an instance of the Car class.
var myCar = new Car("Range Rover", "Mercedes", 2026);
// Call methods on the instance of myCar.
myCar.start(); // Outputs: Car engine started
myCar.displayInfo();
// Outputs: Car Details - Make: Toyota, Model: Camry, Year: 2023
//my other notes about the checkpoint
// Interface (Vehicle): Defines a contract specifying that any class implementing Vehicle must have make, model, year properties (with specified types) and a start() method that returns void.
// Class (Car): Implements the Vehicle interface, meaning it must include make, model, year properties and a start() method. The constructor initializes these properties when an instance of Car is created.
// Instance Creation: let myCar: Vehicle = new Car("Toyota", "Camry", 2023); creates an instance (myCar) of Car, initializing it with "Toyota" as make, "Camry" as model, and 2023 as year.
// Method Call: myCar.start(); calls the start() method on myCar, which logs "Car engine started" to the console.
// This example demonstrates how interfaces and classes work together in TypeScript to define and implement structured data types (Vehicle in this case), ensuring adherence to a specific contract (interface) while providing concrete implementations (class Car).
