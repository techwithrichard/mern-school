// controllers/studentController.js
// const Student = require('../models/student');
const Student = require('../models/Student')

const studentController = {
  createStudent: async (req, res) => {
    try {
      // Logic to create a new student based on the request body
      // Save the student to the database
      const newStudent = await Student.create(req.body);
      res.status(201).json(newStudent);
    } catch (err) {
      res.status(500).json({ error: 'Unable to create student' });
    }
  },

  getAllStudents: async (req, res) => {
    try {
      // Logic to fetch all students from the database
      const students = await Student.find();
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json({ error: 'Unable to fetch students' });
    }
  },

  // Add other controller functions as needed
};

module.exports = studentController;
