/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Content, Context } from "./style";
import HouseCard from "../HouseCard/index";
import { useLocation, useNavigate } from "react-router-dom";
function Properties() {
  let { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  let { search } = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}list${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [search]);
  let onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <Container>
      <Content>
        <h1 style={{ textAlign: "center" }} className="title">
          Properties
        </h1>{" "}
        <br />
        <div style={{ textAlign: "center" }} className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        </div>
      </Content>
      <Context>
        {data &&
          data?.map((val) => {
            return (
              <HouseCard
                onClick={() => onSelect(val.id)}
                data={val}
                key={val.id}
              />
            );
          })}
      </Context>
    </Container>
  );
}

export default Properties;
