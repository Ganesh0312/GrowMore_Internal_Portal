const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const staffSchema = new mongoose.Schema({
  staffId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Single", "Married", "Other"],
    required: true,
  },
  designation: {
    type: String,
    enum: ["Trainer", "Staff"],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  adharNo: {
    type: String,
    required: true,
    unique: true,
  },
  panCard: {
    type: String,
    required: true,
  },
});

staffSchema.plugin(AutoIncrement, { inc_field: "staffId", start_seq: 1000 });

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
