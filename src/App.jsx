import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ResumePage from "./pages/Resume/ResumePage";
import "./App.style.scss";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
