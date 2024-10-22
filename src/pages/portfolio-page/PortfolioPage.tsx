import axios from "axios";
import { useEffect, useState } from "react";
import "./portfolio-page.style.scss";
import { icon_emoji } from "../../assets/icons";
import ProjectItems from "../../components/portfolio/project-items/ProjectItems";
import { TPortfolio } from "../../types/portfolio";

const PortfolioPage = () => {
  const [projects, setProjects] = useState<TPortfolio[]>([]);

  useEffect(() => {
    axios.get("/server/portfolio.json").then(function (response) {
      if (Array.isArray(response.data.projects)) {
        setProjects(response.data.projects);
      } else {
        console.error("Received data is not an array:", response.data);
      }
    });
  }, []);

  return (
    <div className="content">
      <header className="header">
        <h1 className="title">
          <span className="title_emoji">
            <img src={icon_emoji} alt="이모지" />
          </span>
          <span>Portfolio</span>
        </h1>
      </header>
      <section className="main">
        <div className="career_wrap">
          <div className="row_space"></div>

          <article className="career">
            <h3 className="title">Projects</h3>
            <hr className="project_hr" />
            <div className="bullet_list project_contact_wrap">
              {projects.map((project, index) => (
                <ProjectItems
                  key={index}
                  title={project.title}
                  deploy={project.deploy}
                  github={project?.github}
                  blog={project?.blog}
                  technologies={project.technologies}
                  description={project.description}
                  thumbnail={project.thumbnail}
                  implement={project.implement}
                  isReversed={index % 2 !== 0} // 짝수, 홀수로 레이아웃 뒤집기
                />
              ))}
            </div>
          </article>
          <hr className="project_hr" />
          <footer className="italic"></footer>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
