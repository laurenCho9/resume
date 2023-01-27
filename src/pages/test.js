import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Test = () => {
  // [변수, update 함수] = useState(""또는 null, false와 같은 초깃값)
  const [tabClick, setTabClick] = useState(0);  // Tab0 : A, Tab1: B
  const [clickText , setClickText] = useState("텍스트1");
  const [sampleDataObj, setSmpleDataObj] = useState(null);

  const [accordionIndex, setAccordionIndex] = useState([]);
  const [style, setStyle ] = useState({display: 'none'});


  const navigate = useNavigate();

  const imgs = [{img:"img1", title:"title1", content:"content1"},{img:"img2", title:"title2", content:"content2"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"},{img:"img3", title:"title3", content:"content3"}];

  const openWindow = (openValue) => {
    openValue === "tabOpen" ? 
      window.open("https://naver.com")
      : 
      window.open('https://naver.com','네이버','width=800,height=500,top=100,left=100,location=no,status=no,scrollbars=yes')
  }

  useEffect(()=>{
    axios.get("sampleData.json", {

    }).then((res)=>setSmpleDataObj(res.data[0].experience))
  },[]); 


  /* 
    7일차
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dataObj, setDataObj] = useState(null);
  const [tab, setTab] = useState("All");

  useEffect(()=>{
    axios.get("data.json", {
    }).then((res)=>setDataObj(res.data))
  },[]); 

  const profileAreaClick = (profileAddress) => {
    window.open(profileAddress);
    // if (clickValue === "a") {
    //   window.open("https://github.com/laurenCho9")
    // } else if (clickValue === "b") {
    //   window.open('https://naver.com', '네이버', 'width=800,height=500,top=100,left=100,location=no,status=no,scrollbars=yes')
    // } else {
    //   window.open("https://naver.com")
    // }
  }

  const tabClick = (tabText) => {
    setTab(tabText);
  }

  return (
    <div className='content'>
      <header className='header'>
        <div className='emoji'></div>
        <h1 className='title'>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 👍</h1>
        <div className='row_space'></div>
      </header>
      <section className='main'>
        <h2 className='title_hidden'>프로필 소개</h2>
        <div className='profile_wrap'>
          <div className='photo'></div>
          <div className='column_space'></div>
          <article className='profile'>
          {dataObj&&dataObj.profile.map((item)=>
            <ul className='box' key={item.headline} onClick={() => profileAreaClick(item.address)}>
              <li className='bold'>{item.headline}</li>
                {!item.address.includes("@") ? 
                  <li className='embed'>
                    <article className='link_wrap'>
                      <p className='title'>{item.title}</p>
                      <p className='txt'>
                        {item.content}
                      </p>
                      <a className='address'><span className={item.icon} />{item.address}</a>
                    </article>
                  <div className='link_img'/>
                  </li>
                  :
                  <li className='address'><span className={item.icon} />{item.address}</li>
                }
            </ul>
          )}
          </article>
        </div>
        <div className='introduce_wrap'>
          <ul className='box introduce'>
            <li className='bold'>AI / ML Researcher , Data Engineering</li>
            <li className='txt'>유익한 사회적 가치를 만드는 개발자 <span className='block'></span>참신한 것을 생각하고 연구하고 만들어 실질적 실현까지 연결하는 개발자</li>
          </ul>
        </div>
        <div className='gray_hr'></div>
        <div className='row_space'></div>
        <h2 className='title_hidden'>경력 사항</h2>
        <div className='career_wrap'>
          <article className='career'>
            <h3 className='title'>Summary</h3>
            <hr />
            {dataObj&&dataObj.summary.map((item)=>
              <div className='bullet_list ratio_1_2' key={item.content}>
                <p className='period padding12'>{item.startDate.slice(0,4)+"."+item.startDate.slice(4,6)} - {item.endDate.slice(0,4)+"."+item.endDate.slice(4,6)}</p>
                <ul className='box padding12'>
                  <li><div><img className='disc' src="icon_disc.png" /><span className='pd_left2'>{item.content}</span></div></li>
                </ul>
              </div>
            )}
          </article>
          <div className='row_space'></div>
          <article className='career'>
            <h3 className='title'>Experience</h3>
            <hr />
            <div className='toggle_list font_grey'>
              <ul className='box depth1'>
                <li>
                  <div><span className='inline_flex'><img className='toggle' src="icon_toggle.png" /></span><b>에이모</b><span className='pd_left6'>Product Designer</span></div>
                  <div className='italic'>2011.02 - 2021.12</div>
                </li>
                <ul className='box hidden depth2'>
                  <li>
                    <div><img className='toggle' src="icon_toggle.png" /><span>Notion TF</span><span className='pd_left6'>2021. 08 - 2021.10</span></div>
                    <div></div>
                  </li>
                  <ul className='box hidden depth3'>
                    <li>
                      <div><span className='inline_flex'><img className='disc' src="icon_disc.png" /></span><span className='pd_left2'>Notion과 Super 서비스를 이용해 에이모 영문 홈페이지 https://en.aimmo.ai 구축</span></div>
                      <div></div>
                    </li>
                    <ul className='box hidden depth4'>
                      <li>
                        <div><img className='circle' src="icon_circle.png" /><span className='pd_left2'>Brush Tool(Semantic) 개발</span></div>
                        <div></div>
                      </li>
                    </ul>
                  </ul>
                </ul>
                <div className='gray_hr'></div>
              </ul>
            </div>
          </article>

          <div className='row_space'></div>

          <div className='tab_wrap font_grey'>
            {dataObj&&dataObj.tabCategory.map((item)=>
              <div className={tab===item.tabName?'tab_btn focus':'tab_btn'} onClick={(e)=>tabClick(e.target.textContent)}><object data="icon_tab.svg" type="image/svg+xml" /><span className='tab_txt pd_left6'>{item.tabName}</span></div>
            )}
          </div>

          <div className='gray_hr mg_top-1'></div>

          <article className='career'>
            <h3 className='title'>{tab&&tab} ()</h3>
            <div className='gallery_wrap'>
              {dataObj&&dataObj.work.map((item)=>
                  tab !== 'All' ? 
                    item.tag === tab ?
                      <div className='gallery'>
                      <div className='thumbnail'></div>
                      <div className='txt'>
                        <p className='title'><span>{item.icon}</span><b> {item.title}</b></p>
                        <p className='date'>{item.startDate} - {item.endDate}</p>
                        <p className='tag'><span>{item.tag}</span></p>
                      </div>
                      </div>
                    :
                    ""
                  :
                  <div className='gallery'>
                    <div className='thumbnail'></div>
                    <div className='txt'>
                      <p className='title'><span>{item.icon}</span><b> {item.title}</b></p>
                      <p className='date'>{item.startDate} - {item.endDate}</p>
                      <p className='tag'><span>{item.tag}</span></p>
                    </div>
                  </div>
              )}
            </div>
          </article>

          <div className='row_space'></div>

          <article className='career'>
            <h3 className='title'>Tools</h3>
            <hr />
            <div className='bullet_list'>
              <ul className='box padding12'>
                {dataObj&&dataObj.tools.map((item,index)=><li><div><img className='disc' src="icon_disc.png" /><span className='pd_left2'>{item}</span></div></li>)}
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
                  <div className='italic'>2011.02 - 2021.12</div>
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
                  <div className='italic'>2011.02 - 2021.12</div>
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
              <div className='contact'>
                <p><span><img className='disc' src="icon_disc.png" /></span><b >E-mail</b></p>
                <p className='txt pd22'>dreamlikemoment@gmail.com</p>
              </div>
              <div className='contact'>
                <p><span><img className='disc' src="icon_disc.png" /></span><b >E-mail</b></p>
                <p className='txt pd22'>dreamlikemoment@gmail.com</p>
              </div>
              <div className='contact'>
                <p><span><img className='disc' src="icon_disc.png" /></span><b >E-mail</b></p>
                <p className='txt pd22'>dreamlikemoment@gmail.com</p>
              </div>
              <div className='contact'>
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


    
    



  */


  // 데이터 axios로 local json 파일 가져오기
  // axios.get("/sampleData.json", {
  // })
  // .then(res=>console.log(res.data))

  // ===== 이후에 App.js로 소스 이동 =====
  /*
    const navigate = useNavigate();
    {
    document.location.pathname==="/" 
      ?
      <div>
        <h1>Test Page로 이동</h1>
        <button onClick={()=>navigate("/test")}>Test Page로 이동</button>
      </div>
      :
      ""
    }
    <Routes>
      <Route path={"/test"} element={<Test />}/>
    </Routes>
  */
    const a = () => {
      const targetNode = document.getElementById("target");
      const fragment = document.createElement("select");

      for (let i = 0; i < 10; i++) {
        const option = document.createElement("option");
        option.text = i + "번째 리스트입니다.";
        fragment.append(option);
      }
      targetNode.append(fragment)
    }

    const menuDepth = (className) => {
      let check = false;
      if(accordionIndex.length===0){
        setAccordionIndex([Number(className), ...accordionIndex])
      } else {
        let filter = accordionIndex.map((item)=>{
          if(item === Number(className)){
            check = true
          } else {
            return item;
          }
        })
        
        filter = filter.filter((item)=>{return item!==undefined})
        console.log("filter :: ",filter)
        if(filter.length===1&&filter[0]===undefined){
          setAccordionIndex([]);
        } else {
          if(check === true){
            setAccordionIndex(filter);
            check = false
          } else {
            setAccordionIndex([Number(className), ...filter]);
          }
        }
        
        //filter[0] === undefined ? setAccordionIndex([]) : setAccordionIndex([Number(className), ...filter]);
      }
    }

  return (
    <div>
      <h1>OpenWidnow</h1>
      <button onClick={()=>openWindow("tabOpen")}>탭 오픈</button>
      <button onClick={()=>openWindow("popupOpen")}>팝업 오픈</button>

      <h1>img, title, content</h1>
      {/* {console.log(imgs)} 
      {
        imgs.map((item,index)=><div key={index}>{item.img +"///"+ item.title +"///"+ item.content}</div>)
      } */}

      <h1>app page로 이동</h1>
      <button onClick={()=>navigate("/")}>app page로 이동</button>

      <div>
        <label style={clickText==="텍스트1" ? {color:"red"}:{color:"black"}} onClick={(e)=>setClickText(e.target.textContent)}>텍스트1</label>
        <label style={clickText==="텍스트2" ? {color:"red"}:{color:"black"}} onClick={(e)=>setClickText(e.target.textContent)}>텍스트2</label>
        <label style={clickText==="텍스트3" ? {color:"red"}:{color:"black"}} onClick={(e)=>setClickText(e.target.textContent)}>텍스트3</label>
      </div>
      <div>
          <div id={"target"}>
          </div>
          <button onClick={()=>a()}>추가</button>
      </div>
        <div>
          <div>
              <div>
                  <label onClick={()=>setTabClick(0)} style={{border:"3px solid red"}}>A</label><label onClick={()=>setTabClick(1)} style={{border:"3px solid red"}}>B</label>
                  {tabClick === 0 ?
                    <div>
                      A
                    </div>
                  :
                    <div>
                      B
                    </div>
                  }
              </div>
          </div>
      </div> 
      {sampleDataObj&&sampleDataObj.map((item, index)=>
        <div key={index}> 
        {console.log(accordionIndex)}
          {!item.title? "" : item.title.map((item) => <div key={item+index} className={index} onClick={(e)=>menuDepth(e.target.className)}>1. {item}</div>)}
          {!item.subTitle? "" : item.subTitle.map((item) => <div key={item+index} style={!accordionIndex.includes(index) ? style : {display:""}} onClick={(e)=>menuDepth(e.target.className)}>2. {item}</div>)}
          {!item.content? "" : item.content.map((item) => <div key={item+index}>3. {item}</div>)}
          {!item.subContent? "" : item.subContent.map((item) => <div key={item+index}>4. {item}</div>)}
          <hr/>
        </div>
      )}
    </div>
  )
}

export default Test