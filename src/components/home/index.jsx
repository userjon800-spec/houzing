import { Container } from "./style";
import GenCarousel from "../carousel";
import HouseCard from "../HouseCard";
function Home() {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
    </Container>
  );
}

export default Home;
