import styled from "styled-components";
import HeadBackgroundImg from "../img/developer.png";

export const MasterheadWrapper = styled.div`
  color: white !important;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  text-shadow: 1px 1px 0px #000, -1px -1px 0px #fff;
`;
export const MasterheadTitle = styled.div`
  font-size: 50px;
  padding: 30px 0;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const MasterheadDescription = styled.div`
  font-size: 35px;
  padding: 30px 0;
  text-align: center;
`;

function Masterhead() {
  return (
    <MasterheadWrapper backgroundImage={HeadBackgroundImg}>
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
    </MasterheadWrapper>
  );
}

export default Masterhead;
