import styled from "styled-components";
let Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  margin: ${({ gap }) => {
    return gap && `0 ${gap}px`;
  }};
  max-height: 380px;
  overflow: hidden;
  min-height: 350px;
  border-radius: 6px;
  position: relative;
  background: white;
  border: 1px solid #e6e9ec;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
let Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
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
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
`;

let Icons = styled.div``;

export { Container, Img, Content, Icons, Blur };
