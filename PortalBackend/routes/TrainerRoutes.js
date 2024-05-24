const express = require("express");
const router = express.Router();
const trainerController = require("../controller/TrainerController");

router.post("/add", trainerController.createTrainer);
router.get("/get", trainerController.getAllTrainers);
router.get("/get/:id", trainerController.getTrainerById);
router.put("/update/:id", trainerController.updateTrainer);
router.delete("/delete/:id", trainerController.deleteTrainer);

module.exports = router;
