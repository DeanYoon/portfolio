import styled from "styled-components";
import { Skills, SkillsTitle } from "./Skills";
export const Projects = styled(Skills)`
  background-color: greenyellow;
`;
export const ProjectsTitle = styled(SkillsTitle)`
  text-align: center;
`;
export const ProjectBox = styled.div`
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
export const ProjectBoxContents = styled.div`
  display: flex;
  margin-top: 20px;
  img {
    width: 500px;
    border-radius: 20px;
  }
`;
export const ProjectBoxContentsBox = styled.div`
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
