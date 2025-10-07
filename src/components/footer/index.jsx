import { Container, Content } from "./style";

function Footer() {
  return (
    <Container>
      <Content width={"295px"}>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          Yettikent ko'chasi, Uztelecom binosi, chapdagi eshik, IT center o'quv
          markazi
        </Content.Item>
        <Content.Item>+998 93)354-78-54</Content.Item>
        <Content.Item>userjon800@gmail.com</Content.Item>
        <Content.Item></Content.Item>
      </Content>
      <Content width={"fit-content"}>
        <Content.Title>Discover</Content.Title>
        <Content.Item>uzbekistan</Content.Item>
        <Content.Item>korea</Content.Item>
        <Content.Item>usa</Content.Item>
        <Content.Item>russia</Content.Item>
      </Content>
      <Content width={"152px"}>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>Frontend</Content.Item>
        <Content.Item>Backend</Content.Item>
        <Content.Item>Mobile</Content.Item>
        <Content.Item>Roboto texnika</Content.Item>
        <Content.Item>Kompyuter Sciense</Content.Item>
      </Content>
      <Content width={"172px"}>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>t.me/Xamdamb0yev</Content.Item>
        <Content.Item>inst/@j9v0h1r</Content.Item>
        <Content.Item>
          gitHub <br /> (userjon800-spec)
        </Content.Item>
      </Content>
    </Container>
  );
}

export default Footer;
