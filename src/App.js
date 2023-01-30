import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let title = ["GitHub", "Velog", "GitBook (AI)"];
  let [dataObj, setDataObj] = useState(null);
  let [clickObj, setClickObj] = useState([]); //setClickObj 값을 바꿔주는 역할만 한다.

  // console.log(dataObj.experience);
  useEffect(() => {
    axios.get('data.json')
      .then(function (response) {
        // 성공 핸들링
        setDataObj(response.data);
        // setDataObj("test");

      });
  }, []);

  const profileAreaClick = (profileAddress) => {
    // console.log(profileAddress);
    window.open(profileAddress);
  }
  const toggleClick = (experienceToggle) => {
    // console.log(experienceToggle);
    setClickObj([experienceToggle, ...clickObj]);
    console.log(clickObj);
    let filter = clickObj.filter((item) => { return item !== experienceToggle });
    // setClickObj(filter);
    // console.log(filter);
    // (experienceToggle);
  }
  const projectAreaClick = (projectLink) => {
    // console.log(profileAddress);
    window.open(projectLink);
  }

  return (
    <div className='content'>
      <header className='header'>
        <div className='emoji'></div>
        <h1 className='title'>안녕하세요 이력서입니다. 👍</h1>
        <div className='row_space'></div>
      </header>
      <section className='main'>
        <h2 className='title_hidden'>프로필 소개</h2>
        <div className='profile_wrap'>
          <div className='photo'></div>
          <div className='column_space'></div>
          <article className='profile'>
            <ul className='box'>
              <li className='bold'>📧 Email</li>
              <li className='address'>loremipsum@gmail.com</li>
            </ul>
            {
              // console.log(dataObj.profile)
              // dataObj && dataObj.profile.map(function (item) {
              //   console.log("아이템 확인 : ", item)
              //   // console.log(dataObj)
              // })
              dataObj && dataObj.profile.map((item) =>
                // console.log("아이템 확인 : ", item)
                // console.log(dataObj)
                <ul className='box'>
                  <li className='bold'>{item.headline}</li>
                  <li onClick={() => profileAreaClick(item.address)} className='embed'>
                    <article className='link_wrap'>
                      <p className='title'>{item.title}</p>
                      <p className='txt'>
                        {item.txt}
                      </p>
                      <a className='address'><span className='icon github'></span>https://naver.com</a>
                    </article>
                    <div className='link_img'></div>
                  </li>
                </ul>
              )
            }

          </article>
        </div>
        <div className='introduce_wrap'>
          <ul className='box introduce'>
            <li className='bold'>AI / ML Researcher , Data Engineering</li>
            <li className='txt'>유익한 사회적 가치를 만드는 개발자 <span className='block'></span>참신한 것을 생각하고 연구하고 만들어 실질적 실현까지 연결하는 개발자</li>
          </ul>
        </div>

        <div className='gray_hr mb_none'></div>

        <div className='row_space'></div>
        <h2 className='title_hidden'>경력 사항</h2>
        <div className='career_wrap'>
          <article className='career'>
            <h3 className='title'>Summary</h3>
            <hr />
            <div className='bullet_list vertlcal_sub ratio_1_2'>
              <p className='period padding12'>2011.02 - 2021 현재</p>
              <ul className='box padding12'>
                <li><div><img className='disc' src="icon_disc.png" /><span>Web, iOS, Android, React 등 다양한 플랫폼 경험</span></div></li>
              </ul>
            </div>
          </article>

          <div className='row_space'></div>

          <article className='career'>
            <h3 className='title'>Experience</h3>
            <hr />
            <div className='toggle_list font_grey'>
              {console.log(clickObj)}


              {
                // console.log(dataObj.experience)

                dataObj && dataObj.experience.map((item) =>
                  // console.log("아이템 확인 : ", item)
                  // console.log(dataObj)
                  <ul className='box depth1' >
                    <li>
                      <span onClick={() => toggleClick(item.title1)} className='inline_flex'><img className='toggle' src="icon_toggle.png" /></span>
                      <div><b>{item.title1}</b><span className='pd_left6'>{item.title2}</span></div>
                      <div className='italic depth1_date'>{item.date}</div>
                    </li>
                    <ul className='box hidden depth2'>
                      <li>
                        <img className='toggle' src="icon_toggle.png" />
                        <div><span>{item.subTitle}</span><span className='pd_left6'>{item.subDate}</span></div>
                        <div></div>
                      </li>
                      <ul className='box hidden depth3'>
                        <li>
                          <span className='inline_flex'><img className='disc' src="icon_disc.png" /></span>
                          <div><span>Notion과 Super 서비스를 이용해 에이모 영문 홈페이지 https://en.aimmo.ai 구축</span></div>
                          <div></div>
                        </li>
                      </ul>
                    </ul>
                    <div className='gray_hr'></div>
                  </ul>
                )
              }

            </div>
          </article>

          <div className='row_space'></div>

          <div className='tab_wrap font_grey'>
            <div className='tab_btn focus'><object data="icon_tab_bk.svg" type="image/svg+xml" /><span className='tab_txt pd_left6'>All</span></div>
            <div className='tab_btn'><object data="icon_tab_gray.svg" type="image/svg+xml" /><span className='tab_txt pd_left6'>Work</span></div>
            <div className='tab_btn'><object data="icon_tab_gray.svg" type="image/svg+xml" /><span className='tab_txt pd_left6'>Practice</span></div>
          </div>

          <div className='gray_hr mg_top-1'></div>

          <article className='career'>
            <h3 className='title'>Work ()</h3>
            <div className='gallery_wrap'>
              {
                dataObj && dataObj.work.map((item) =>
                  <div onClick={() => projectAreaClick(item.link)} className='gallery'>
                    <div className='thumbnail'></div>
                    <div className='txt'>
                      <p className='title'><span>{item.icon}</span><b>{item.title}</b></p>
                      <p className='date'>{item.date}</p>
                      <p className='tag'><span>{item.tag}</span></p>
                    </div>
                  </div>
                )
              }
            </div>
          </article>

          <div className='row_space'></div>

          <article className='career'>
            <h3 className='title'>Tools</h3>
            <hr />
            <div className='bullet_list vertlcal_sub'>
              <ul className='box padding12'>
                <li><div><img className='disc' src="icon_disc.png" /><span>Figma</span></div></li>
              </ul>
            </div>
          </article>

          <div className='row_space'></div>

          <article className='career'>
            <h3 className='title'>Awards</h3>
            <hr />
            <div className='toggle_list font_grey'>
              <ul className='box depth1'>
                <li>
                  <div><span className='inline_flex'><img className='toggle' src="icon_toggle.png" /></span><b>에이모</b><span className='pd_left6'>Product Designer</span></div>
                  <div className='italic depth1_date'>2011.02 - 2021.12</div>
                </li>
                <ul className='box hidden depth2'>
                  <li>
                    <div><span>Notion TF</span></div>
                  </li>
                </ul>
                <div className='gray_hr'></div>
              </ul>
            </div>
          </article>

          <div className='row_space'></div>

          <article className='career'>
            <h3 className='title'>Education</h3>
            <hr />
            <div className='bullet_list flex_column font_grey'>
              <ul className='box depth1'>
                <li>
                  <div><span className='inline_flex'><img className='disc' src="icon_disc.png" /></span><b>국립 공주대학교</b></div>
                  <div className='italic depth1_date'>2011.02 - 2021.12</div>
                </li>
                <ul className='box hidden depth2'>
                  <li>
                    <div><span>Notion TF</span></div>
                  </li>
                </ul>
                <div className='gray_hr'></div>
              </ul>
            </div>
          </article>

          <div className='row_space'></div>

          <article className='career'>
            <h3 className='title'>Contact</h3>
            <hr />
            <div className='bullet_list flex_column contact_wrap font_grey'>
              <div className='contact vertlcal_sub'>
                <p><span><img className='disc' src="icon_disc.png" /></span><b >E-mail</b></p>
                <p className='txt pd22'>dreamlikemoment@gmail.com</p>
              </div>
              <div className='contact vertlcal_sub'>
                <p><span><img className='disc' src="icon_disc.png" /></span><b >E-mail</b></p>
                <p className='txt pd22'>dreamlikemoment@gmail.com</p>
              </div>
              <div className='contact vertlcal_sub'>
                <p><span><img className='disc' src="icon_disc.png" /></span><b >E-mail</b></p>
                <p className='txt pd22'>dreamlikemoment@gmail.com</p>
              </div>
              <div className='contact vertlcal_sub'>
                <p><span><img className='disc' src="icon_disc.png" /></span><b >E-mail</b></p>
                <p className='txt pd22'>dreamlikemoment@gmail.com</p>
              </div>
            </div>
          </article>
          <hr />
          <footer className='italic'><b>Latest Updated</b> @{ }년 { }월 { }일</footer>

        </div>
      </section >
    </div >

  );
}

export default App;
