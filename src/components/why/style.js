import styled from "styled-components";
import { ReactComponent as discord } from "../../assets/icon/discord.svg";
import { ReactComponent as house } from "../../assets/icon/house.svg";
import { ReactComponent as calculator } from "../../assets/icon/calculator.svg";
import { ReactComponent as maps } from "../../assets/icon/maps.svg";
let Container = styled.div`
  margin: 0 auto;
  background-color: #f5f7fc;
  width: 99.9%;
  margin-top: 96px;
  position: relative;
  padding: 48px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ width }) => width && `${width}`};
  width: 100%;
  align-items: center;
`;
let Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: fit-content;
  justify-content: space-between;
  margin-top: 40px;
  max-width: 1440px;
  width: 100%;
`;
let Icon = styled.div``;
Icon.House = styled(house)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
Icon.Discord = styled(discord)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
Icon.Maps = styled(maps)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
export { Container, Content, Wrapper, Icon };
