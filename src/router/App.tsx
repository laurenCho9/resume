import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import ResumePage from "../pages/resume-page/ResumePage";
import ProjectImageDetailPage from "../pages/resume-page/resume-detail-page/resumeDetailPage";
import PortfolioPage from "../pages/portfolio-page/PortfolioPage";
import Header from "../components/common/header/Header";

const App = () => {
  const location = useLocation(); // 현재 경로 확인

  return (
    <>
      {/* HomePage가 아닌 다른 페이지에 Header를 표시 */}
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projectImage/:id" element={<ProjectImageDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
};

export default App;
