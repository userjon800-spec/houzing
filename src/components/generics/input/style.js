import styled from "styled-components";

let Container = styled.input`
  border-radius: 4px;
  min-width: 120px;
  outline: none;
  font-size: ${({ font }) => (font ? font + "px" : "14px")};
  height: ${({ heigth }) => (heigth ? heigth + "px" : "44px")};
  width: ${({ width }) => (width ? width + "px" : "100%")};
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
  ::first-letter {
    text-transform: uppercase;
  }
  :focus {
    border: 1px solid #0061df;
  }
`;

let Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width + "px" : "100%")};
  display: flex;
  align-items: center;
`;
let Icon = styled.div`
  position: absolute;
  transform: translate(-50%, 50%);
  left: 10px;
`;

export { Container, Wrapper, Icon };
