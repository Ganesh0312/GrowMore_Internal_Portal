const express = require("express");
const getAdminController = require("../controller/AdminController");
const router = express.Router();

router.post("/login", getAdminController);

module.exports = router;
