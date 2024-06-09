import { useNavigate } from "react-router-dom";
import "./Homepage.style.scss";

function Homepage() {
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
        <div className="id-photo-box"></div>
        <button onClick={navigateToResume}>이력서</button>
        <button onClick={navigateToPortfolio}>포트폴리오</button>
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
}

export default Homepage;
