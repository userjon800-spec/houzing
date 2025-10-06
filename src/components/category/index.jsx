import { useEffect, useState } from "react";
import { Container } from "./style";
import Slider from "react-slick";
import CategoryCard from "../categoryCard";
import { useNavigate } from "react-router-dom";
function Category() {
  let { REACT_APP_BASE_URL: url } = process.env;
  let navigate = useNavigate()
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",  
    slidesToShow: 3,
    dots: true,
    arrows: true,
    speed: 500,
    appendDots: (dots)=> <h1> {dots} </h1>,
  };
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}category`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <Container>
      <Slider  {...settings}>
        {data &&
          data.map((val) => {
            return <CategoryCard onClick={()=> navigate(`/properties?category=${val.id}`)} data={val} />;
          })}
      </Slider>
    </Container>
  );
}

export default Category;