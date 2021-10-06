//function

function functionName() {
    console.log("I am function");
}

// function sub() {
//     var a = 10, b = 20;
//     console.log(a + b);
// }

// function add(a, b) {
//     var result = a + b;
//     console.log(result);
// }
// functionName();
// //sub();
// add(10, 20);

var arr = [5, 100, 15];
var arr1 = [11, 223, 54];
var arr2 = [55, 78, 68];


function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum);
}
sumOfArray(arr);
sumOfArray(arr1);
sumOfArray(arr2);