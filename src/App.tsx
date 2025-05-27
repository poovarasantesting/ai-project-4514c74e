import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import AddUser from "./pages/AddUser";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/add-user" element={<AddUser />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}