import { useEffect, useState } from "react";
import { Container, Content } from "./style";
import Slider from "react-slick";
import HouseCard from "../HouseCard";
function Recomended({text}) {
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
        <h1 className="title">{text}</h1> <br />
        <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur</div>
      </Content>
      <Slider {...settings}>
        {data &&
          data.map((val) => {
            return <HouseCard data={val} />;
          })}
      </Slider>
    </Container>
  );
}

export default Recomended;
