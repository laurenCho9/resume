import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ResumePage from "./pages/Resume/ResumePage";
import "./App.style.scss";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import ProjectImageDetailPage from "./pages/Resume/ProjectImageDetailPage/ProjectImageDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/projectImage/:id" element={<ProjectImageDetailPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
