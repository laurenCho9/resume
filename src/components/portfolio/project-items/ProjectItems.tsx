import { icon_github, icon_velog } from "../../../assets/icons";
import { TPortfolio } from "../../../types/portfolio";
import "./project-items.style.scss";

const ProjectItems = ({
  title,
  deploy,
  github,
  blog,
  technologies,
  description,
  thumbnail,
  implement,
  isReversed,
}: TPortfolio) => {
  return (
    <section
      className={`grid pd_top24 projects_wrap  ${isReversed ? "reversed" : ""}`}
    >
      <div className="flex_gap">
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="underline deploy_link"
        >
          <h4>{title}</h4>
          <div className="description">
            <b>↗︎</b> {description}
          </div>
        </a>
        {github && (
          <b className="flex center gap4">
            <img className="width16" src={icon_github} alt="GitHub" />
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </b>
        )}
        {blog && (
          <b className="flex center gap4">
            <img className="width16" src={icon_velog} alt="Velog" />
            <a
              href={blog}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Velog
            </a>
          </b>
        )}
        <b>{technologies}</b>
        <p>{implement}</p>
      </div>
      <div className="column_space"></div>
      <div className="width330 thumbnail_project">
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          <img src={thumbnail} alt={title} />
        </a>
      </div>
    </section>
  );
};

export default ProjectItems;
