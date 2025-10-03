import styled from "styled-components";
import { ReactComponent as bad } from "../../assets/icon/bad.svg";
import { ReactComponent as baths } from "../../assets/icon/wanna.svg";
import { ReactComponent as garage } from "../../assets/icon/car.svg";
import { ReactComponent as ft } from "../../assets/icon/lineyka.svg";
import { ReactComponent as love } from "../../assets/icon/love.svg";
import { ReactComponent as keng } from "../../assets/icon/keng.svg";
let Container = styled.div`
  width: 380px;
  height: 430px;
  margin: 100px;
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.14);
`;
const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

let Content = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  margin-top: ${({ footer }) => (footer ? "0px" : "24px")};
  background-color: white;
`;

let Details = styled.div`
  display: flex;
  justify-content: space-between;
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
`;

let Icons = styled.div``;
Icons.Bed = styled(bad)``;
Icons.Bath = styled(baths)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ft)``;
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icons.Keng = styled(keng)``;
let Divider = styled.div`
  background: #e6e9ec;
  height: 1.5px;
  width: 100%;
`;
export { Container, Img, Content, Details, Icons, Divider };
