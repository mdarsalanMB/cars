const arr = require('../problems/problem4');

const sumCars= function (arr,count){
    for( let i=0; i<arr.length-1;i++)
    {
        if(arr[i]<2000)
            count++;
    }
    return count;
}

let count=0;
sumCars(arr,count);

module.exports = count;
