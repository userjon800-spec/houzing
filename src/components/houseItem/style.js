import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icon/share.svg";
import { ReactComponent as loves } from "../../assets/icon/loves.svg";
import { ReactComponent as bad } from "../../assets/icon/bad.svg";
import { ReactComponent as baths } from "../../assets/icon/wanna.svg";
import { ReactComponent as garage } from "../../assets/icon/car.svg";
import { ReactComponent as ft } from "../../assets/icon/lineyka.svg";
let Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}px`};
  ~ .user {
    background: #ffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;
    gap: 24px;
  }
`;
let Wrapper = styled.div`
  width: 100%;
  max-width: var(--width);
  margin: 0px auto 48px auto;
  overflow: hidden;
  display: flex;
`;
let Section = styled.div`
  display: flex;
  justify-content: space-between;
`;
let Contents = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  align-items: end;
  gap: 5px;
`;
Contents.Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  width: 100%;
  max-width: ${({ width }) => (width ? width :null)};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;
let Details = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
`;
Details.Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;
let Icons = styled.div``;
Icons.Share = styled(share)`
  display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 15%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icons.Loves = styled(loves)`
  display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0px 10px 0px 26px;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

Icons.Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
let Icon = styled.div``;
Icon.Bed = styled(bad)``;
Icon.Bath = styled(baths)``;
Icon.Garage = styled(garage)``;
Icon.Ruler = styled(ft)``;
const Description = styled.div`
  margin-top: 16px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  margin-bottom: 48px;
`;
const User = styled.div``;

User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 24px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
`;
ImageContainer.Main = styled.img`
  width: 100%;
  max-width: 580px;
  max-height: 400px;
`;
ImageContainer.Subimg = styled.img`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;
const Blur = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: bold;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;
Blur.Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;
export {
  Container,
  Section,
  Contents,
  Icons,
  Details,
  Icon,
  User,
  Description,
  ImageContainer,
  ImgContainer,
  Blur,
  Wrapper,
};
