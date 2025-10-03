import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icon/chewron.svg";
let Container = styled.div`
  height: 571px;
  position: relative;
`;
let Chewron = styled(arrow)`
  width: 25px;
  height: 25px;
  top: 50%;
  position: absolute;
  padding: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.19);
  transform: ${({ left }) => (!left ? "rotate(180deg)" : "rotate(0deg)")};
  right: ${({ left }) => left && "20px"};
  left: ${({ left }) => !left && "20px"};
  cursor: pointer;
  z-index: 5;
  color: white;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

let Img = styled.img`
  width: 100%;
  height: 571px;
  object-fit: cover;
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
export { Container, Chewron, Img, Blur, Content };
