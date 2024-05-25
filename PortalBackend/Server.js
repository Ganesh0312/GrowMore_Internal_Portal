const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());

const dbConnection = require("./configs/DbConnection");
dbConnection();

const AdminRoutes = require("./routes/AdminRoutes");
const studentRoute = require("./routes/StudentRoutes");
const course = require("./routes/CourcesRoutes");
const trainerRoute = require("./routes/TrainerRoutes");
const staffRoutes = require("./routes/StaffRoutes");

app.use(express.json());

app.use("/api/admin", AdminRoutes);
app.use("/api/students", studentRoute);
app.use("/api/courses", course);
app.use("/api/trainers", trainerRoute);
app.use("/api/staff", staffRoutes);

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is Running on ${port} port`);
});
