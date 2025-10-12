import { useParams } from "react-router-dom";
import {
  Container,
  Contents,
  Icons,
  Section,
  Details,
  Icon,
  Description,
  Wrapper,
  User,
} from "./style";
import { useEffect, useState } from "react";
import { Button, Input } from "../generics";
import Recomended from "../recomended";
import noUser from "../../assets/img/ishowSpeed.png";
import { Checkbox } from "antd";
import Yandex from "../generics/yandex";
function HouseItem() {
  let params = useParams();
  let { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState({});
  useEffect(() => {
    params?.id &&
      fetch(`${url}list/?id=${params?.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data || {});
          window.scrollTo(0, 0);
        })
        .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);
  return (
    <>
      <Wrapper>
        <Container flex={4}>
          <Section>
            <div>
              <Contents.Title width={"fit-content"} large={"true"}>
                {data[0]?.name}
              </Contents.Title>
              <div className="info">
                {data[0]?.city}, {data[0]?.address}, {data[0]?.country}
              </div>
            </div>
            <Contents flex={"true"}>
              <Icons.Share /> <Icons.Title>Share</Icons.Title>
              <Icons.Loves /> <Icons.Title>Save</Icons.Title>
            </Contents>
          </Section>
          <Section>
            <Details>
              <Icon.Bed />
              <Details.Title>
                Bed {data[0]?.houseDetails?.beds || 0}
              </Details.Title>
              <Icon.Bath />
              <Details.Title>
                Bath {data[0]?.houseDetails?.bath || 0}
              </Details.Title>
              <Icon.Garage />
              <Details.Title>
                Garage {data[0]?.houseDetails?.garage || 0}
              </Details.Title>
              <Icon.Ruler />
              <Details.Title>
                Ruler {data[0]?.houseDetails?.area || 0}kv
              </Details.Title>
            </Details>
            <Contents>
              <Contents flex={"true"} style={{ gap: 13 }}>
                <del>${data[0]?.salePrice || 0}/mo</del>{" "}
                <h2>${data[0]?.price || 0}/mo</h2>{" "}
              </Contents>
              <div className="info">{data[0]?.user?.first_name}</div>
            </Contents>
          </Section>
          <Contents.Title width={"fit-content"}>Description</Contents.Title>
          <Description>{data[0]?.description}</Description>
          <Contents.Title>Features</Contents.Title>
          <Section>
            <Container style={{ justifyContent: "space-around" }} gap={8}>
              <Section>
                <Details.Title>Air Conditioning</Details.Title>
              </Section>
              <Section>
                <Details.Title>Barbeque</Details.Title>
              </Section>
              <Section>
                <Details.Title>Dryer</Details.Title>
              </Section>
              <Section>
                <Details.Title>Gym</Details.Title>
              </Section>
            </Container>
            <Container style={{ justifyContent: "space-around" }} gap={8}>
              <Section>
                <Details.Title>Lawn</Details.Title>
              </Section>
              <Section>
                <Details.Title>Laundry</Details.Title>
              </Section>
              <Section>
                <Details.Title>Microwave</Details.Title>
              </Section>
              <Section>
                <Details.Title>Outdoor Shower</Details.Title>
              </Section>
            </Container>
            <Container style={{ justifyContent: "space-around" }} gap={8}>
              <Section>
                <Details.Title>Refrigerator</Details.Title>
              </Section>
              <Section>
                <Details.Title>Sauna</Details.Title>
              </Section>
              <Section>
                <Details.Title>Swimming Pool</Details.Title>
              </Section>
              <Section>
                <Details.Title>TV Cable</Details.Title>
              </Section>
            </Container>
            <Container style={{ justifyContent: "space-around" }} gap={8}>
              <Section>
                <Details.Title>Washer</Details.Title>
              </Section>
              <Section>
                <Details.Title>WiFi</Details.Title>
              </Section>
              <Section>
                <Details.Title>Window Coverings</Details.Title>
              </Section>
              <Section>
                <Details.Title>Dining room</Details.Title>
              </Section>
            </Container>
          </Section>
        </Container>
        <Container flex={1} className="user">
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={noUser} alt={"user-img"} />
            <Contents>
              <div className="subTitle">Xamdamboyev Javohir</div>
              <div className="info" style={{ textAlign: "left" }}>
                +998 93 354 78 54
              </div>
            </Contents>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}></Button>
        </Container>
      </Wrapper>
      <Yandex />
      <Recomended text={"Similar"} />
    </>
  );
}
export default HouseItem;