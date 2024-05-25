const express = require("express");
const router = express.Router();
const staffController = require("../controller/StaffController");

router.post("/add", staffController.addStaff);
router.get("/get", staffController.getAllStaff);
router.put("/update/:id", staffController.updateStaff);
router.delete("/delete/:id", staffController.deleteStaff);
router.post("/login", staffController.staffLogin);

module.exports = router;
