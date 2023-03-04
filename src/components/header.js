import styled from "styled-components";

const HeaderTab = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #ffb900;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 60px;
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
`;

const HeaderBox = styled.div`
  display: flex;
`;

const HeaderMenu = styled.div`
  font-weight: 1000;
  margin: 0 15px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <HeaderTab>
      <HeaderMenu>Dean's Portfolio</HeaderMenu>
      <HeaderBox>
        <HeaderMenu>About me</HeaderMenu>
        <HeaderMenu>Skills</HeaderMenu>
        <HeaderMenu>Projects</HeaderMenu>
        <HeaderMenu>Career</HeaderMenu>
      </HeaderBox>
    </HeaderTab>
  );
}

export default Header;
