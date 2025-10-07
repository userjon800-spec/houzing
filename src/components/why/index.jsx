import { Container, Content, Wrapper, Icon } from "./style";

function Why() {
  return (
    <Container>
      <Content width={"1440px"}>
        <h1 className="title">Why Choose Us</h1> <br />
        <div className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        </div>
      </Content>
      <Wrapper>
        <Content width={"235px"}>
          <Icon.Discord />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content width={"235px"}>
          <Icon.House />
          <div className="subTitle">Wide Renge Of Properties</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content width={"235px"}>
          <Icon.Calculator />
          <div className="subTitle">Financing Made Easy</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content width={"235px"}>
          <Icon.Maps />
          <div className="subTitle">See Neighborhoods</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Why;
