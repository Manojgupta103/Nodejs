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

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/Person");
const menu = require('./models/menu');

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error saving person" });
  }
});

app.post("/menu", async (req, res) => {
  try {
    const data1 = req.body;
    const newmenu = new menu(data1);
    const response = await newmenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error saving menu" });
  }
});

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

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log('data Fetched')
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching person" });
  }
});

app.listen(3000, () => {
  console.log("server is running");
});
