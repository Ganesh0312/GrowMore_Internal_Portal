import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import EditStudentForm from "./EditStudent";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/students/get"
      );
      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else {
        setStudents([]);
        toast.error("Unexpected response format");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setStudents([]);
        toast.error("No students found");
      } else {
        console.log(error.message);
        toast.error("Failed to fetch students");
      }
    }
  };

  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setIsEditing(true);
  };

  const handleDeleteStudent = (student) => {
    setSelectedStudent(student);
    setIsDeleting(true);
  };

  const closePopup = () => {
    setSelectedStudent(null);
    setIsEditing(false);
    setIsDeleting(false);
  };

  const handleSave = () => {
    fetchStudents();
    closePopup();
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/students/delete/${selectedStudent._id}`
      );
      toast.success("Student deleted successfully");
      fetchStudents();
      closePopup();
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to delete student");
    }
  };

  return (
    <Layout>
      <div className="p-4">
        <Link
          to="/admin/students/add"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Student
        </Link>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Username</th>
              <th className="py-2">Contact</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.studentId}>
                <td className="py-2">{student.studentId}</td>
                <td className="py-2">{student.studentName}</td>
                <td className="py-2">{student.email}</td>
                <td className="py-2">{student.username}</td>
                <td className="py-2">{student.contact}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleViewDetails(student)}
                    className="text-blue-500 hover:underline"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button
                    onClick={() => handleEditStudent(student)}
                    className="text-yellow-500 hover:underline ml-2"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    onClick={() => handleDeleteStudent(student)}
                    className="text-red-500 hover:underline ml-2"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedStudent && !isEditing && !isDeleting && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 w-80 relative">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={closePopup}
              >
                &times;
              </button>
              <h2 className="text-2xl mb-4">
                {selectedStudent.studentName} Details
              </h2>
              <p>
                <strong>Email:</strong> {selectedStudent.email}
              </p>
              <p>
                <strong>Username:</strong> {selectedStudent.username}
              </p>
              <p>
                <strong>Contact:</strong> {selectedStudent.contact}
              </p>
              <p>
                <strong>Guardian Name:</strong> {selectedStudent.gardianName}
              </p>
              <p>
                <strong>Guardian Contact:</strong>{" "}
                {selectedStudent.gardiabcontact}
              </p>
              <p>
                <strong>Current Address:</strong>{" "}
                {selectedStudent.curentAddress}
              </p>
              <p>
                <strong>Permanent Address:</strong>{" "}
                {selectedStudent.permantAddress}
              </p>
              <p>
                <strong>Education:</strong> {selectedStudent.education}
              </p>
              <p>
                <strong>Selected Courses:</strong>{" "}
                {selectedStudent.selectedCourses}
              </p>
              <p>
                <strong>Degree Result:</strong> {selectedStudent.degreeResult}
              </p>
              <p>
                <strong>SSC Result:</strong> {selectedStudent.sscResult}
              </p>
              <p>
                <strong>HSC Result:</strong> {selectedStudent.hscResult}
              </p>
              <p>
                <strong>Gender:</strong> {selectedStudent.gender}
              </p>
              <p>
                <strong>Status:</strong> {selectedStudent.status}
              </p>
              <p>
                <strong>Date of Birth:</strong>{" "}
                {new Date(selectedStudent.dateOfBirth).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
        {isEditing && (
          <EditStudentForm
            student={selectedStudent}
            onClose={closePopup}
            onSave={handleSave}
          />
        )}
        {isDeleting && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 w-80 relative">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={closePopup}
              >
                &times;
              </button>
              <h2 className="text-2xl mb-4">Confirm Delete</h2>
              <p>
                Are you sure you want to delete {selectedStudent.studentName}?
              </p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white p-2 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={closePopup}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default StudentsList;
