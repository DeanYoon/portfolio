import "./App.css";
import styled from "styled-components";
import {
  frontendImg,
  backendImg,
  deployImg,
  vcImg,
  pinterestImg,
  HeadBackgroundImg,
  todoImg,
  drawingImg,
} from "./components/images";
import { HeaderBox, HeaderMenu, HeaderTab } from "./components/header";
import {
  Masterhead,
  MasterheadTitle,
  MasterheadDescription,
} from "./components/Masterhead";
import {
  Aboutme,
  AboutmeBody,
  AboutmeInfoDescription,
  AboutmeInfoTitle,
  AboutmeInfoWrapper,
  AboutmeTitle,
  AboutmeWrapper,
} from "./components/Aboutme";
import {
  Skills,
  SkillsBox,
  SkillsBoxes,
  SkillsBoxTitle,
  SkillsTitle,
} from "./components/Skills";

import {
  Projects,
  ProjectsTitle,
  ProjectBox,
  ProjectBoxContents,
  ProjectBoxContentsBox,
} from "./components/Projects";
import {
  faUser,
  faCalendar,
  faPhone,
  faMailBulk,
  faPencil,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <HeaderTab>
        <HeaderMenu>Dean's Portfolio</HeaderMenu>
        <HeaderBox>
          <HeaderMenu>About me</HeaderMenu>
          <HeaderMenu>Skills</HeaderMenu>
          <HeaderMenu>Projects</HeaderMenu>
          <HeaderMenu>Career</HeaderMenu>
        </HeaderBox>
      </HeaderTab>

      <Masterhead backgroundImage={HeadBackgroundImg}>
        <MasterheadTitle>
          - 윤재승 -<br />
          웹개발 포트폴리오
        </MasterheadTitle>
        <hr style={{ width: "800px", margin: 0 }} />
        <MasterheadDescription>
          안녕하세요.
          <br />
          <br /> 프론트엔드 웹 개발자 지망생 윤재승 입니다. <br />
        </MasterheadDescription>
      </Masterhead>
      <Aboutme>
        <AboutmeTitle>About Me</AboutmeTitle>
        <AboutmeBody>
          <AboutmeWrapper>
            <FontAwesomeIcon size="2x" icon={faUser} />
            <AboutmeInfoWrapper>
              <AboutmeInfoTitle>이름</AboutmeInfoTitle>
              <AboutmeInfoDescription>윤재승</AboutmeInfoDescription>
            </AboutmeInfoWrapper>
          </AboutmeWrapper>
          <AboutmeWrapper>
            <FontAwesomeIcon size="2x" icon={faCalendar} />

            <AboutmeInfoWrapper>
              <AboutmeInfoTitle>생년월일</AboutmeInfoTitle>
              <AboutmeInfoDescription>1997.04.15</AboutmeInfoDescription>
            </AboutmeInfoWrapper>
          </AboutmeWrapper>
          <AboutmeWrapper>
            <FontAwesomeIcon size="2x" icon={faMapLocation} />

            <AboutmeInfoWrapper>
              <AboutmeInfoTitle>주소지</AboutmeInfoTitle>
              <AboutmeInfoDescription>성남시 분당구</AboutmeInfoDescription>
            </AboutmeInfoWrapper>
          </AboutmeWrapper>
          <AboutmeWrapper>
            <FontAwesomeIcon size="2x" icon={faPhone} />

            <AboutmeInfoWrapper>
              <AboutmeInfoTitle>연락처</AboutmeInfoTitle>
              <AboutmeInfoDescription>010-6300-80**</AboutmeInfoDescription>
            </AboutmeInfoWrapper>
          </AboutmeWrapper>
          <AboutmeWrapper>
            <FontAwesomeIcon size="2x" icon={faMailBulk} />

            <AboutmeInfoWrapper>
              <AboutmeInfoTitle>이메일</AboutmeInfoTitle>
              <AboutmeInfoDescription>
                deantube8078@gmail.com{" "}
              </AboutmeInfoDescription>
            </AboutmeInfoWrapper>
          </AboutmeWrapper>
          <AboutmeWrapper>
            <FontAwesomeIcon size="2x" icon={faPencil} />

            <AboutmeInfoWrapper>
              <AboutmeInfoTitle>학력</AboutmeInfoTitle>
              <AboutmeInfoDescription>
                {/* 한양대학교(ERICA) */}
                <br /> 산업경영공학과
              </AboutmeInfoDescription>
            </AboutmeInfoWrapper>
          </AboutmeWrapper>
        </AboutmeBody>
      </Aboutme>
      <Skills>
        <SkillsTitle>SKILLS</SkillsTitle>

        <SkillsBoxes>
          <SkillsBox>
            <SkillsBoxTitle>Frontend</SkillsBoxTitle>
            <img src={frontendImg} />
          </SkillsBox>

          <SkillsBox>
            <SkillsBoxTitle>Backend</SkillsBoxTitle>
            <img src={backendImg} />
          </SkillsBox>

          <SkillsBox>
            <SkillsBoxTitle>Version Control</SkillsBoxTitle>
            <img src={vcImg} />
          </SkillsBox>

          <SkillsBox>
            <SkillsBoxTitle>Deployment</SkillsBoxTitle>
            <img src={deployImg} />
          </SkillsBox>
        </SkillsBoxes>
      </Skills>
      <Projects>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectBox>
          <h1>Pinterest 클론 코딩</h1>
          <span>2022.11 ~ 2022.12 학습용 프로젝트</span>
          <ProjectBoxContents>
            <img src={pinterestImg} />
            <ProjectBoxContentsBox>
              <div>
                <p>
                  Pinterest의 핵심 기능 중 사용자 인증, 게시글 작성, 댓글 작성,
                  동영상 재생, 동영상 및 사용자 프로필 수정 기능을 구현했습니다.
                </p>

                <p>
                  처음으로 MongoDB를 사용해보았는데, json 기반으로 저장되는
                  데이터의 장단점에 대해 이해하고 필요한 데이터를 populate하는
                  법, 비동기처리에 대해 고민해볼 수 있었습니다.
                </p>

                <p>
                  구현하려는 서비스에 적합한 DB의 구조에 대해서도 공부하고
                  싶다는 생각을 하게 되었고, 백엔드 공부 또한 시작하는 계기가
                  되었습니다.
                </p>
              </div>
              <hr />
              <ul>
                <li>
                  <div className="Project__detail__title">주요기능</div>
                  <div className="Project__detail__content">
                    사용자 인증, 게시글 작성, 댓글 작성, 동영상 재생, 동영상 및
                    사용자 프로필 수정
                  </div>
                </li>
                <li>
                  <div className="Project__detail__title">Github</div>
                  <div className="Project__detail__content">
                    <a
                      href="https://github.com/DeanYoon/Deanterest"
                      target="_blank"
                    >
                      https://github.com/DeanYoon/Deanterest
                    </a>
                  </div>
                </li>
                <li>
                  <div className="Project__detail__title">URL</div>
                  <div className="Project__detail__content">
                    <a href="http://deanterest.herokuapp.com/" target="_blank">
                      http://deanterest.herokuapp.com/
                    </a>
                  </div>
                </li>

                <li>
                  <div className="Project__detail__title">Frontend</div>
                  <div className="Project__detail__content">
                    HTML5,CSS3,Pug,Sass
                  </div>
                </li>
                <li>
                  <div className="Project__detail__title">Backend</div>
                  <div className="Project__detail__content">NodeJS,Express</div>
                </li>
                <li>
                  <div className="Project__detail__title">Database</div>
                  <div className="Project__detail__content">MongoDB</div>
                </li>
                <li>
                  <div className="Project__detail__title">Deployment</div>
                  <div className="Project__detail__content">Heroku</div>
                </li>
              </ul>
            </ProjectBoxContentsBox>
          </ProjectBoxContents>
        </ProjectBox>
        <ProjectBox>
          <h1>Animatable Todo List</h1>
          <span>2022.10 ~ 2022.10 학습용 프로젝트</span>
          <ProjectBoxContents>
            <img src={todoImg} />
            <ProjectBoxContentsBox>
              <div>
                <p>
                  JavaScript,Html,CSS 만을 활용하여 투두리스트를 구현하였습니다.
                </p>

                <p>
                  localStorage를 활용하여 간단한 백엔드를 구성하였고, 날씨와
                  위치, 미세먼지 API를 활용하여 상단에 구성하였습니다.
                  자연스러우면서 역동적인 느낌을 주고 싶어서 리스트 추가 및
                  제거시 움직이는 애니메이션을 추가 해봤습니다.
                </p>

                <p>
                  API활용방법에 대해 익히게 되었고, CSS 움직임 구현을 통해
                  다양한 애니메이션을 더 공부해보고 싶은 생각이 들었습니다.
                </p>
              </div>
              <hr />
              <ul>
                <li>
                  <div className="Project__detail__title">주요기능</div>
                  <div className="Project__detail__content">
                    위치,날씨 API , 자연스러운 움직임 구현, 시계, localStorage
                    저장, 비동기처리
                  </div>
                </li>
                <li>
                  <div className="Project__detail__title">Github</div>
                  <div className="Project__detail__content">
                    <a
                      href="https://github.com/DeanYoon/todolist"
                      target="_blank"
                    >
                      https://github.com/DeanYoon/todoList
                    </a>
                  </div>
                </li>
                <li>
                  <div className="Project__detail__title">URL</div>
                  <div className="Project__detail__content">
                    <a
                      href="https://deanyoon.github.io/todolist/"
                      target="_blank"
                    >
                      https://deanyoon.github.io/todoList/
                    </a>
                  </div>
                </li>

                <li>
                  <div className="Project__detail__title">Frontend</div>
                  <div className="Project__detail__content">
                    HTML5, CSS3, NodeJS
                  </div>
                </li>
                <li>
                  <div className="Project__detail__title">Backend</div>
                  <div className="Project__detail__content">X</div>
                </li>
                <li>
                  <div className="Project__detail__title">Database</div>
                  <div className="Project__detail__content">X</div>
                </li>
                <li>
                  <div className="Project__detail__title">Deployment</div>
                  <div className="Project__detail__content">Github</div>
                </li>
              </ul>
            </ProjectBoxContentsBox>
          </ProjectBoxContents>
        </ProjectBox>
        <ProjectBox>
          <h1>Drawing App</h1>
          <span>2022.11 ~ 2022.11 학습용 프로젝트</span>
          <ProjectBoxContents>
            <img src={drawingImg} />
            <ProjectBoxContentsBox>
              <div>
                <p>Canvas를 활용하여 드로잉 앱을 구현하였습니다.</p>

                <p>
                  window98 버젼의 그림판을 모티브로 디자인 하였고, 자연스러운
                  버튼 구현 및 이미지 다운로드 업로드하는 과정을 공부 할 수
                  있었습니다.
                </p>

                <p></p>
              </div>
              <hr />
              <ul>
                <li>
                  <div className="Project__detail__title">주요기능</div>
                  <div className="Project__detail__content">
                    캔버스, 업로드 & 다운로드 , 버튼움직임 구현
                  </div>
                </li>
                <li>
                  <div className="Project__detail__title">Github</div>
                  <div className="Project__detail__content">
                    <a
                      href="https://github.com/DeanYoon/drawing-app"
                      target="_blank"
                    >
                      https://github.com/DeanYoon/drawing-app
                    </a>
                  </div>
                </li>
                <li>
                  <div className="Project__detail__title">URL</div>
                  <div className="Project__detail__content">
                    <a
                      href="https://deanyoon.github.io/drawing-app/"
                      target="_blank"
                    >
                      https://deanyoon.github.io/drawing-app/
                    </a>
                  </div>
                </li>

                <li>
                  <div className="Project__detail__title">Frontend</div>
                  <div className="Project__detail__content">
                    HTML5, CSS3, NodeJS
                  </div>
                </li>
                <li>
                  <div className="Project__detail__title">Backend</div>
                  <div className="Project__detail__content">X</div>
                </li>
                <li>
                  <div className="Project__detail__title">Database</div>
                  <div className="Project__detail__content">X</div>
                </li>
                <li>
                  <div className="Project__detail__title">Deployment</div>
                  <div className="Project__detail__content">Github</div>
                </li>
              </ul>
            </ProjectBoxContentsBox>
          </ProjectBoxContents>
        </ProjectBox>
      </Projects>
    </div>
  );
}

export default App;
