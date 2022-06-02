const inventory = require ("../inventory");

const lastCar = function(car){
    car.push(inventory[inventory.length-1].car_make);
    car.push (inventory[inventory.length-1].car_model);
    return car
    }

const car=[];
lastCar(car)
module.exports= {
    lastCar: lastCar,
    car: car,
};