import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../generics";
import {
  Container,
  ContainerMain,
  Link,
  Logo,
  Menu,
  Section,
  Wrapper,
} from "./style";
import logo from "../../assets/img/logo.png";
import { navbar } from "../../utils/navbar";
import Filter from "../filter";
import Footer from "../footer";
import { Dropdown } from "antd";
function Navbar() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let onClick = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate("/home");
    } else {
      navigate(`${name}`);
    }
  };
  let menu = (
    <Menu>
      <Menu.Item data-name="profile" onClick={onClick}>
        Profile
      </Menu.Item>
      <Menu.Item data-name="my-properties" onClick={onClick}>
        Properties
      </Menu.Item>
      <Menu.Item data-name="favorites" onClick={onClick}>
        Favorites
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClick}>
        Log out
      </Menu.Item>
    </Menu>
  );
  return (
    <Container>
      <ContainerMain>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo={"true"}>
            <Logo src={logo}></Logo>
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, i) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    to={path}
                    key={i}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {token ? (
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
                trigger="click"
              >
                <Button type={"dark"}>
                  <div>My profile</div>
                </Button>
              </Dropdown>
            ) : (
              <Button onClick={() => navigate("/signin")} type={"dark"}>
                Log in
              </Button>
            )}
          </Section>
        </Wrapper>
      </ContainerMain>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Navbar;
