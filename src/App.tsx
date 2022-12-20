import { BrowserRouter, Route, Routes } from "react-router-dom";
import Components from "./pages/components";
import Home from "./pages/home";
import Hotel from "./pages/hotel";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
