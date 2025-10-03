import { Container, Content, Details, Divider, Icons, Img } from "./style";

function HouseCard({ url, title, bed, bath, garage, ruler, info }) {
  return (
    <Container>
      <Img
        src={
          url ||
          "https://t3.ftcdn.net/jpg/14/38/90/96/360_F_1438909678_pEFxCNIuz0SQZ4ZcEwXkPqByYVbZgJVk.jpg"
        }
      />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            {" "}
            <Icons.Bed />
            <div className="info">Bed {bed || 0}</div>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Bath />
            <div className="info">Bath {bath || 0} </div>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Garage />
            <div className="info">Garage {garage || 0} </div>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Ruler />
            <div className="info">Ruler {ruler || 0} </div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Keng />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
}
export default HouseCard;