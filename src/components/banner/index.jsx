import { Container, Img, Blur, Content } from "./style";
import img1 from "../../assets/img/home2.jpg";
import Button from "../generics/button";

function Banner() {
  return (
    <Container>
      <Img src={img1} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail is  the Week's Most Popular Home
        </Content.Title>
        <Button>Read More</Button>
      </Content>
    </Container>
  );
}

export default Banner;
