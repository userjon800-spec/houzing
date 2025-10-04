import { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard/index";
import { useLocation } from "react-router-dom";
function Properties() {
  let { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  let {search} = useLocation()
  useEffect(() => {
    fetch(`${url}list${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [search]);
  return (
    <Container>
      {data &&
        data?.map((val) => {
          return <HouseCard data={val} key={val.id} />;
        })}
    </Container>
  );
}

export default Properties;
