const inventory = require('../inventory');

const carYear= function(arr)
{
    for(let i=0;i<inventory.length-1; i++)
    {
        arr.push(inventory[i].car_year);
    }
    return arr;
}

let arr=[];
carYear(arr);

module.exports = arr;
// console.log(arr);


