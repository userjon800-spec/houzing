import { useContext, useState } from "react";
import { Container, Content, Context } from "./style";
import HouseCard from "../HouseCard/index";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/properties";
function Favorites() {
  let { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  let { search } = useLocation();
  let navigate = useNavigate();
  let [state, dispatch] = useContext(PropertiesContext);
  console.log(state, "state");
  // console.log(data, "datal");
  let { refetch } = useQuery(
     [search],
    async () => {
      let response = await fetch(`${url}favorites`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      return await response.json();
    },
    {
      onSuccess: (data) => {
        console.log(data, "data");
        let yaxshi = data.filter((val) => val.favorites === true);
        dispatch({ type: "refetch", payload: refetch });
        setData(yaxshi || []);
      },
      onError: (error) => {
        console.log(error.message);
      },
    }
  );
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
        {data.length ? (
          data?.map((val) => {
            return (
              <HouseCard
                onClick={() => onSelect(val.id)}
                data={val}
                key={val.id}
              />
            );
          })
        ) : (
          <h1 style={{ textAlign: "center", marginBottom: 45 }}>
            No Data Found
          </h1>
        )}
      </Context>
    </Container>
  );
}

export default Favorites;
