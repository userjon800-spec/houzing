/* eslint-disable react-hooks/exhaustive-deps */
import { IconDelete, MenuWrapper, Section, SelectAnt, Wrapper } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../generics";
import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import TextArea from "antd/es/input/TextArea";
function AddHouse() {
  let { REACT_APP_BASE_URL: url } = process.env;
  const [img, setImg] = useState([]);
  const [category, setCategory] = useState([]);
  const [initail, setInitail] = useState({
    houseDetails: {},
    houseAmenitiesto: {},
  });
  const [imgs, setImgs] = useState("");
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}category`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data || []);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    id &&
      fetch(`${url}me/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setImg(data?.attachments);
          setInitail(data || {});
        })
        .catch((error) => console.log(error));
  }, []);
  console.log(initail, "initial");
  let formik = useFormik({
    initialValues: initail,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (id) {
        fetch(`${url}me/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values, attachments: img }),
        }).then((res) => {
          if (res.status === 200) navigate("/profile");
        });
      } else {
        fetch(`${url}me`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values, attachments: img }),
        }).then((res) => {
          if (res.status === 201) navigate("/profile");
        });
      }
    },
  });
  let addImg = () => {
      setImg([
        ...img,
        {
          imgPath: imgs,
          id: `${img.length + Math.floor(Math.random() * 7)}`,
        },
      ]);
      setImgs("");
  };
  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              placeholder={"Country"}
            />
            <Input
              name="region"
              value={formik.values.region}
              onChange={formik.handleChange}
              placeholder={"Region"}
            />
            <Input
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder={"Address"}
            />
            <Input
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              placeholder={"City"}
            />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <Input
              name="houseDetails.area"
              type="number"
              value={formik.values.houseDetails.area}
              onChange={formik.handleChange}
              placeholder={"Area"}
            />
            <Input
              name="houseDetails.bath"
              type="number"
              value={formik.values.houseDetails.bath}
              onChange={formik.handleChange}
              placeholder={"Bath"}
            />
            <Input
              name="houseDetails.beds"
              type="number"
              value={formik.values.houseDetails.beds}
              onChange={formik.handleChange}
              placeholder={"Beds"}
            />
            <Input
              name="houseDetails.garage"
              type="number"
              value={formik.values.houseDetails.garage}
              onChange={formik.handleChange}
              placeholder={"Garage"}
            />
            <Input
              name="houseDetails.room"
              type="number"
              value={formik.values.houseDetails.room}
              onChange={formik.handleChange}
              placeholder={"Room"}
            />
            <Input
              name="houseDetails.yearBuilt"
              type="number"
              value={formik.values.houseDetails.yearBuilt}
              onChange={formik.handleChange}
              placeholder={"Year Built"}
            />
            <SelectAnt
              onChange={formik.handleChange}
              size="large"
              value={formik.values.category?.name}
              defaultValue={"Select"}
            >
              {category &&
                category.map((val) => {
                  return (
                    <SelectAnt.Option key={val.id} value={val.id}>
                      {val.name}{" "}
                    </SelectAnt.Option>
                  );
                })}
            </SelectAnt>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
              placeholder={"Name"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
              name="price"
              placeholder={"Price"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              value={formik.values.salePrice}
              name="salePrice"
              placeholder={"Sale Price"}
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.zipCode}
              name="zipCode"
              placeholder={"Zip Code"}
            />
          </Section>
          <Section>
            <Input
              value={imgs}
              name="at"
              onChange={({ target: { value } }) => setImgs(value)}
              placeholder={"Add Image Url"}
            />
            <Button type={"button"} onClick={addImg}>
              Add Image Url
            </Button>
          </Section>
          <Section flex={"true"}>
            {img.map((val) => {
              return (
                <pre key={val.id}>
                  {val.imgPath}{" "}
                  <IconDelete
                    onClick={() => {
                      let res = img.filter((i) => i.id !== val.id);
                      setImg(res);
                    }}
                  />{" "}
                </pre>
              );
            })}
          </Section>
          <Section>
            <TextArea
              onChange={formik.handleChange}
              rows={6}
              placeholder="Description"
              name="description"
              value={formik.values.description}
            />
          </Section>
          <h1 style={{ marginBottom: 45 }} className="subTitle">
            Additional
          </h1>
          <Section gap={"5"}>
            <Section flex={"true"}>
              <Checkbox
                name="houseAmenitiesto.busStop"
                onChange={formik.handleChange}
              >
                Bus Stop
              </Checkbox>
              <Checkbox
                name="houseAmenitiesto.garden"
                onChange={formik.handleChange}
              >
                Garden
              </Checkbox>
              <Checkbox
                name="houseAmenitiesto.market"
                onChange={formik.handleChange}
              >
                Market
              </Checkbox>
              <Checkbox
                name="houseAmenitiesto.park"
                onChange={formik.handleChange}
              >
                Park
              </Checkbox>
              <Checkbox
                name="houseAmenitiesto.parking"
                onChange={formik.handleChange}
              >
                Parking
              </Checkbox>
            </Section>
            <Section flex={"true"}>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.school"
              >
                School
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.statium"
              >
                Statium
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.subway"
              >
                Subway
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.superMarket"
              >
                Super Market
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.tv"
              >
                Tv
              </Checkbox>
            </Section>
            <Section flex={"true"}>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.airCondition"
              >
                Air Condition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.courtyard"
              >
                Courtyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.furniture"
              >
                Furniture
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.gasStove"
              >
                Gas Stove
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseAmenitiesto.internet"
              >
                Internet
              </Checkbox>
            </Section>
          </Section>
          <Button>{id ? "Update" : "Save"}</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
}
export default AddHouse;