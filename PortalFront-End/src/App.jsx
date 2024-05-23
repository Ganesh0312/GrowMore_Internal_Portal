import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/AdminPages/Dashboard";
import StudentsList from "./pages/AdminPages/Students/StudentsList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/students" element={<StudentsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
