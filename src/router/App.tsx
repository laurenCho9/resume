import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import ResumePage from "../pages/resume-page/ResumePage";
import ProjectImageDetailPage from "../pages/resume-page/resume-detail-page/resumeDetailPage";
import PortfolioPage from "../pages/portfolio-page/PortfolioPage";

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
