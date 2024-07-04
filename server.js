console.log("server log is running")

// function add(a,b) {
//     return a+b;
// }
// var add = (a,b) =>   {return a+b};
// var result = add(2,4);

// console.log(result);

// var subtract = (a,b) => a-b;
// var result = subtract(9,4);

// console.log(result);

function callback() {
    console.log("callback function is running");
}

const add = function(a, b, callback) {
    var result = a + b;
    console.log("result " + result)
    callback();
}

add(2, 45, callback)