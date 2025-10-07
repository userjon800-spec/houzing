import { Container } from "./style";
import GenCarousel from "../carousel/index";
import Category from "../category";
import Recomended from "../recomended";
import Why from "../why";
import Banner from "../banner";

function Home() {
  return (
    <Container>
      <GenCarousel />
      <Recomended text={"Recommended"} />
      <Why />
      <Category />
      <Banner />
      <Recomended text={"Recent Properties for Rent"} />
    </Container>
  );
}

export default Home;
