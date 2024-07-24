import axios from "axios";
import { useEffect, useState } from "react";
import "./ResumePage.style.scss";
import { FcPicture } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function ResumePage() {
  let [dataObj, setDataObj] = useState(null); // 모든 data를 담을 state
  let [clickObj, setClickObj] = useState([]); // toggle click 여부에 따라 펼치고 접기 위한 Object를 담을 state
  let [tabFocusCss, setTabFocusCss] = useState("All"); // 탭 focus css 적용시킬 state, 초기값은 All
  let [rotationState, setRotationState] = useState({});

  // useEffect를 활용하여 최초 렌더링(두 번째 인자값 [])이 되었을 때에만 data.json을 호출한다.
  // axios 통신으로 data.json 파일에 있는 데이터를 get 한다.
  useEffect(() => {
    axios.get("data.json").then(function (response) {
      // 성공 핸들링
      // response는 data.json 안에 json 형식으로 되어 있는 모든 데이터를 뜻한다.
      const data = response.data;
      setDataObj(data); // set함수를 활용하여 dataObj 변수에 object 형식의 데이터를 대입한다.

      // 모든 title1, subTitle, skill, institute 값을 초기값으로 설정
      const initialClickObj = [
        ...data.experience.flatMap((item) => [item.title1, item.subTitle]),
        ...data.education.flatMap((item) => [item.title1, item.subTitle]),
        ...data.skill.flatMap((item) => [item.title1, item.subTitle]),
        ...data.institute.flatMap((item) => [item.title1, item.subTitle]),
      ];

      const initialRotationState = {
        ...data.experience.reduce((acc, item) => {
          acc[item.title1] = true;
          acc[item.subTitle] = true;
          return acc;
        }, {}),
        ...data.education.reduce((acc, item) => {
          acc[item.title1] = true;
          acc[item.subTitle] = true;
          return acc;
        }, {}),
        ...data.skill.reduce((acc, item) => {
          acc[item.title1] = true;
          acc[item.subTitle] = true;
          return acc;
        }, {}),
        ...data.institute.reduce((acc, item) => {
          acc[item.title1] = true;
          acc[item.subTitle] = true;
          return acc;
        }, {}),
      };

      setClickObj(initialClickObj);
      setRotationState(initialRotationState);
    });
  }, []);

  // profile 영역의 카드 클릭 시 해당 address의 새 창(새 탭)을 오픈한다.
  const profileAreaClick = (profileAddress) => {
    // profileAdress는 address 값이다.
    window.open(profileAddress);
  };

  // 펼치고 접기 위한 toggle 클릭 시 넘겨주는 값을 toggleClickValue 매개 변수로 받아서 처리한다.
  const toggleClick = (toggleClickValue) => {
    // clickObj.length 가 0 즉 array 가 비어 있다면 toggleClickValue를 최초로 넣어 준다.
    if (clickObj.length === 0) {
      setClickObj([toggleClickValue]);
    } else {
      // clickObj 가 빈 [] 상태가 아니라면 includes 함수를 활용하여 내가 클릭한 toggleClickValue가 clickObj에 존재하는지 체크한다.
      if (clickObj.includes(toggleClickValue) === false) {
        // clickObj 안에 toggleClickValue가 존재하지 않는다는 건 접혀있는 상태라는 말이기 때문에 toggleClickValue를 넣어 준다.
        setClickObj([toggleClickValue, ...clickObj]);
      } else {
        // clickObj 안에 toggleClickValue가 존재한다면 filter로 제거한다.
        let filter = clickObj.filter((item) => {
          // item 이 toggleClickValue와 다른 값들만 return 한다.
          if (item !== toggleClickValue) {
            return toggleClickValue;
          }
        });
        // filter 된 값을 set함수를 이용하여 clickObj 값을 update 시킨다.
        setClickObj(filter);
      }
    }
  };

  const toggleClickRotate = (toggleClickValue) => {
    // Toggle the click state
    if (clickObj.includes(toggleClickValue)) {
      setClickObj(clickObj.filter((item) => item !== toggleClickValue));
    } else {
      setClickObj([...clickObj, toggleClickValue]);
    }

    // Update the rotation state
    setRotationState((prev) => ({
      ...prev,
      [toggleClickValue]: !prev[toggleClickValue],
    }));
  };

  const navigate = useNavigate();

  const navigateToPortfolio = (id) => {
    navigate(`/projectImage/${id}`);
  };

  return (
    <div className="content">
      <header className="header">
        <div className="emoji"></div>
        <h1 className="title">
          입사 후 1년 내에 3가지를&nbsp;
          <span className="mobile519block">자신있게 약속드립니다.</span>
        </h1>
      </header>
      <section className="main">
        <h3 className="title">About Me</h3>
        <div className="profile_wrap">
          <div className="photo"></div>
          <div className="column_space"></div>
          <article className="profile">
            <ul className="box">
              <li className="bold flex">
                <div className="profile_key">
                  <span>이</span>
                  <span>름</span>
                </div>
                <div className="profile_value">조하윤</div>
              </li>
              <li className="bold flex">
                <div className="profile_key">
                  <span>생</span>
                  <span>년</span>
                  <span>월</span>
                  <span>일</span>
                </div>
                <div className="profile_value">1993. 04. 09.</div>
              </li>
              <li className="bold flex">
                <div className="profile_key">
                  <span>전</span>
                  <span>화</span>
                  <span>번</span>
                  <span>호</span>
                </div>
                <div className="profile_value">010-8072-4827</div>
              </li>
              <li className="bold flex">
                <div className="profile_key">
                  <span>전</span>
                  <span>자</span>
                  <span>메</span>
                  <span>일</span>
                </div>
                <div className="profile_value">lauren.choux@gmail.com</div>
              </li>
              <li className="bold flex column">
                <div className="profile_key">
                  <span>소</span>
                  <span>개</span>
                </div>
                {/* <div className="profile_value">lauren.choux@gmail.com</div> */}
                <div className="introduce_wrap">
                  <ul className="box introduce">
                    <li className="txt bullet-flex">
                      <span className="inline_flex">
                        <img
                          className="disc icon_dark"
                          src="icon_disc_dark.svg"
                        />
                      </span>
                      <span>
                        <b>[개발 프로세스 숙지 및 개선 노력]</b>
                        <span className="block padding-top-bottom3">
                          귀사에 입사하여 1년 안에 매뉴얼을 빠르게 숙지하고 현
                          개발 프로세스를 이해하겠습니다. 이를 바탕으로 효율성을
                          높일 수 있는 작은 개선점들을 찾아 제안하겠습니다. 이를
                          통해 팀의 일원으로서 기여할 수 있는 방법을 모색하고,
                          궁극적으로는 개발 프로세스의 효율성을 점진적으로
                          향상시키겠습니다.
                        </span>
                      </span>
                    </li>
                    <li className="txt bullet-flex">
                      <span className="inline_flex">
                        <img
                          className="disc icon_dark"
                          src="icon_disc_dark.svg"
                        />
                      </span>
                      <span>
                        <b>[사용자 경험 개선 노력]</b>
                        <span className="block padding-top-bottom3">
                          귀사에 입사하여 사용자 경험을 분석하고, UI/UX 디자인
                          원칙을 적극적으로 적용하겠습니다. 관련 서적과 학습
                          자료를 통해 최신 트렌드와 모범 사례를 지속적으로
                          학습하여, 사용자 친화적인 인터페이스를 제공하고 귀사의
                          서비스 품질을 향상시키겠습니다.
                        </span>
                      </span>
                    </li>
                    <li className="txt bullet-flex">
                      <span className="inline_flex">
                        <img
                          className="disc icon_dark"
                          src="icon_disc_dark.svg"
                        />
                      </span>
                      <span>
                        <b>[협업 효율성 증대]</b>
                        <span className="block padding-top-bottom3">
                          귀사에 입사하여 협업 도구와 워크플로우를 빠르게
                          익히고, 팀원들의 성향과 업무 스타일을 존중하는
                          커뮤니케이션을 실천하겠습니다. 이를 통해 협업 효율성을
                          높이고, 원활한 팀워크를 유지하는 데 기여하겠습니다.
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </article>
        </div>
        <div className="padding-top-bottom3">
          저는 신입으로서 배우려는 자세와 적극적인 태도로 귀사의 발전에
          기여하고자 합니다. <br />
          기존 시스템과 선배들의 노하우를 존중하며, 새로운 도전을 통해
          지속적으로 성장해 나가겠습니다. 감사합니다.
        </div>

        <div className="gray_hr mb_none"></div>

        {/* <div className="row_space"></div> */}

        <h2 className="title_hidden">경력 사항</h2>
        <div className="career_wrap">
          <div className="row_space"></div>

          <article className="career">
            <h3 className="title">Experiences</h3>
            <hr />
            <div className="toggle_list font_grey">
              {dataObj &&
                dataObj.experience.map((item) => (
                  <div key={item.title1}>
                    <ul className="box depth1">
                      <li>
                        <span
                          className="inline_flex"
                          onClick={() => toggleClickRotate(item.title1)}
                        >
                          <img
                            className="toggle"
                            src="icon_toggle.svg"
                            style={{
                              transform: rotationState[item.title1]
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        </span>
                        <span className="profile_key experiences">
                          <span>직</span>
                          <span>무</span>
                          <span>&nbsp;</span>
                          <span>이</span>
                          <span>름</span>
                        </span>
                        <div>
                          <b>{item.title1}</b>
                          <b>&nbsp;/&nbsp;</b>
                          <b>{item.title2}</b>
                        </div>
                      </li>
                    </ul>
                    <ul
                      className={
                        clickObj.includes(item.title1)
                          ? "box depth2"
                          : "box hidden depth2"
                      }
                    >
                      <div className="italic padding-left23 padding-top-bottom3">
                        {item.date}
                      </div>
                      <div className="padding-left23 color37352f padding-top-bottom3 bullet-flex">
                        <img
                          className="disc icon_dark"
                          src="icon_disc_dark.svg"
                        />
                        {item.content1}
                      </div>
                      {item.content2 && (
                        <div className="padding-left23 color37352f padding-top-bottom3 bullet-flex">
                          <img
                            className="disc icon_dark"
                            src="icon_disc_dark.svg"
                          />
                          {item.content2}
                        </div>
                      )}
                      {item.content3 && (
                        <div className="padding-left23 color37352f padding-top-bottom3">
                          <img
                            className="disc icon_dark"
                            src="icon_disc_dark.svg"
                          />
                          <a
                            href="https://nudgecomms.com/sub02/project/"
                            target="_blank"
                          >
                            {item.content3}
                            <b> ↗︎</b>
                          </a>
                        </div>
                      )}
                      <div className="padding-left23 color37352f padding-top-bottom3">
                        <img
                          className="disc icon_dark"
                          src="icon_disc_dark.svg"
                        />
                        <b>{item.portfolio}</b>
                      </div>

                      {/* portfolio contents */}
                      <div
                        className="padding-left46 color37352f padding-top-bottom3 flex click"
                        onClick={() =>
                          navigateToPortfolio(item.portfolioContent1.id)
                        }
                      >
                        <FcPicture className="image_icon" />
                        <span className="bold600">
                          {item.portfolioContent1.name}
                          <b> ↗︎</b>
                        </span>
                      </div>
                      <div
                        className="padding-left46 color37352f padding-top-bottom3 flex click"
                        onClick={() =>
                          navigateToPortfolio(item.portfolioContent2.id)
                        }
                      >
                        <FcPicture className="image_icon" />
                        <span className="bold600">
                          {item.portfolioContent2.name}
                          <b> ↗︎</b>
                        </span>
                      </div>
                      {item.portfolioContent3 && (
                        <div className="padding-left46 color37352f padding-top-bottom3 flex click">
                          <FcPicture className="image_icon" />
                          <span className="bold600">
                            {item.portfolioContent3}
                            <b> ↗︎</b>
                          </span>
                        </div>
                      )}
                      {item.portfolioContent4 && (
                        <div className="padding-left46 color37352f padding-top-bottom3 flex click">
                          <FcPicture className="image_icon" />
                          <span className="bold600">
                            {item.portfolioContent4}
                            <b> ↗︎</b>
                          </span>
                        </div>
                      )}

                      {/* <div className="gray_hr mb_none"></div> */}
                      {item.subTitle && (
                        <li className="padding-left23">
                          <span
                            className="inline_flex"
                            onClick={() => toggleClickRotate(item.subTitle)}
                          >
                            <img
                              style={{
                                transform: rotationState[item.subTitle]
                                  ? "rotate(90deg)"
                                  : "rotate(0deg)",
                              }}
                              className="toggle"
                              src="icon_toggle.svg"
                            />
                          </span>
                          <div>
                            <b>{item.subTitle}</b>
                          </div>
                          <div></div>
                        </li>
                      )}
                    </ul>
                    {item.subTitle && (
                      <ul
                        className={
                          clickObj.includes(item.subTitle) &&
                          clickObj.includes(item.title1)
                            ? "box depth3"
                            : "box hidden depth3"
                        }
                      >
                        {item.projects.map((projectItem, projectName) => (
                          <li key={projectName}>
                            {/* <div> */}
                            <div className="width100 padding-top-bottom3">
                              <b>{projectItem.projectNO}&#41;&nbsp;</b>
                              <b>{projectItem.projectName}</b>
                            </div>
                            <div className="width100 padding-top-bottom3 bullet-flex">
                              <span>
                                <img
                                  className="disc icon_dark"
                                  src="icon_disc_dark.svg"
                                />
                              </span>
                              <span className="color37352f">
                                {projectItem.projectContribution}
                              </span>
                            </div>
                            <div className="width100 padding-top-bottom3">
                              <span>
                                <img
                                  className="disc icon_dark"
                                  src="icon_disc_dark.svg"
                                />
                              </span>
                              <span>
                                <span className="color37352f">
                                  산출물 :&nbsp;
                                </span>
                                <a
                                  // href={encodeURI(projectItem.projectOutput)}
                                  href={projectItem.projectOutput}
                                  target="_blank"
                                  className="color37352f"
                                >
                                  {projectItem.projectOutput}
                                </a>
                              </span>
                            </div>
                            {/* </div> */}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.subTitle && (
                      <ul
                        className={
                          clickObj.includes(item.subTitle) &&
                          clickObj.includes(item.title1)
                            ? "box depth4"
                            : "box hidden depth4"
                        }
                      >
                        <li>
                          <div>그 외 9개 서비스 출시</div>
                        </li>
                      </ul>
                    )}
                    <div className="gray_hr"></div>
                  </div>
                ))}
            </div>
          </article>
          <div className="row_space"></div>

          <article className="career">
            <h3 className="title">Education</h3>
            <hr />
            <div className="toggle_list font_grey">
              {dataObj &&
                dataObj.education.map((item) => (
                  <div key={item.title1}>
                    <ul className="box depth1">
                      <li>
                        <span
                          className="inline_flex"
                          onClick={() => toggleClickRotate(item.title1)}
                        >
                          <img
                            className="toggle"
                            src="icon_toggle.svg"
                            style={{
                              transform: rotationState[item.title1]
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        </span>
                        <span className="profile_key">
                          <span>{item.tag[0]}</span>
                          <span>{item.tag[1]}</span>
                        </span>
                        <div>
                          <b>{item.title1}</b>
                        </div>
                      </li>
                    </ul>
                    <ul
                      className={
                        clickObj.includes(item.title1)
                          ? "box depth2"
                          : "box hidden depth2"
                      }
                    >
                      <div className="italic padding-left23 padding-top-bottom3">
                        {item.date}
                      </div>
                      <div className="padding-left23 color37352f padding-top-bottom3">
                        <img
                          className="disc icon_dark"
                          src="icon_disc_dark.svg"
                        />
                        {item.content}
                      </div>
                    </ul>
                    <div className="gray_hr"></div>
                  </div>
                ))}
            </div>
          </article>

          <div className="row_space"></div>

          <article className="career">
            <h3 className="title">Skills</h3>
            <hr />
            <div className="toggle_list font_grey">
              {dataObj &&
                dataObj.skill.map((item) => (
                  <div key={item.title1}>
                    <ul className="box depth1">
                      <li className=" bullet-flex">
                        <span
                          className="inline_flex"
                          onClick={() => toggleClickRotate(item.title1)}
                        >
                          <img
                            className="toggle"
                            src="icon_toggle.svg"
                            style={{
                              transform: rotationState[item.title1]
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        </span>
                        <div>
                          <b>{item.title1}</b>
                        </div>
                      </li>
                    </ul>
                    <ul
                      className={
                        clickObj.includes(item.title1)
                          ? "box depth2"
                          : "box hidden depth2"
                      }
                    >
                      {item.content1 && (
                        <li className="padding-left23 color37352f padding-top-bottom3">
                          <img
                            className="disc icon_dark"
                            src="icon_disc_dark.svg"
                          />
                          {item.content1}
                        </li>
                      )}
                      {item.content2 && (
                        <div className="padding-left23 color37352f bullet-flex padding-top-bottom3">
                          <span className="bullet-flex">
                            <img
                              className="disc icon_dark"
                              src="icon_disc_dark.svg"
                            />
                          </span>
                          {item.content2}
                        </div>
                      )}
                      {item.content3 && (
                        <li className="padding-left23 color37352f padding-top-bottom3">
                          <img
                            className="disc icon_dark"
                            src="icon_disc_dark.svg"
                          />
                          {item.content3}
                        </li>
                      )}
                      {item.content4 && (
                        <li className="padding-left23 color37352f padding-top-bottom3">
                          <img
                            className="disc icon_dark"
                            src="icon_disc_dark.svg"
                          />
                          {item.content4}
                        </li>
                      )}
                    </ul>
                    <div className="gray_hr"></div>
                  </div>
                ))}
            </div>
          </article>

          <div className="row_space"></div>

          <article className="career">
            <h3 className="title">Institute</h3>
            <hr />
            <div className="toggle_list font_grey">
              {dataObj &&
                dataObj.institute.map((item) => (
                  <div key={item.title1}>
                    <ul className="box depth1">
                      <li>
                        <span
                          className="inline_flex"
                          onClick={() => toggleClickRotate(item.title1)}
                        >
                          <img
                            className="toggle"
                            src="icon_toggle.svg"
                            style={{
                              transform: rotationState[item.title1]
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        </span>
                        <span className="profile_key">
                          <span>졸</span>
                          <span>업</span>
                        </span>
                        <div>
                          <b>{item.title1}</b>
                        </div>
                      </li>
                    </ul>
                    <ul
                      className={
                        clickObj.includes(item.title1)
                          ? "box depth2"
                          : "box hidden depth2"
                      }
                    >
                      <div className="italic padding-left23 padding-top-bottom3">
                        {item.date}
                      </div>
                      <div className="padding-left23 color37352f bullet-flex padding-top-bottom3">
                        <img
                          className="disc icon_dark"
                          src="icon_disc_dark.svg"
                        />
                        {item.content}
                      </div>
                    </ul>
                    <div className="gray_hr"></div>
                  </div>
                ))}
            </div>
          </article>
          <hr />
          {/* <footer className="italic">
            <b>Latest Updated</b> @{}년 {}월 {}일
          </footer> */}
        </div>
      </section>
    </div>
  );
}

export default ResumePage;
