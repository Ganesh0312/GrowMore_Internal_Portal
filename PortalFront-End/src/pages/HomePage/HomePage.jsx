import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./HomePage.css";

const HomePage = () => {
  const [popup, setPopup] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const openPopup = (type) => {
    setPopup(type);
  };

  const closePopup = () => {
    setPopup(null);
    setUsername("");
    setPassword("");
  };

  const getApiEndpoint = (role) => {
    switch (role) {
      case "admin":
        return "http://localhost:8080/api/admin/login";
      case "student":
        return "http://localhost:8080/api/student/login";
      case "trainer":
        return "http://localhost:8080/api/trainer/login";
      default:
        return "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      username,
      password,
    };

    const apiEndpoint = getApiEndpoint(popup);

    try {
      const response = await axios.post(apiEndpoint, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const result = response.data;

        if (popup === "admin") {
          navigate("/admin/dashboard");
        } else if (popup === "student") {
          navigate("/student/dashboard");
        } else if (popup === "trainer") {
          navigate("/trainer/dashboard");
        }
      } else {
        toast.error(
          response.data.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }

    closePopup();
  };

  return (
    <>
      <div className="background-image flex justify-center items-center h-screen">
        <div className="card-login bg-white bg-opacity-80 rounded-lg p-5 text-center shadow-lg transition duration-300 w-80">
          <div
            className="card-section mb-5 border border-black shadow-md bg-[#271e0f] cursor-pointer"
            onClick={() => openPopup("admin")}
          >
            <i className="fas fa-user-shield text-4xl mb-2 mt-1 text-green-500" />
            <h2 className="mb-2 text-xl text-white">Admin Login</h2>
          </div>
          <div
            className="card-section mb-5 border border-black shadow-md bg-[#271e0f] cursor-pointer"
            onClick={() => openPopup("student")}
          >
            <i className="fas fa-user-graduate text-4xl mb-2 mt-1 text-green-500" />
            <h2 className="mb-2 text-xl text-white">Student Login</h2>
          </div>
          <div
            className="card-section mb-5 border border-black shadow-md bg-[#271e0f] cursor-pointer"
            onClick={() => openPopup("trainer")}
          >
            <i className="fas fa-user-tie text-4xl mb-2 mt-1 text-green-500" />
            <h2 className="mb-2 text-xl text-white">Trainer Login</h2>
          </div>
        </div>
      </div>

      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5 w-80 relative">
            <h2 className="text-2xl mb-4">
              {popup.charAt(0).toUpperCase() + popup.slice(1)} Login
            </h2>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closePopup}
            >
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
