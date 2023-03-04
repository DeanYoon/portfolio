import styled from "styled-components";
import frontendImg from "../img/frontend.png";
import backendImg from "../img/backend.png";
import deployImg from "../img/deploy.png";
import vcImg from "../img/vc.png";
const AboutmeTitle = styled.div`
  font-size: 60px;
  border-bottom: 1px solid black;
  font-weight: 1000;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const SkillsTitle = styled(AboutmeTitle)`
  margin-bottom: 30px;
`;
const SkillsBoxes = styled.div`
  width: 1000px;
  columns: 3;
  column-gap: 10px;
  max-height: 900px;
`;
const SkillsBox = styled.div`
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
const SkillsBoxTitle = styled.div`
  color: tomato;
  font-weight: bold;
`;

function Skills() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Skills;
