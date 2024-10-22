import "./portpolio-item.style.scss";

type PortfolioItemProps = {
  title: string;
  link: string;
  description: string;
  technologies: string;
  thumbnail: string;
  isReversed: boolean; // 레이아웃을 반전시키기 위한 prop
};

const PortfolioItem = ({
  title,
  link,
  description,
  technologies,
  thumbnail,
  isReversed,
}: PortfolioItemProps) => {
  return (
    <section className={`grid pd_top24 ${isReversed ? "reversed" : ""}`}>
      <div className="flex_gap">
        <h4>{title}</h4>
        <div>
          <a href={link} target="_blank" className="underline">
            <b>↗︎</b> {title}
          </a>
        </div>
        <b>{technologies}</b>
        <p>{description}</p>
      </div>
      <div className="column_space"></div>
      <div className="width330 thumbnail_project">
        <a href={link} target="_blank" className="underline">
          <img src={thumbnail} alt={title} />
        </a>
      </div>
    </section>
  );
};

export default PortfolioItem;
