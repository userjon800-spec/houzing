import styled from "styled-components";
import { ReactComponent as search } from "../../assets/icon/search.svg";
import { ReactComponent as filter } from "../../assets/icon/filter.svg";
import { ReactComponent as houses } from "../../assets/icon/houses.svg";

let Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
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

export { Container, Icons, MenuWrapper, Section };
