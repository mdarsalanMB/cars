const inventory = require ("..inventory");

// const sortCars =[];

// const sorting = function(){
//     for(let i=0;i<inventory.length-1; i++)
// {
//     sortCars.push(inventory[i].car_model);
// }
// return sortCars;
// }
// sortCars.sort();

// sorting();
module.exports= sortCars;
// for(let i=0; i<sortCars.length-1;i++)
// {
//     console.log(sortCars[i]);
//     console.log('\n');
// }



const sorting = function(){

   const sortCars =[];
    for(let i=0;i<inventory.length-1; i++)
{
    sortCars.push(inventory[i].car_model);
}
sortCars.sort();
for(let i=0; i<sortCars.length-1;i++)
{
    console.log(sortCars[i]);
    console.log('\n');
}
return sortCars;
}


sorting();