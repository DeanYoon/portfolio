import styled from "styled-components";
import { Wrapper, SkillsTitle } from "./Skills";
import pinterestImg from "../img/pinterest.png";
import todoImg from "../img/todoList.gif";
import drawingImg from "../img/drawing.png";

const ProjectWrapper = styled(Wrapper)`
  background-color: #f1592a;
`;
const ProjectsTitle = styled(SkillsTitle)`
  text-align: center;
`;
const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  position: inherit;
  margin-bottom: 40px;
  h1 {
    margin-bottom: 5px;
  }
  span {
    z-index: 0;
    color: black;
  }
`;
const ProjectBoxContents = styled.div`
  display: flex;
  margin-top: 20px;
  img {
    width: 500px;
    border-radius: 20px;
  }
`;
const ProjectBoxContentsBox = styled.div`
  width: 500px;
  margin-left: 30px;

  ul {
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      margin-bottom: 14px;
      .Project__detail__title {
        width: 100px;
        margin-right: 10px;
      }
      .Project__detail__content {
        width: 300px;
      }
    }
  }
`;

function Projects() {
  return (
    <ProjectWrapper>
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
                데이터의 장단점에 대해 이해하고 필요한 데이터를 populate하는 법,
                비동기처리에 대해 고민해볼 수 있었습니다.
              </p>

              <p>
                구현하려는 서비스에 적합한 DB의 구조에 대해서도 공부하고 싶다는
                생각을 하게 되었고, 백엔드 공부 또한 시작하는 계기가 되었습니다.
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
                localStorage를 활용하여 간단한 백엔드를 구성하였고, 날씨와 위치,
                미세먼지 API를 활용하여 상단에 구성하였습니다. 자연스러우면서
                역동적인 느낌을 주고 싶어서 리스트 추가 및 제거시 움직이는
                애니메이션을 추가 해봤습니다.
              </p>

              <p>
                API활용방법에 대해 익히게 되었고, CSS 움직임 구현을 통해 다양한
                애니메이션을 더 공부해보고 싶은 생각이 들었습니다.
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
                window98 버젼의 그림판을 모티브로 디자인 하였고, 자연스러운 버튼
                구현 및 이미지 다운로드 업로드하는 과정을 공부 할 수 있었습니다.
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
    </ProjectWrapper>
  );
}

export default Projects;
