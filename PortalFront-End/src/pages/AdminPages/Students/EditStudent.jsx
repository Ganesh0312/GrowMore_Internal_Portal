import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditStudentForm = ({ student, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    username: "",
    contact: "",
    gardianName: "",
    gardiabcontact: "",
    curentAddress: "",
    permantAddress: "",
    education: "",
    selectedCourses: "",
    degreeResult: "",
    sscResult: "",
    hscResult: "",
    gender: "",
    status: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    if (student) {
      setFormData({ ...student });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/students/update/${student._id}`,
        formData
      );
      toast.success("Student data updated successfully");
      onSave();
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to update student data");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 w-80 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">Edit {formData.studentName}'s Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Student Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Username"
            required
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Contact"
            required
          />
          {/* Add other input fields as necessary */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Save Changes
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditStudentForm;
