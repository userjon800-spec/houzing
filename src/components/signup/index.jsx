import { Container, Content } from "./style";
import { Button, Input } from "../generics";
import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
function SignUp() {
  let navigate = useNavigate();
  const [body, setBody] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Ijobiy ro'yxatdan o'tdingiz",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Formani oxirgacha to'ldiring",
    });
  };
  let onChanges = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };
  let onSubmit = () => {
    if (body.email === "" || body.password === "") {
      error();
      return;
    }
    fetch(`http://localhost:3001/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(() => {
        success();
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      });
  };
  return (
    <Container>
      {contextHolder}
      <Content>
        <div className="subTitle">Sign Up</div>
        <Input onChange={onChanges} placeholder="email" type="email" />
        <Input onChange={onChanges} placeholder="firstname" type="text" />
        <Input onChange={onChanges} placeholder="lastname" type="text" />
        <Input onChange={onChanges} placeholder="password" type="password" />
        <Button onClick={onSubmit} width="%">
          Log in
        </Button>
      </Content>
    </Container>
  );
}
export default SignUp;