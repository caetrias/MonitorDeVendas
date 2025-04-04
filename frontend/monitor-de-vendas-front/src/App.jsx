import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Graficos from "./pages/Graficos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/graficos" element={<Graficos />} />
    </Routes>
  );
}

export default App;
