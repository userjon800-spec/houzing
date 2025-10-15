import { AntTable, Container, Icons, User, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../generics";
import { useQuery } from "react-query";
import { useState } from "react";
import { toast } from "react-toastify";
function Profile() {
  let { search } = useLocation();
  let { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  let { refetch } = useQuery([search], () => {
    return fetch(`${url}me`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  });
  let onDel = (id) => {
    fetch(`${url}me/${id}`, { method: "DELETE" }).then((res) => {
      if (res.status === 200) {
        toast.success("Succes fully deleted");
        refetch();
      }
    });
  };
  let column = [
    {
      title: "Listing Title",
      render: (data) => (
        <User>
          <User.Img
            src={
              (data?.attachments && data?.attachments[0]?.imgPath) ||
              "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            }
          />
          <User flex={"true"}>
            <div className="subTitle">
              {" "}
              {data.country} {data.address}
            </div>
            <div className="info">
              {data.city} {data.region}{" "}
            </div>
            <div className="info">
              <del>{data.salePrice || 0}</del> $
            </div>
          </User>
          <div style={{ marginLeft: "auto" }}>
            <Button>For sale</Button>
          </div>
        </User>
      ),
    },
    {
      title: "Year build",
      render: (data) => <span>{data?.houseDetails?.yearBuilt || 2008}</span>,
      key: "houseDetails.yearBuilt",
      width: 100,
    },
    {
      title: "Email",
      render: (data) => (
        <span>{data?.user?.email || "prowerka@example.com"}</span>
      ),
      key: "email",
    },
    {
      title: "Price",
      key: "price",
      render: (data) => <span>{data.price}$</span>,
      width: 130,
    },
    {
      title: "Action",
      width: 135,
      key: "email",
      render: (data) => {
        return (
          <div>
            <Icons.Edit
              onClick={(e) => {
                e.stopPropagation();
                navigate(`edit-house/${data.id}`);
              }}
            />{" "}
            <Icons.Delete
              onClick={(e) => {
                e.stopPropagation();
                onDel(data.id);
              }}
            />{" "}
          </div>
        );
      },
    },
  ];
  return (
    <Wrapper>
      <User>
        <div className="title">My Profile</div>{" "}
        <div style={{ marginLeft: "auto" }}>
          <Button onClick={() => navigate("new-house")}>Add House</Button>
        </div>
      </User>
      <Container>
        <AntTable
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`);
              },
            };
          }}
          dataSource={data}
          columns={column}
        />
      </Container>
    </Wrapper>
  );
}
export default Profile;
