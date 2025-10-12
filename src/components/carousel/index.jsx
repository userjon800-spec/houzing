import { useRef } from "react";
import { Container, Chewron, Img, Blur, Content } from "./style";
import { Carousel } from "antd";
import img1 from "../../assets/img/home2.jpg";
import img2 from "../../assets/img/home1.jpg";

function GenCarousel() {
  let slider = useRef();
  let onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <Container>
      <Chewron data-name="right" onClick={onMove} left={"true"} />
      <Carousel ref={slider} infinite={false}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price>5,250/month</Content.Price>
      </Content>
      <Chewron data-name="left" onClick={onMove} right={"true"} />
    </Container>
  );
}

export default GenCarousel;
