import "./App.css";
import styled from "styled-components";
import { HeaderBox, HeaderMenu, HeaderTab } from "./header";
import {
  Masterhead,
  MasterheadTitle,
  MasterheadDescription,
} from "./Masterhead";
import {
  Aboutme,
  AboutmeBody,
  AboutmeInfoDescription,
  AboutmeInfoTitle,
  AboutmeInfoWrapper,
  AboutmeTitle,
  AboutmeWrapper,
} from "./Aboutme";
import {
  faUser,
  faCalendar,
  faLocation,
  faPhone,
  faMailBulk,
  faPencil,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import frontend from "./img/frontend.png";
import backend from "./img/backend.png";
import deploy from "./img/deploy.png";
import vc from "./img/vc.png";

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const SkillsTitle = styled(AboutmeTitle)`
  margin-bottom: 30px;
`;
export const SkillsBoxes = styled.div`
  width: 1000px;
  columns: 3;
  column-gap: 10px;
  max-height: 900px;
`;
export const SkillsBox = styled.div`
  border: 1px solid black;
  padding: 20px;
  border-radius: 20px;
  width: 250px;
  gap: 30px;
  font-size: 20px;
  break-inside: avoid;
  margin-bottom: 30px;
  img {
    width: 250px;
  }
`;
export const SkillsBoxTitle = styled.div`
  color: tomato;
  font-weight: bold;
`;

function App() {
  return (
    <div id="root">
      <HeaderTab>
        <HeaderMenu>Dean's Portfolio</HeaderMenu>
        <HeaderBox>
          <HeaderMenu>About me</HeaderMenu>
          <HeaderMenu>Skills</HeaderMenu>
          <HeaderMenu>Archiving</HeaderMenu>
          <HeaderMenu>Projects</HeaderMenu>
          <HeaderMenu>Career</HeaderMenu>
        </HeaderBox>
      </HeaderTab>
      <Masterhead>
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
              <AboutmeInfoDescription>010-6300-8078</AboutmeInfoDescription>
            </AboutmeInfoWrapper>
          </AboutmeWrapper>
          <AboutmeWrapper>
            <FontAwesomeIcon size="2x" icon={faMailBulk} />

            <AboutmeInfoWrapper>
              <AboutmeInfoTitle>이메일</AboutmeInfoTitle>
              <AboutmeInfoDescription>
                yjs6300.hanyang.ac.kr
              </AboutmeInfoDescription>
            </AboutmeInfoWrapper>
          </AboutmeWrapper>
          <AboutmeWrapper>
            <FontAwesomeIcon size="2x" icon={faPencil} />

            <AboutmeInfoWrapper>
              <AboutmeInfoTitle>학력</AboutmeInfoTitle>
              <AboutmeInfoDescription>
                한양대학교(ERICA)
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
            <img src={frontend} />
          </SkillsBox>

          <SkillsBox>
            <SkillsBoxTitle>Backend</SkillsBoxTitle>
            <img src={backend} />
          </SkillsBox>

          <SkillsBox>
            <SkillsBoxTitle>Version Control</SkillsBoxTitle>
            <img src={vc} />
          </SkillsBox>

          <SkillsBox>
            <SkillsBoxTitle>Deployment</SkillsBoxTitle>
            <img src={deploy} />
          </SkillsBox>
        </SkillsBoxes>
      </Skills>
    </div>
  );
}

export default App;
