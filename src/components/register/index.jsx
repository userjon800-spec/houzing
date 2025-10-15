import { Container } from "./style";
import { Tabs } from "antd";
import SigIn from "../signin";
import SignUp from "../signup";
function Register() {
  const items = [
    {
      key: "1",
      label: "Sing in",
      children: <SigIn />,
    },
    {
      key: "2",
      label: "Sing up",
      children: <SignUp />,
    },
  ];
  return (
    <Container>
      <Tabs defaultActiveKey="1" items={items} />
    </Container>
  );
}
export default Register;