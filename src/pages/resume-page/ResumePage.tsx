import axios from "axios";
import { useEffect, useState } from "react";
import "./resume-page.style.scss";
import { useNavigate } from "react-router-dom";
import { FcPicture } from "react-icons/fc";
import { icon_disc_dark, icon_toggle } from "../../assets/icons";
import { profile_image } from "../../assets/images-profile";
import {
  TEducation,
  TExperience,
  TInstitute,
  TSkill,
} from "../../types/resume";

type ResumeData = {
  experience: TExperience[];
  education: TEducation[];
  skill: TSkill[];
  institute: TInstitute[];
};

const ResumePage = () => {
  // 모든 data를 담을 state, 타입 정의 추가
  const [dataObj, setDataObj] = useState<ResumeData | null>(null);
  const [clickObj, setClickObj] = useState<string[]>([]);
  const [rotationState, setRotationState] = useState<Record<string, boolean>>(
    {}
  );

  // 데이터 호출
  useEffect(() => {
    axios.get("/server/resume.json").then(function (response) {
      const data: ResumeData = response.data;
      setDataObj(data);

      // 초기 상태 설정
      const initialClickObj = [
        ...data.experience.flatMap((item) => [item.title1, item.subTitle]),
        ...data.education.flatMap((item) => [item.title1]),
        ...data.skill.flatMap((item) => [item.title1]),
        ...data.institute.flatMap((item) => [item.title1]),
      ];

      const initialRotationState = {
        ...data.experience.reduce((acc, item) => {
          acc[item.title1] = true;
          acc[item.subTitle ?? ""] = true;
          return acc;
        }, {} as Record<string, boolean>),
        ...data.education.reduce((acc, item) => {
          acc[item.title1] = true;
          return acc;
        }, {} as Record<string, boolean>),
        ...data.skill.reduce((acc, item) => {
          acc[item.title1] = true;
          return acc;
        }, {} as Record<string, boolean>),
        ...data.institute.reduce((acc, item) => {
          acc[item.title1] = true;
          return acc;
        }, {} as Record<string, boolean>),
      };

      setClickObj(initialClickObj.filter(Boolean) as string[]);
      setRotationState(initialRotationState);
    });
  }, []);

  const navigate = useNavigate();

  const navigateToPortfolio = (id: string) => {
    navigate(`/projectImage/${id}`);
  };

  const toggleClickRotate = (toggleClickValue: string) => {
    setClickObj((prev) =>
      prev.includes(toggleClickValue)
        ? prev.filter((item) => item !== toggleClickValue)
        : [...prev, toggleClickValue]
    );
    setRotationState((prev) => ({
      ...prev,
      [toggleClickValue]: !prev[toggleClickValue],
    }));
  };

  return (
    <div className="content">
      <header className="header">
        <h1 className="title">
          에이전시 근무 경험이 있는 UI/UX 퍼블리셔, 프론트엔드 조하윤입니다
        </h1>
      </header>
      <section className="main">
        <h3 className="title">About Me</h3>
        <div className="profile_wrap">
          <div
            className="photo"
            style={{ backgroundImage: `url(${profile_image})` }}
          ></div>
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
                  <span>스</span>
                  <span>킬</span>
                </div>
                <div className="introduce_wrap">
                  <ul className="box introduce">
                    <li className="txt bullet-flex">
                      <span className="inline_flex">
                        <img className="disc icon_dark" src={icon_disc_dark} />
                      </span>
                      <span>
                        {/* 스킬 1 */}
                        <span className="padding-top-bottom3">
                          JavaScript, TypeScript, React, Context API, Zustand,
                          Tanstack Query(React Query)
                        </span>
                      </span>
                    </li>
                    <li className="txt bullet-flex">
                      <span className="inline_flex">
                        <img className="disc icon_dark" src={icon_disc_dark} />
                      </span>
                      <span>
                        {/* 스킬 2 */}
                        <span className="padding-top-bottom3">
                          HTML, CSS, SCSS, Styled-components, Bootstrap,
                          Tailwind, Vanilla Extract
                        </span>
                      </span>
                    </li>
                    <li className="txt bullet-flex">
                      <span className="inline_flex">
                        <img className="disc icon_dark" src={icon_disc_dark} />
                      </span>
                      <span>
                        {/* 스킬 3 */}
                        <span className="padding-top-bottom3">
                          Firebase, Npm, Yarn Berry, Create React App, Vite,
                          Netlify, Vercel, Axios, Fetch API, PhotoShop, Figma
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="bold flex column">
                <div className="profile_key">
                  <span>소</span>
                  <span>개</span>
                </div>
                <div className="introduce_wrap">
                  <ul className="box introduce">
                    <li className="txt bullet-flex">
                      <span>
                        배우려는 자세와 적극적인 태도로 귀사의 발전에 기여하고자
                        합니다. <br />
                        기존 시스템과 선배들의 노하우를 존중하며, <br />
                        새로운 도전을 통해 지속적으로 성장해 나가겠습니다.
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </article>
        </div>

        <div className="gray_hr mb_none"></div>

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
                            src={icon_toggle}
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
                        <img className="disc icon_dark" src={icon_disc_dark} />
                        {item.content1}
                      </div>
                      {item.content2 && (
                        <div className="padding-left23 color37352f padding-top-bottom3 bullet-flex">
                          <img
                            className="disc icon_dark"
                            src={icon_disc_dark}
                          />
                          {item.content2}
                        </div>
                      )}
                      {item.content3 && (
                        <div className="padding-left23 color37352f padding-top-bottom3">
                          <img
                            className="disc icon_dark"
                            src={icon_disc_dark}
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
                        <img className="disc icon_dark" src={icon_disc_dark} />
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

                      {item.subTitle && (
                        <li className="padding-left23">
                          <span
                            className="inline_flex"
                            onClick={() =>
                              item.subTitle && toggleClickRotate(item.subTitle)
                            }
                          >
                            <img
                              style={{
                                transform: rotationState[item.subTitle]
                                  ? "rotate(90deg)"
                                  : "rotate(0deg)",
                              }}
                              className="toggle"
                              src={icon_toggle}
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
                            <div className="width100 padding-top-bottom3">
                              <b>{projectItem.projectNO}&#41;&nbsp;</b>
                              <b>{projectItem.projectName}</b>
                            </div>
                            <div className="width100 padding-top-bottom3 bullet-flex">
                              <span>
                                <img
                                  className="disc icon_dark"
                                  src={icon_disc_dark}
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
                                  src={icon_disc_dark}
                                />
                              </span>
                              <span>
                                <span className="color37352f">
                                  산출물 :&nbsp;
                                </span>
                                <a
                                  href={projectItem.projectOutput}
                                  target="_blank"
                                  className="color37352f"
                                >
                                  {projectItem.projectOutput}
                                </a>
                              </span>
                            </div>
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
                            src={icon_toggle}
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
                        <img className="disc icon_dark" src={icon_disc_dark} />
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
            <div className="toggle_list toggle_list_in_skills font_grey">
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
                            src={icon_toggle}
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
                            src={icon_disc_dark}
                          />
                          {item.content1}
                        </li>
                      )}
                      {item.content2 && (
                        <div className="padding-left23 color37352f bullet-flex padding-top-bottom3">
                          <span className="bullet-flex">
                            <img
                              className="disc icon_dark"
                              src={icon_disc_dark}
                            />
                          </span>
                          {item.content2}
                        </div>
                      )}
                      {item.content3 && (
                        <li className="padding-left23 color37352f padding-top-bottom3">
                          <img
                            className="disc icon_dark"
                            src={icon_disc_dark}
                          />
                          {item.content3}
                        </li>
                      )}
                      {item.content4 && (
                        <li className="padding-left23 color37352f padding-top-bottom3">
                          <img
                            className="disc icon_dark"
                            src={icon_disc_dark}
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
                            src={icon_toggle}
                            style={{
                              transform: rotationState[item.title1]
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        </span>
                        <span className="profile_key">
                          <span>수</span>
                          <span>료</span>
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
                        <img className="disc icon_dark" src={icon_disc_dark} />
                        {item.content}
                      </div>
                    </ul>
                    <div className="gray_hr"></div>
                  </div>
                ))}
            </div>
          </article>
          <hr />
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
