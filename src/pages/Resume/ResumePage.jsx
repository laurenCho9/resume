import axios from "axios";
import { useEffect, useState } from "react";
import "./ResumePage.style.scss";

function ResumePage() {
  let [dataObj, setDataObj] = useState(null); // 모든 data를 담을 state
  let [clickObj, setClickObj] = useState([]); // toggle click 여부에 따라 펼치고 접기 위한 Object를 담을 state
  let [tabFocusCss, setTabFocusCss] = useState("All"); // 탭 focus css 적용시킬 state, 초기값은 All

  // useEffect를 활용하여 최초 렌더링(두 번째 인자값 [])이 되었을 때에만 data.json을 호출한다.
  // axios 통신으로 data.json 파일에 있는 데이터를 get 한다.
  useEffect(() => {
    axios.get("data.json").then(function (response) {
      // 성공 핸들링
      // response는 data.json 안에 json 형식으로 되어 있는 모든 데이터를 뜻한다.
      setDataObj(response.data); // set함수를 활용하여 dataObj 변수에 object 형식의 데이터를 대입한다.
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

  return (
    <div className="content">
      <header className="header">
        <div className="emoji"></div>
        <h1 className="title">신입 프론트엔드 개발자 조하윤입니다.</h1>
      </header>
      <section className="main">
        <h3 className="title">About Me</h3>
        <div className="profile_wrap">
          <div className="photo"></div>
          <div className="column_space"></div>
          <article className="profile">
            {/* {dataObj &&
              dataObj.profile.map((item) => (
                <ul className="box" key={item.headline}>
                  <li className="bold">{item.headline}</li>
                  {!item.address.includes("@") ? (
                    <li
                      onClick={() => profileAreaClick(item.address)}
                      className="embed"
                    >
                      <article className="link_wrap">
                        <p className="title">{item.title}</p>
                        <p className="txt">{item.txt}</p>
                        <a className="address">
                          <span className="icon github"></span>https://naver.com
                        </a>
                      </article>
                      <div className="link_img"></div>
                    </li>
                  ) : (
                    <li className="address">
                      <span className={item.icon} />
                      {item.address}
                    </li>
                  )}
                </ul>
              ))} */}
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
                        프론트엔드 개발자가 되기 위해 웹디자인과 퍼블리싱 경험을
                        시작으로 진심을 다하고 있는 조하윤입니다.
                      </span>
                    </li>
                    <li className="txt bullet-flex">
                      <span className="inline_flex">
                        <img
                          className="disc icon_dark"
                          src="icon_disc_dark.svg"
                        />
                      </span>
                      다양한 협업 경험으로 열정을 키웠고 이를 통해 꾸준하게
                      배우며 성장중입니다.
                    </li>
                    <li className="txt bullet-flex">
                      <span className="inline_flex">
                        <img
                          className="disc icon_dark"
                          src="icon_disc_dark.svg"
                        />
                      </span>
                      열정과 끊임없는 성장을 추구하며, 역량을 펼치기 위해 새로운
                      도약을 도전중입니다.
                    </li>
                  </ul>
                </div>
              </li>

              {/* <li className="embed">
                <article className="link_wrap">
                  <p className="title"></p>
                  <p className="txt"></p>
                  <a className="address">
                    <span className="icon github"></span>https://naver.com
                  </a>
                </article>
                <div className="link_img"></div>
              </li>
              <li className="address">
                <span />
              </li> */}
            </ul>
          </article>
        </div>

        <div className="gray_hr mb_none"></div>

        <div className="row_space"></div>
        <h2 className="title_hidden">경력 사항</h2>
        <div className="career_wrap">
          <article className="career">
            <h3 className="title">Summary</h3>
            <hr />
            {dataObj &&
              dataObj.summary.map((item) => (
                <div
                  className="bullet_list vertlcal_sub ratio_1_2"
                  key={item.summaryContent}
                >
                  <p className="period padding12">{item.date}</p>
                  <ul className="box padding12">
                    <li>
                      <div>
                        <img className="disc" src="icon_disc.svg" />
                        <span>{item.summaryContent}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
          </article>

          <div className="row_space"></div>

          <article className="career">
            <h3 className="title">Experience</h3>
            <hr />
            <div className="toggle_list font_grey">
              {dataObj &&
                dataObj.experience.map((item) => (
                  <div key={item.title1}>
                    <ul className="box depth1">
                      <li>
                        <span
                          className="inline_flex"
                          onClick={() => toggleClick(item.title1)}
                        >
                          <img className="toggle" src="icon_toggle.png" />
                        </span>
                        <div>
                          <b>{item.title1}</b>
                          <span className="pd_left6">{item.title2}</span>
                        </div>
                        <div className="italic depth1_date">{item.date}</div>
                      </li>
                    </ul>
                    <ul
                      className={
                        clickObj.includes(item.title1)
                          ? "box depth2"
                          : "box hidden depth2"
                      }
                    >
                      <li>
                        <span
                          className="inline_flex"
                          onClick={() => toggleClick(item.subTitle)}
                        >
                          <img className="toggle" src="icon_toggle.png" />
                        </span>
                        <div>
                          <span>{item.subTitle}</span>
                          <span className="pd_left6">{item.subDate}</span>
                        </div>
                        <div></div>
                      </li>
                    </ul>
                    <ul
                      className={
                        clickObj.includes(item.subTitle) &&
                        clickObj.includes(item.title1)
                          ? "box depth3"
                          : "box hidden depth3"
                      }
                    >
                      <li>
                        <span className="inline_flex">
                          <img className="disc" src="icon_disc.svg" />
                        </span>
                        <div>
                          <span>3333333333333333333333333</span>
                        </div>
                        <div></div>
                      </li>
                    </ul>
                    <ul
                      className={
                        clickObj.includes(item.subTitle) &&
                        clickObj.includes(item.title1)
                          ? "box depth4"
                          : "box hidden depth4"
                      }
                    >
                      <li>
                        <span className="inline_flex">
                          <img className="disc" src="icon_disc.svg" />
                        </span>
                        <div>
                          <span>444444444444444444444444444</span>
                        </div>
                        <div></div>
                      </li>
                    </ul>
                    <div className="gray_hr"></div>
                  </div>
                ))}
            </div>
          </article>
          <div className="row_space"></div>
          <div className="tab_wrap font_grey">
            {dataObj &&
              dataObj.tabName.map((item) => (
                <div
                  className={
                    tabFocusCss === item.name ? "tab_btn focus" : "tab_btn"
                  }
                  onClick={(e) => setTabFocusCss(e.target.textContent)}
                  key={item.name}
                >
                  <span className="tab_txt pd_left6">{item.name}</span>
                </div>
              ))}
          </div>
          <div className="gray_hr mg_top-1"></div>

          <article className="career">
            <h3 className="title">{tabFocusCss}</h3>
            <div className="gallery_wrap">
              {dataObj &&
                dataObj.work.map((item) =>
                  tabFocusCss !== "All" ? (
                    item.tag === tabFocusCss ? (
                      <div className="gallery" key={item.title}>
                        <div className="thumbnail"></div>
                        <div className="txt">
                          <p className="title">
                            <span>{item.icon}</span>
                            <b> {item.title}</b>
                          </p>
                          <p className="date">{item.date}</p>
                          <p className="tag">
                            <span>{item.tag}</span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    <div className="gallery" key={item.title}>
                      <div className="thumbnail"></div>
                      <div className="txt">
                        <p className="title">
                          <span>{item.icon}</span>
                          <b> {item.title}</b>
                        </p>
                        <p className="date">{item.date}</p>
                        <p className="tag">
                          <span>{item.tag}</span>
                        </p>
                      </div>
                    </div>
                  )
                )}
            </div>
          </article>

          <div className="row_space"></div>

          <article className="career">
            <h3 className="title">Tools</h3>
            <hr />
            <div className="bullet_list vertlcal_sub">
              <ul className="box padding12">
                {dataObj &&
                  dataObj.tools.map((item) => (
                    <li key={item}>
                      <div>
                        <img className="disc" src="icon_disc.svg" />
                        <span className="pd_left2">{item}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </article>

          <div className="row_space"></div>

          <article className="career">
            <h3 className="title">Awards</h3>
            <hr />
            <div className="toggle_list font_grey">
              {dataObj &&
                dataObj.awards.map((item) => (
                  <div key={item.title1}>
                    <ul className="box depth1">
                      <li>
                        <span
                          className="inline_flex"
                          onClick={() => toggleClick(item.title1)}
                        >
                          <img className="toggle" src="icon_toggle.png" />
                        </span>
                        <div>
                          <b>{item.title1}</b>
                          <span className="pd_left6">{item.title2}</span>
                        </div>
                        <div className="italic depth1_date">{item.date}</div>
                      </li>
                    </ul>
                    {item.content.length > 1 ? (
                      item.content.map((item2) => (
                        <ul
                          className={
                            clickObj.includes(item.title1)
                              ? "box depth2"
                              : "box hidden depth2"
                          }
                          key={item2}
                        >
                          <li>
                            <span className="inline_flex">
                              <img className="disc" src="icon_disc.svg" />
                            </span>
                            <div>
                              <span className="pd_left6">{item2}</span>
                            </div>
                            <div></div>
                          </li>
                        </ul>
                      ))
                    ) : (
                      <ul
                        className={
                          clickObj.includes(item.title1)
                            ? "box depth2"
                            : "box hidden depth2"
                        }
                      >
                        <li>
                          <span className="inline_flex">
                            <img className="disc" src="icon_disc.svg" />
                          </span>
                          <div>
                            <span className="pd_left6">{item.content}</span>
                          </div>
                          <div></div>
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
            {dataObj &&
              dataObj.education.map((item) => (
                <div
                  className="bullet_list flex_column font_grey"
                  key={item.education}
                >
                  <ul className="box depth1">
                    <li>
                      <div>
                        <span className="inline_flex">
                          <img className="disc" src="icon_disc.svg" />
                        </span>
                        <b>{item.education}</b>
                      </div>
                      <div className="italic depth1_date">{item.date}</div>
                    </li>
                    {/* <ul className='box hidden depth2'>
                    <li>
                      <div><span>Notion TF</span></div>
                    </li>
                  </ul> */}
                    <div className="gray_hr"></div>
                  </ul>
                </div>
              ))}
          </article>

          <div className="row_space"></div>

          <article className="career">
            <h3 className="title">Contact</h3>
            <hr />
            <div className="bullet_list flex_column contact_wrap font_grey">
              <div className="contact vertlcal_sub">
                <p>
                  <span>
                    <img className="disc" src="icon_disc.svg" />
                  </span>
                  <b>E-mail</b>
                </p>
                <p className="txt pd22">abc@gmail.com</p>
              </div>
              <div className="contact vertlcal_sub">
                <p>
                  <span>
                    <img className="disc" src="icon_disc.svg" />
                  </span>
                  <b>E-mail</b>
                </p>
                <p className="txt pd22">abc@gmail.com</p>
              </div>
              <div className="contact vertlcal_sub">
                <p>
                  <span>
                    <img className="disc" src="icon_disc.svg" />
                  </span>
                  <b>E-mail</b>
                </p>
                <p className="txt pd22">abc@gmail.com</p>
              </div>
              <div className="contact vertlcal_sub">
                <p>
                  <span>
                    <img className="disc" src="icon_disc.svg" />
                  </span>
                  <b>E-mail</b>
                </p>
                <p className="txt pd22">abc@gmail.com</p>
              </div>
            </div>
          </article>
          <hr />
          <footer className="italic">
            <b>Latest Updated</b> @{}년 {}월 {}일
          </footer>
        </div>
      </section>
    </div>
  );
}

export default ResumePage;
