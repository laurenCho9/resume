import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ResumePage from "../pages/resume/ResumePage";
import ProjectImageDetailPage from "../pages/resume/resume-detail/resumeDetailPage";
import PortfolioPage from "../pages/portfolio/PortfolioPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/projectImage/:id" element={<ProjectImageDetailPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
};

export default App;
