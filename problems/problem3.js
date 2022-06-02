const inventory = require ("..inventory");

const sortCars =[];

const sorting = function(){
    for(let i=0;i<inventory.length-1; i++)
{
    sortCars.push(inventory[i].car_model);
}
return sortCars;
}
sortCars.sort();

sorting();
module.exports= sortCars;