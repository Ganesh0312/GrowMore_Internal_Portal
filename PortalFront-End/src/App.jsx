import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/AdminPages/Dashboard";
import StudentsList from "./pages/AdminPages/Students/StudentsList";
import Sidebar from "./components/Sidebar/Sidebar";
import Trainer from "./pages/AdminPages/Trainer/Trainer";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/students" element={<StudentsList />} />
          <Route path="/admin/Trainer" element={< Trainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
