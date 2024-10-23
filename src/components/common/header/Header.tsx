import { useNavigate } from "react-router-dom";
import "./header.style.scss";
import { back_arrow } from "../../../assets/icons";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1); // 한페이지 뒤로 가기
  };

  return (
    <header className="header-container">
      <div className="header-box">
        <img
          className="header-icon"
          src={back_arrow}
          alt="back_arrow"
          onClick={handleNavigate}
          width="24px"
          height="24px"
        />
        <div className="header-title"></div>
      </div>
    </header>
  );
};

export default Header;
