const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());

const dbConnection = require("./configs/DbConnection");
dbConnection();

const AdminRoutes = require("./routes/AdminRoutes");
const studentRoute = require("./routes/StudentRoutes");
app.use(express.json());

app.use("/api/admin", AdminRoutes);
app.use("/api/student", studentRoute);

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is Running on ${port} port`);
});
