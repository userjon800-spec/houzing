import styled from "styled-components";
let getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid white",
        color: "white",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "none",
        color: "white",
      };
    case "light":
      return {
        background: "#ffffff",
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "white",
      };
  }
};
let getWidth = ({ width }) => {
  if (!width) return "130px";
  else if (`${width}`.includes("%")) return "100%";
  else return `${width}px`;
};
let Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: ${({ font }) => (font ? font + "px" : "14px")};
  height: ${({ heigth }) => (heigth ? heigth + "px" : "44px")};
  width: ${getWidth};
  ${getType}
  :active {
    opacity: 0.7;
  }
`;
export { Container };
