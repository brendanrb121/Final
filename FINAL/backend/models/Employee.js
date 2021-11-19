const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  birthday: {
    type: String
  },
  rollno: {
    type: Number
  }
}, {
    collection: 'employees'
  })

module.exports = mongoose.model('Employee', employeeSchema)