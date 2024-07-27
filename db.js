const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/mydb'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});

db.on('disconnected', ()=>{
    console.log('Disconnected from MongoDB');
});

module.exports = db;