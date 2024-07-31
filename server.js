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
const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
const PORT = process.env.PORT || 3000;


const bodyParser = require("body-parser");
app.use(bodyParser.json());

const menu = require("./models/menu");



//Callback Function -  throw new MongooseError('Model.prototype.save() no longer accepts a callback');
//     const data = req.body

//     const newPerson = new Person(data);

//     newPerson.save((error, savedperson) => {
//         if (error) {
//             console.log('Error saving person:', error);
//             res.status(500).json({error: 'Error saving person'})
//         }else{
//             console.log('data saved succesfully');
//             res.status(200).json(savedperson);
//         }
//     })

// Get method



// Middle Ware
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
  next();
}

app.get("/",logRequest, function (req, res) {
  res.send("Welcome to Hotel;");
});
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);


app.listen(PORT, () => {
  console.log("server is running");
});
