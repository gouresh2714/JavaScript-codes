// if condition or switch case
var number = 10;
if (number > 0) {
    console.log("Number is positive");}
    if (number < 0) {
        console.log("Number is negative");
    }
    
    else if (number < 0) {
        console.log("Number is negative");
    }
    else {
        console.log("Number is zero");
    }
    console.log("----------------------------------------------------------------------");

var number=10;
if (number=10) {
    console.log("Number is even");
}
else if (number=9) {
    console.log("Number is odd");
}else {
    console.log("Number is positive");
}

var number=20;
if (number<0) {
    console.log("Number is even");
}
else if (number==20) {
    console.log("Number is odd");
}else {
    console.log("Number is positive");
}


var number=4;
if (number<0) {
    console.log("Number is even");
}
else if (number==4) {
    console.log("Number is odd");
}else {
    console.log("Number is positive");
}

var number=-4;
if (number<0) {
    console.log("Number is even");
}
else if (number==-4) {
    console.log("Number is odd");
}else {
    console.log("Number is positive");
}
console.log("----------------------------------------------------------------------");

var number=4;
if (number%2==0) {
    console.log("Number is even");
}else if (number%2==1) {
    console.log("Number is odd");
}else {
    console.log("Number is positive");
}

console.log("----------------------------------------------------------------------");
var number=-7;
if (number%2==0) {
    console.log("Number is even");
}else if (number%2==1) {
    console.log("Number is odd");
}else {
    console.log("Number is positive");
}

console.log("----------------------------------------------------------------------");

var num=10;
if(num>0 && num%2==0){
console.log('This is positive even')
}
else if(num<0 && num%2==0){
  console.log('This is negative even')
}
else if(num>0 && num%2!=0){
  console.log('This is positive odd')
}
else if(num<0 && num%2!=0){
console.log('This is negative odd')
}
else{
console.log('Zero')
}
