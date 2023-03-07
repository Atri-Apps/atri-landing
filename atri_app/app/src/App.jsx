import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Temp from "./pages/Temp.jsx";
import Showcase from "./pages/Showcase.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/temp" element={<Temp />} />
<Route path="/showcase" element={<Showcase />} />
    </Routes>
  );
}
