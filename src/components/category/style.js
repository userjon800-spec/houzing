import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icon/chewron.svg";
let Container = styled.div`
  padding: 96px 0px;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  margin-top: 100px;
  position: relative;
`;
let Chewron = styled(arrow)`
  width: 25px;
  height: 25px;
  top: 50%;
  position: absolute;
  padding: 18px;
  border-radius: 50%;
  background: rgba(6, 6, 6, 0.3);
  transform: ${({ left }) => (!left ? "rotate(180deg)" : "rotate(0deg)")};
  right: ${({ left }) => left && "-30px"};
  left: ${({ left }) => !left && "-30px"};
  cursor: pointer;
  z-index: 5;
  color: white;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

let Img = styled.img`
  width: 100%;
  max-height: 575px;
  height: 100%;
  object-fit: cover;
`;
let Wrap = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
let Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.333);
`;
let Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
`;
Content.Title = styled.h1`
  color: inherit;
  font-family: "Monserrat";
  font-style: normal;
  font-size: 44px;
  font-weight: 700;
  line-height: 48px;
`;
Content.Desc = styled.div`
  color: inherit;
  font-family: "Monserrat";
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
Content.Price = styled.div`
  color: inherit;
  font-family: "Monserrat";
  font-style: normal;
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.02em;
`;
export { Container, Chewron, Img, Blur, Content, Wrap };
