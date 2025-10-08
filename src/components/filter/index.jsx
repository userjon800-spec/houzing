/* eslint-disable react-hooks/exhaustive-deps */
import { Dropdown } from "antd";
import { Button } from "../generics";
import { useEffect, useRef, useState } from "react";
import { Input } from "../generics";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./styled";
import { uzeReplace } from "../../hooks/uzeReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
function Filter() {
  let location = useLocation().pathname;
  let { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select Category");
  let navigate = useNavigate();
  let query = useSearch();
  let countryRef = useRef(null);
  let regionRef = useRef(null);
  let cityRef = useRef(null);
  let zipRef = useRef(null);
  let roomsRef = useRef(null);
  let minPriceRef = useRef(null);
  let maxPriceRef = useRef(null);
  let onCategory = (id) => {
    navigate(`/properties${uzeReplace("category", id)}`);
  };
  let onChanges = ({ target: { name, value } }) => {
    navigate(`/properties${uzeReplace(name, value)}`);
  };
  
  useEffect(() => {
    fetch(`${url}category`)
      .then((res) => res.json())
      .then((data) => {
        setData(data || []);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    let [d] = data?.filter((ctg) => ctg.id === Number(query.get("category")));
    d?.name && setValue(d?.name);
    !query.get("category") && setValue("Select Category")
  }, [location?.search, data]);
  const onChangeSort = (sort) => {
    navigate(`/properties${uzeReplace("sort", sort)}`);
  };
  let menus = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          name="country"
          onChange={onChanges}
          placeholder={"Country"}
          ref={countryRef}
        />
        <Input
          defaultValue={query.get("region")}
          name="region"
          onChange={onChanges}
          placeholder={"Region"}
          ref={regionRef}
        />
        <Input
          defaultValue={query.get("city")}
          name="address"
          onChange={onChanges}
          placeholder={"City"}
          ref={cityRef}
        />
        <Input
          defaultValue={query.get("zipCode")}
          name="zipCode"
          onChange={onChanges}
          placeholder={"Zip Code"}
          ref={zipRef}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input name="room" onChange={onChanges} placeholder={"Rooms"} ref={roomsRef} />
        <SelectAnt
          defaultValue={query.get("sort") || "Select Sort"}
          onChange={onChangeSort}
        >
          <SelectAnt.Option value={""}>Select Sort</SelectAnt.Option>
          <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
          <SelectAnt.Option value={"desc"}>Kamayuvchi</SelectAnt.Option>
        </SelectAnt>
        {/* mana */}
        <SelectAnt value={value} size="large" onChange={onCategory}>
          {/* <SelectAnt.Option value={"Select Category"}>
            Select Category
          </SelectAnt.Option> */}
          {data &&
            data.map((val) => {
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
        <Input onChange={onChanges} name="price" placeholder={"Min pirce"} ref={minPriceRef} />
        <Input onChange={onChanges} name="salePrice" placeholder={"Max price"} ref={maxPriceRef} />
      </Section>
      <Section footer>
        <Button type="light">Cancel</Button>
        <Button type={"primary"}>Submit</Button>
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<Icons.Qidir />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        overlay={menus}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
        trigger={"click"}
      >
        <div>
          <Button type="light">
            {" "}
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        {" "}
        <Icons.Qidir /> Search
      </Button>
    </Container>
  );
}
export default Filter;
