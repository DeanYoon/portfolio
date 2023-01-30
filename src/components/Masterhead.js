import styled from "styled-components";

export const Masterhead = styled.div`
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
