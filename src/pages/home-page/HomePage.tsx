import { useNavigate } from "react-router-dom";
import "./home-page.style.scss";
import { profile_emoji } from "../../assets/images-profile";

const HomePage = () => {
  const navigateResume = useNavigate();
  const navigatePortfolio = useNavigate();
  const navigateToResume = () => {
    navigateResume("/resume");
  };
  const navigateToPortfolio = () => {
    navigatePortfolio("/portfolio");
  };

  return (
    <div className="container">
      <article>
        <div
          className="id-photo-box"
          style={{ backgroundImage: `url(${profile_emoji})` }}
        ></div>
        <button onClick={navigateToPortfolio}>포트폴리오</button>
        <button onClick={navigateToResume}>이력서</button>
        <button>
          <a
            className="block"
            href="https://github.com/laurenCho9"
            target="_blank"
          >
            깃허브주소
          </a>
        </button>
        <button>
          <a
            className="block"
            href="https://velog.io/@lauren/posts"
            target="_blank"
          >
            벨로그
          </a>
        </button>
      </article>
    </div>
  );
};

export default HomePage;
