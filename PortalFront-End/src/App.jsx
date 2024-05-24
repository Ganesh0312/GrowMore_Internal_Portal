import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/AdminPages/Dashboard";
import StudentsList from "./pages/AdminPages/Students/StudentsList";
import AdminLogin from "./pages/LoginPages/AdminLogin";
import StudDashboard from "./pages/StudentPages/StudDashboard";
import TraiDashboard from "./pages/TrainerPages/TraiDashboard";
import AddStudent from "./pages/AdminPages/Students/AddStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/students" element={<StudentsList />} />
          <Route path="/admin/students/add" element={<AddStudent />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/student/dashboard" element={<StudDashboard />} />
          <Route path="/trainer/dashboard" element={<TraiDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
