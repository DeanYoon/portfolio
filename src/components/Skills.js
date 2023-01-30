import styled from "styled-components";
import { AboutmeTitle } from "./Aboutme";
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
