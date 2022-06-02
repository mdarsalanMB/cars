const inventory = require ("../inventory");


const information= function(car)
{
    for(let i=0; i<inventory.length; i++)
{
    if( inventory[i].id === 33)
    {
        car.push(inventory[i].car_year);
        car.push(inventory[i].car_make);
        car.push(inventory[i].car_model);
        return car;
    }

}
}
let car=[];
information(car);


module.exports = {
    information: information,
    carOb : car,
};
console.log('Car 33 is a '+problem1.carOb[0]+' '+problem1.carOb[1]+' '+problem1.carOb[2]);

// console.log('Car 33 is a '+car[0]+' '+car[1]+' '+car[2]);
