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


//Callback Function
function callback() {
    console.log("callback function is running");
}

const add = function(a, b, callback) {
    var result = a + b;
    console.log("result " + result)
    callback();
}

add(2, 45, callback)


// Fs module
// https://nodejs.org/api
var fs = require('fs');
var os = require('os');

var user = os.userInfo();

console.log(user);

console.log("welcome "+ user.username);

fs.appendFile('greeting.txt','Hi ' + user.username + '!\n', () => {
    console.log("file created");
} )
