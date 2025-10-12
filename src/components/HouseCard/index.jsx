import { Container, Content, Details, Divider, Icons, Img } from "./style";

function HouseCard({ data, gap, onClick }) {
  if (!data) return null;
  let {
    attachments,
    address,
    description,
    city,
    country,
    houseDetails,
    salePrice,
    price,
    category,
  } = data;
  return (
    <Container onClick={onClick} gap={gap}>
      <Img
        src={
          attachments[0]?.imgPath ??
          "https://t3.ftcdn.net/jpg/14/38/90/96/360_F_1438909678_pEFxCNIuz0SQZ4ZcEwXkPqByYVbZgJVk.jpg"
        }
        alt="rasm"
      />
      <Content>
        <div className="subTitle inline">
          {city},{country}, {description}{" "}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"} -{" "}
          {category?.name || "Category"} - {houseDetails.room || 0} rooms{" "}
        </div>
        <Details>
          <Details.Item>
            {" "}
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0} </div>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Garage />
            <div className="info">Garage {houseDetails?.garage || 0} </div>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Ruler />
            <div className="info">Ruler {houseDetails?.area || 0}kv </div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer={"true"}>
        <Details.Item footer={"true"}>
          <div className="info">${salePrice || 0}/mo</div>
          <div className="subTitle">${price || 0}/mo</div>
        </Details.Item>
        <Details.Item row={"true"}>
          <Icons.Keng />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
}
export default HouseCard;
