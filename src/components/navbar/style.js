import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContainerMain = styled.div`
  display: flex;
  background: var(--colorPrimary);
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: var(--padding);
  height: 64px;
  width: 100%;
  font-size: 16px;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #0617ffff;
  }
`;
const Logo = styled.img`
  width: 30px;
  margin-right: 12px;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: white;
`;
const Menu = styled.div`
  width: 177px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 16px;
  gap: 16px;
  border-radius: 5px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.div`
  font-family: "Montserrat",sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #000000;
`;
export { Container, Wrapper, Section, Logo, Link, ContainerMain, Menu };
