import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import DashboardLayout from "./pages/DashboardLayout";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<DashboardLayout />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
