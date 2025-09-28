import { Container } from "./style";

function Button({ children, type, onClick, width, heigth, font }) {
  return (
    <Container
      onClick={onClick}
      type={type}
      width={width}
      heigth={heigth}
      font={font}
    >
      {children || "Generic Button"}
    </Container>
  );
}

export default Button;
