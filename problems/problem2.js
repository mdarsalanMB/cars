const inventory = require ("../inventory");

const lastCar = function(){
    const car=[];
    car.push(inventory[inventory.length-1].car_make);
    car.push (inventory[inventory.length-1].car_model);
    console.log('Last Car is a'+ ' '+car[0]+ ' '+ car[1]);
    // return car;

    }

const car=[];
lastCar();
module.exports = lastCar;
// module.exports= {
//     lastCar: lastCar,
//     car: car,
// };
// console.log('Last Car is a'+ ' '+lastCar.car[0]+ ' '+ lastCar.car[1]);