const inventory = require('../inventory');

const cars= function(arr)
{
    for(let i=0;i<inventory.length-1; i++)
    {
        if(inventory[i]==='BMW' || inventory[i]==='Audi')
        arr.push(inventory[i]);
    }
    return arr;
}

let arr=[];

cars(arr);

module.exports = arr;
