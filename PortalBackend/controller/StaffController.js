const Staff = require("../model/StaffModel");

exports.addStaff = async (req, res) => {
  const {
    name,
    email,
    mobile,
    address,
    education,
    status,
    designation,
    dateOfBirth,
    salary,
    username,
    password,
    adharNo,
    panCard,
  } = req.body;

  try {
    const existingEmail = await Staff.findOne({ email });
    const existingUsername = await Staff.findOne({ username });
    const existingAdharNo = await Staff.findOne({ adharNo });

    if (existingEmail) {
      return res
        .status(400)
        .json({ message: "User with email already exists" });
    }

    if (existingUsername) {
      return res
        .status(400)
        .json({ message: "User with username already exists" });
    }

    if (existingAdharNo) {
      return res
        .status(400)
        .json({ message: "User with adhar number already exists" });
    }

    const newStaff = new Staff({
      name,
      email,
      mobile,
      address,
      education,
      status,
      designation,
      dateOfBirth,
      salary,
      username,
      password,
      adharNo,
      panCard,
    });
    await newStaff.save();
    res.status(201).json({ message: "Staff created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating staff", error });
  }
};

exports.staffLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const staff = await Staff.findOne({ username, password });
    if (!staff) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ designation: staff.designation, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    if (staff.length === 0) {
      return res.status(404).json({ message: "No staff found" });
    }
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: "Error fetching staff", error });
  }
};

exports.updateStaff = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    mobile,
    address,
    education,
    status,
    designation,
    dateOfBirth,
    salary,
    username,
    password,
    adharNo,
    panCard,
  } = req.body;

  try {
    const existingEmail = await Staff.findOne({ email, _id: { $ne: id } });
    const existingUsername = await Staff.findOne({
      username,
      _id: { $ne: id },
    });
    const existingAdharNo = await Staff.findOne({ adharNo, _id: { $ne: id } });

    if (existingEmail) {
      return res
        .status(400)
        .json({ message: "User with email already exists" });
    }

    if (existingUsername) {
      return res
        .status(400)
        .json({ message: "User with username already exists" });
    }

    if (existingAdharNo) {
      return res
        .status(400)
        .json({ message: "User with adhar number already exists" });
    }

    await Staff.findByIdAndUpdate(id, {
      name,
      email,
      mobile,
      address,
      education,
      status,
      designation,
      dateOfBirth,
      salary,
      username,
      password,
      adharNo,
      panCard,
    });
    res.status(200).json({ message: "Staff updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating staff", error });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
    if (!deletedStaff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.json({ message: "Staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting staff", error });
  }
};
