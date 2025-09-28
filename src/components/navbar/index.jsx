import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerMain,
  Link,
  Logo,
  Section,
  Wrapper,
} from "./style";
import logo from "../../assets/img/logo.png";
import { navbar } from "../../utils/navbar";
function Navbar() {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerMain>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo src={logo}></Logo>
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path }, i) => {
              return (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  to={path}
                  key={i}
                >
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <button>Sig in</button>
          </Section>
        </Wrapper>
      </ContainerMain>
      <Outlet />
    </Container>
  );
}

export default Navbar;
