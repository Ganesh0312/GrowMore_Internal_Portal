const express = require("express");
const router = express.Router();
const courseController = require("../controller/CourcesController");

router.post("/add", courseController.createCourse);
router.get("/get", courseController.getAllCourses);
router.get("/get/:id", courseController.getCourseById);
router.put("/update/:id", courseController.updateCourse);
router.delete("/delete/:id", courseController.deleteCourse);

module.exports = router;
