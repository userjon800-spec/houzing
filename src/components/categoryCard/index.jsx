import { Blur, Container, Content, Img } from "./style";
import house5 from "../../assets/img/home6.jpg";
function CategoryCard({ data, onClick }) {
  if (!data) return null;
  let { name } = data;
  return (
    <Container onClick={onClick}>
      <Img
        src={
          house5 ||
          "https://t3.ftcdn.net/jpg/14/38/90/96/360_F_1438909678_pEFxCNIuz0SQZ4ZcEwXkPqByYVbZgJVk.jpg"
        }
        alt="rasm"
      />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
}
export default CategoryCard;
