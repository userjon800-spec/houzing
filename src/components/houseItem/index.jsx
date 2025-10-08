import { useParams } from "react-router-dom";
import { Container } from "./style";
import { useEffect, useState } from "react";
// import { useRequest } from "../../hooks/useRequest";

function HouseItem() {
  let params = useParams();
  let { REACT_APP_BASE_URL: url } = process.env;

  const [data, setData] = useState({});
  // let request = useRequest();
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
        })
        .catch((error) => console.log(error));

    // request({ url: `list${params?.id}` })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);
  return <Container>HouseItem</Container>;
}

export default HouseItem;
