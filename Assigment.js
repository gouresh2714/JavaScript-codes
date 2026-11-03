let array=[10, 20, 30, 40, 50, 10,20,50,10,40];
let value=[]

for (let i=0; i<array.length; i++) {

    for (let j=i+1; j<array.length; j++) {
        if ((array[i]==array[j]) && !value.includes(array[i])) {
            value.push(array[i]);
        }
    }
}   
console.log(value);


