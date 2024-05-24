const Student = require("../model/StudentModel");

exports.createStudent = async (req, res) => {
  try {
    const existingUsername = await Student.findOne({
      username: req.body.username,
    });
    if (existingUsername) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }
    const existingEmail = await Student.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const student = new Student(req.body);
    await student.save();
    res.status(201).json({
      message: "Student created successfully",
      student,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error creating student",
      error: err.message,
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if (students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }
    res.json(students);
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving students",
      error: err.message,
    });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }
    res.status(200).json({
      message: "Student retrieved successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving student",
      error: err.message,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    // Check if username already exists for other students
    const existingUsername = await Student.findOne({
      username: req.body.username,
      _id: { $ne: req.params.id },
    });
    if (existingUsername) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    // Check if email already exists for other students
    const existingEmail = await Student.findOne({
      email: req.body.email,
      _id: { $ne: req.params.id },
    });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }
    res.status(200).json({
      message: "Student updated successfully",
      student,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error updating student",
      error: err.message,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }
    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting student",
      error: err.message,
    });
  }
};
