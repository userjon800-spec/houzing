import { Container } from "./style";
import GenCarousel from "../carousel/index";
import Category from "../category";

function Home() {
  return (
    <Container>
      <GenCarousel />
      <Category />
    </Container>
  );
}

export default Home;
