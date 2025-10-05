import styled from "styled-components";
import { ReactComponent as bad } from "../../assets/icon/bad.svg";
import { ReactComponent as baths } from "../../assets/icon/wanna.svg";
import { ReactComponent as garage } from "../../assets/icon/car.svg";
import { ReactComponent as ft } from "../../assets/icon/lineyka.svg";
import { ReactComponent as love } from "../../assets/icon/love.svg";
import { ReactComponent as keng } from "../../assets/icon/keng.svg";
let Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  margin: ${({ gap }) => {
    return gap && `0 ${gap}px`;
  }};
  height: 430px;
  background: white;
  border: 1px solid #e6e9ec;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
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
  margin-top: 8px;
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
  background: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")};
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  & path {
    fill: ${({ favorite }) => favorite && "white"};
  }
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
