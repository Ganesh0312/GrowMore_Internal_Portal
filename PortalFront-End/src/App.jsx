import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/AdminPages/Dashboard";
import StudentsList from "./pages/AdminPages/Students/StudentsList";
<<<<<<< HEAD
import Sidebar from "./components/Sidebar/Sidebar";
import Trainer from "./pages/AdminPages/Trainer/Trainer";
=======
import AdminLogin from "./pages/LoginPages/AdminLogin";
import StudDashboard from "./pages/StudentPages/StudDashboard";
import TraiDashboard from "./pages/TrainerPages/TraiDashboard";
import AddStudent from "./pages/AdminPages/Students/AddStudent";
>>>>>>> e720b8b4df6175f21b8a0372d752e9ef2be92236

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/students" element={<StudentsList />} />
<<<<<<< HEAD
          <Route path="/admin/Trainer" element={< Trainer/>} />
=======
          <Route path="/admin/students/add" element={<AddStudent />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/student/dashboard" element={<StudDashboard />} />
          <Route path="/trainer/dashboard" element={<TraiDashboard />} />
>>>>>>> e720b8b4df6175f21b8a0372d752e9ef2be92236
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
