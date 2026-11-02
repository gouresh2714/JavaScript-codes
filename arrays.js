let numbers = [10, 20, 30, 40, 50];
//numbers stored in indexes starting from 0
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// to print array using array name

console.log(numbers);   

//print particular index value=array name along with index number
console.log(numbers[2]);
console.log(numbers[5]);

//print using for loop
//for (let i=0; i<numbers.length; i++) {
  //  console.log(numbers[i]);

  console.log(numbers.length);




  //add or remove using push and pop methods

let ages = [10, 20, 30, 40, 50];
ages.push(60);
console.log(ages);

ages.unshift(5);
console.log(ages);

ages.pop();
console.log(ages);

ages.shift();
console.log(ages);

//splice method to add or remove elements from array
//ages.splice(2, 1);
//////console.log(ages);

slices = ages.slice(1, 4);
console.log(slices);

//sorting the array using sort method

let arrays = [10, 5, 20, 15, 30];
arrays.sort((a,b) => a-b);
console.log(arrays);

//descending order
arrays.sort((a,b) => b-a);
console.log(arrays);