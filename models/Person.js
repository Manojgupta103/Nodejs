const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        enum: ['Chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        // unique: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Person', personSchema)