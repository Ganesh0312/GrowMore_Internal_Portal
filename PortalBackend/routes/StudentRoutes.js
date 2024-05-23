const express = require("express");
const router = express.Router();
const studentController = require("../controller/StudentController");

router.post("/add", studentController.createStudent);
router.get("/get", studentController.getAllStudents);
router.get("/get/:id", studentController.getStudentById);
router.put("/update/:id", studentController.updateStudent);
router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
