// student model
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class', // Reference to the Class model
    required: true,
  },
  // Add other fields as needed
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
