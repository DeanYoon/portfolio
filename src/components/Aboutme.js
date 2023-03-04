import styled from "styled-components";
import {
  faUser,
  faCalendar,
  faPhone,
  faMailBulk,
  faPencil,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  background-color: #bfd7ea;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;
const AboutmeTitle = styled.div`
  font-size: 60px;
  border-bottom: 1px solid black;
  font-weight: 1000;
`;
const AboutmeBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: 60px;
`;
const AboutmeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 30px;
  width: 300px;
`;
const AboutmeInfoWrapper = styled.div`
  padding: 10px 20px;
`;
const AboutmeInfoTitle = styled.div`
  font-size: 20px;
`;
const AboutmeInfoDescription = styled.div``;

function Aboutme() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Aboutme;
