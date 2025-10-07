import styled from "styled-components";
let Container = styled.div`
  height: 575px;
  position: relative;
`;

let Img = styled.img`
  width: 100%;
  max-height: 575px;
  height: 100%;
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
  font-family: "Monserrat", sans-serif;
  font-style: normal;
  width: 100%;
  max-width: 556px;
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
`;
export { Container, Img, Blur, Content };
