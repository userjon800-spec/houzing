import { Dropdown } from "antd";
import { Button } from "../generics";
import { useRef } from "react";
import { Input } from "../generics";
import { Container, Icons, MenuWrapper, Section } from "./styled";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
function Filter() {
  let location = useLocation().pathname;
  let navigate = useNavigate();
  let query = useSearch();
  let countryRef = useRef(null);
  let regionRef = useRef(null);
  let cityRef = useRef(null);
  let zipRef = useRef(null);
  let roomsRef = useRef(null);
  let sizeRef = useRef(null);
  let sortRef = useRef(null);
  let minPriceRef = useRef(null);
  let maxPriceRef = useRef(null);
  let onChanges = ({ target: { name, value } }) => {
    navigate(`${location}${uzeReplace(name, value)}`);
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
        <Input placeholder={"Rooms"} ref={roomsRef} />
        <Input placeholder={"Size"} ref={sizeRef} />
        <Input placeholder={"Sort"} ref={sortRef} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input placeholder={"Min pirce"} ref={minPriceRef} />
        <Input placeholder={"Max price"} ref={maxPriceRef} />
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
