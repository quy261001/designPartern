// Vehicle factory
function VehicleFactory() {}

// Factory method to create different types of vehicles
VehicleFactory.prototype.createVehicle = function (type) {
  if (type === 'car') {
    return new Car();
  } else if (type === 'bike') {
    return new Bike();
  } else if (type === 'truck') {
    return new Truck();
  } else {
    throw new Error('Invalid vehicle type.');
  }
};

// Car constructor
function Car() {
  this.type = 'car';
  this.drive = function () {
    console.log('Driving a car.');
  };
}

// Bike constructor
function Bike() {
  this.type = 'bike';
  this.drive = function () {
    console.log('Riding a bike.');
  };
}

// Truck constructor
function Truck() {
  this.type = 'truck';
  this.drive = function () {
    console.log('Driving a truck.');
  };
}

// Usage
const factory = new VehicleFactory();

const vehicle1 = factory.createVehicle('car');
const vehicle2 = factory.createVehicle('bike');
const vehicle3 = factory.createVehicle('truck');

vehicle1.drive(); 
vehicle2.drive();
vehicle3.drive(); 
