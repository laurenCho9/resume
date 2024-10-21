import axios from "axios";
import { useEffect, useState } from "react";
import "./PortfolioPage.style.scss";

function PortfolioPage() {
  let [dataObj, setDataObj] = useState(null); // 모든 data를 담을 state

  // useEffect를 활용하여 최초 렌더링(두 번째 인자값 [])이 되었을 때에만 data.json을 호출한다.
  // axios 통신으로 data.json 파일에 있는 데이터를 get 한다.
  useEffect(() => {
    axios.get("data.json").then(function (response) {
      // 성공 핸들링
      // response는 data.json 안에 json 형식으로 되어 있는 모든 데이터를 뜻한다.
      setDataObj(response.data); // set함수를 활용하여 dataObj 변수에 object 형식의 데이터를 대입한다.
    });
  }, []);

  return (
    <div className="content">
      <header className="header">
        <h1 className="title">
          <span className="title_emoji">
            <img src="icon_emoji.png" alt="이모지" />
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
              {/* sect01 */}
              <section className="grid pd_top24">
                <div className="flex_gap">
                  <h4>영화 데이터 서비스 (1인)</h4>
                  <div>
                    <a
                      href="https://movies-chohayoon.netlify.app/"
                      target="_blank"
                      className="underline"
                    >
                      <b>↗︎</b> 영화 데이터 서비스
                    </a>
                  </div>
                  <b>
                    React + SWC, Vite, Yarn, React-Router, React-Query,
                    Bootstrap, SCSS
                  </b>
                  <p>카드 캐롯셀, 페이지네이션, 검색 기능 구현</p>
                </div>
                <div class="column_space"></div>
                <div className="width330 thumbnail_project">
                  <a
                    href="https://movies-chohayoon.netlify.app/"
                    target="_blank"
                    className="underline"
                  >
                    <img src="thumbnail_movies.png" alt="" />
                  </a>
                </div>
              </section>
              {/* sect02 */}
              <section className="grid pd_top24">
                <div className="width330 thumbnail_project">
                  <a
                    href="https://superclub.vercel.app/recruit"
                    target="_blank"
                    className="underline"
                  >
                    <img src="thumbnail_coding.png" alt="" />
                  </a>
                </div>
                <div class="column_space"></div>
                <div className="flex_gap">
                  <h4>개발 동아리 모집 서비스 (6인)</h4>
                  <div>
                    <a
                      href="https://superclub.vercel.app/recruit"
                      target="_blank"
                      className="underline"
                    >
                      <b>↗︎</b> 개발 동아리 모집 서비스
                    </a>
                  </div>
                  <b className="flex center gap4">
                    <img
                      className="width16"
                      src="icon_github.png"
                      alt="GitHub"
                    />

                    <a
                      target="_blank"
                      href="https://github.com/laurenCho9/superclub"
                    >
                      superclub
                    </a>
                  </b>
                  <b>
                    React, Create-React-App, npm, React-Router,
                    styled-components
                  </b>
                  <p>
                    모집공고 페이지 디자인, 개발 담당 슬라이드 배너, 탭메뉴,
                    필터링 기능 구현
                  </p>
                </div>
              </section>
              {/* sect03 */}
              <section className="grid pd_top24">
                <div className="flex_gap">
                  <h4>이력서 팀프로젝트 (2인)</h4>
                  <div>
                    <a
                      href="https://resume-team-project.vercel.app/"
                      target="_blank"
                      className="underline"
                    >
                      <b>↗︎</b> 이력서 팀프로젝트
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://velog.io/@lauren/%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-1%EC%9D%BC%EC%B0%A8-%EA%B8%B0%EB%A1%9D"
                      target="_blank"
                      className="underline"
                    >
                      <b>⇒</b> Velog 기록
                    </a>
                  </div>

                  <b>
                    React, Create-React-App, Yarn, React-Router, SCSS, Mock Data
                  </b>
                  <p>토글 기능 구현</p>
                </div>
                <div class="column_space"></div>
                <div className="width330 thumbnail_project">
                  <a
                    href="https://resume-team-project.netlify.app/"
                    target="_blank"
                    className="underline"
                  >
                    <img src="thumbnail_resume.png" alt="" />
                  </a>
                </div>
              </section>
              {/* sect04 */}
              <section className="grid pd_top24">
                <div className="width330 thumbnail_project">
                  <a
                    href="https://winter-react-project.web.app/"
                    target="_blank"
                    className="underline"
                  >
                    <img src="thumbnail_diary.png" alt="" />
                  </a>
                </div>
                <div class="column_space"></div>
                <div className="flex_gap">
                  <h4>감정일기장 (1인)</h4>
                  <div>
                    <a
                      href="https://winter-react-project.web.app/"
                      target="_blank"
                      className="underline"
                    >
                      <b>↗︎</b> 감정일기장
                    </a>
                  </div>
                  <b>
                    React + SWC, Vite, Yarn, React-Router, ContextAPI, CSS,
                    localStorage
                  </b>
                  <p>탭메뉴, 수정하기, 삭제하기 기능 구현</p>
                </div>
              </section>
              {/* sect05 */}
              <section className="grid pd_top24">
                <div className="flex_gap">
                  <h4>투두리스트 (1인)</h4>
                  <div>
                    <a
                      href="https://daily-to-doo.netlify.app/"
                      target="_blank"
                      className="underline"
                    >
                      <b>↗︎</b> 투두리스트
                    </a>
                  </div>
                  <b>
                    React + SWC, Vite, Yarn, React-Router, ContextAPI, PostCSS,
                    localStorage
                  </b>
                  <p>다크모드, 탭메뉴, 필터링, 삭제하기 기능 구현</p>
                </div>
                <div class="column_space"></div>
                <div className="width330 thumbnail_project">
                  <a
                    href="https://daily-to-doo.netlify.app/"
                    target="_blank"
                    className="underline"
                  >
                    <img src="thumbnail_todo.png" alt="" />
                  </a>
                </div>
              </section>
            </div>
          </article>
          <hr className="project_hr" />
          <footer className="italic"></footer>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
