import { useEffect, useState } from "react";
import { Container, Content } from "./style";
import Slider from "react-slick";
import HouseCard from "../HouseCard";
import { useNavigate } from "react-router-dom";
function Recomended({ text }) {
  let [data, setData] = useState([]);
  let { REACT_APP_BASE_URL: url } = process.env;
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    dots: true,
    arrows: true,
    speed: 500,
    appendDots: (dots) => <h1> {dots} </h1>,
  };
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}list`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Content>
        <h1 className="title" style={{ textAlign: "center" }}>
          {text}
        </h1>{" "}
        <br />
        <div className="info" style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        </div>
      </Content>
      <Slider {...settings}>
        {data &&
          data.map((val) => {
            return (
              <HouseCard
                gap={10}
                key={val.id}
                onClick={() => navigate(`/properties/${val?.id}`)}
                data={val}
              />
            );
          })}
      </Slider>
    </Container>
  );
}

export default Recomended;
