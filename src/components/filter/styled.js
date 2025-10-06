import styled from "styled-components";
import { ReactComponent as search } from "../../assets/icon/search.svg";
import { ReactComponent as filter } from "../../assets/icon/filter.svg";
import { ReactComponent as houses } from "../../assets/icon/houses.svg";
import { Select } from "antd";
let Container = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`;

let Icons = styled.div``;
Icons.Qidir = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

let MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
let Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

let SelectAnt = styled(Select)`
  min-width: 130px;
  width: 100%;
  max-width: 160px;
  .ant-select-selector {
    height: 44px !important;
  }
`;

export { Container, Icons, MenuWrapper, Section, SelectAnt };
