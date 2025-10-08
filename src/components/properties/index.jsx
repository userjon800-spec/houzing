import { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard/index";
import { useLocation,useNavigate } from "react-router-dom";
function Properties() {
  let { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  let {search} = useLocation()
  let navigate = useNavigate()
  useEffect(() => {
    fetch(`${url}list${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  let onSelect =(id)=>{
    navigate(`/properties/${id}`)
  }
  return (
    <Container>
      {data &&
        data?.map((val) => {
          return <HouseCard onClick={()=> onSelect(val.id)} data={val} key={val.id} />;
        })}
    </Container>
  );
}

export default Properties;
