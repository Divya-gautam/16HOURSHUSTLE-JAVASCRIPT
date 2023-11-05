// Array in Javascript

//print an array--
// let name = ['divi' , 'raj' , 'rony' , 'sakshu' , 'harsh'];
// console.log(name);

//Travers an array particular element--
// let name = ['divi' , 'raj' , 'rony' , 'sakshu' , 'harsh'];
// console.log(name[4]);

// for in loop
// let homies = ['divi' , 'raj' , 'rony' , 'sakshu' , 'harsh'];
// for(let element in homies){
//     console.log(element);
// }

// for of loop
// let homies = ['divi' , 'raj' , 'rony' , 'sakshu' , 'harsh'];
// for(let element of homies){
//     console.log(element);
// }

// for each
// let homies = ['divi' , 'raj' , 'rony' , 'sakshu' , 'harsh'];
// homies.forEach(function(element , index , array ){
//     console.log(element + " : " + index);
// });

// With Fat arrow function
// let homies = ['divi' , 'raj' , 'rony' , 'sakshu' , 'harsh'];
// homies.forEach((element , index , array )=> {
//     console.log(element + " : " + index);
// });


// indexof-
// let homies = ['divi' , 'raj' , 'rony' , 'sakshu' , 'harsh'];
// console.log(homies.indexOf('rony'));

// includes
// let homies = ['divi' , 'raj' , 'rony' , 'sakshu' , 'harsh'];
// console.log(homies.includes('art'));

// Find method
// let homies = [5 , 22 , 9 , 43 , 7];
// const array1 = homies.find( (elem)=>{
//     return elem > 9;
// });
// console.log(array1);

// findIndex method

// let homies = [5 , 22 , 9 , 43 , 7];
// const array1 = homies.findIndex( (elem)=>{
//     return elem > 5;
// });
// console.log(array1);

// Filter
// let homies = [5 , 22 , 9 , 43 , 7];
// const array1 = homies.filter( (elem)=>{
//     return elem > 9;
// });
// console.log(array1);

// Sorting
// let months = ['jan' ,'feb' , 'march' , 'april' , 'may' ];
// const arr = months.sort((elem) =>{
//     return elem;
// });
// console.log(arr);

// Push

// let animals = ['pig' , 'rat' , 'cow'];
// animals.push('dog')
// console.log(animals);

// UNSHIFT
// let animals = ['pig' , 'rat' , 'cow'];
// animals.unshift('dog')
// console.log(animals);

// shift & pop oposit of unshift and push.

// SPLICE
// let animals = ['pig' , 'rat' , 'rabbit','cow'];
// animals.splice (2 , 0 , 'dog');
// console.log(animals);

// Replace rat to Rat
// let animals = ['pig' , 'rat' , 'rabbit','cow'];
// let indi = animals.indexOf('rat');
// if( indi != -1){
//     animals.splice( indi , 1 , 'Rat');             //if i want to delete rat i just remove rat..
//     console.log(animals);
// } else{
//     console.log('Not fond');
// }

// map()
// let arr = [4,7,2,99,43,1];
// let newArr = arr.map((curvalue , index , array) =>{
// return curvalue > 7;
// });
// console.log(newArr);

// map() method
// let arr = [4,7,2,99,43,1];
// let newArr = arr.map((curvalue , index , array) =>{
// return `Index no. is ${index} and the value is ${curvalue} belongs to ${array}`;
// });
// console.log(newArr);

// Questions 1::
// let arr=[25 , 36 , 49 , 64 ,81];
// let newArr = arr.map((currele) => {
//     return Math.sqrt(currele);
// })
// console.log(newArr);

// Questions 2::
// let arr=[2 , 3 , 4 , 6 ,8];
// let newArr = arr.map((elem) =>{
//     return elem*2;
// }).filter((elem) =>{
//     return elem>10;
// });
// console.log(newArr);

// Another method to solve Question 2 ::
// let arr=[2 , 3 , 4 , 6 ,8];
// let newarr = arr.map((elem) => elem*2).filter((elem) => elem>10).reduce((accumulator , curvalue )=>accumulator += curvalue);
// console.log(newarr);

// REDUCE
// let arr=[2 , 3 , 4 , 6 ,8];
// let newarr = arr.reduce((accumulator , curvalue )=>{
//     return accumulator += curvalue;
// });
// console.log(newarr);

// FLATTEN AN ARRAY::
let twod = [['zone1', 'zone2'],
['zone3', 'zone4'],
['zone5', 'zone6'],
['zone7', 'zone8']
]
let newone = twod.reduce((accum , curelem) =>{
    return accum.concat(curelem);
});
console.log(newone);














