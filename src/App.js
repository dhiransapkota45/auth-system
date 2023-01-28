import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/home/Dashboard";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
