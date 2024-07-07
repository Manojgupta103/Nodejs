// console.log("server log is running")

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
// function callback() {
//     console.log("callback function is running");
// }

// const add = function(a, b, callback) {
//     var result = a + b;
//     console.log("result " + result)
//     callback();
// }

// add(2, 45, callback)


// Fs module
// https://nodejs.org/api
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();

// console.log(user);

// console.log("welcome "+ user.username);

// fs.appendFile('greeting.txt','Hi ' + user.username + '!\n', () => {
//     console.log("file created");
// } )

// Json to Object
// const jsonString = '{"name": "John", "age": 30, "city":"New York"}';
// const jsonobject = JSON.parse(jsonString) ;
// console.log(jsonobject.name);

// object to Json
// const objectToConvert = {
//     name: "Alice",
//     age: 25
// };
// const json = JSON.stringify(objectToConvert); // Convert object to JSm•4 string
// console. log(json)

// console.log(typeof json)

// Express 
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/C', function (req, res) {
    res.send('Hellrrro World')
})
app.get('/idli', function (req, res) {
    var customized_idli = {
        name: "idli",
        price: 10
    };
    res.send(customized_idli)
})


app.listen(3000, ()=> {
    console.log("server is running")
})