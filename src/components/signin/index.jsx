import { Container, Content } from "./style";
import { Button, Input } from "../generics";
import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
function SigIn() {
  let navigate = useNavigate();
  const [body, setBody] = useState({
    email: "",
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
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "Nimadir xato ketdi",
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
    fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.id) {
          success();
          setTimeout(() => {
            navigate("/home");
          }, 1000);
          localStorage.setItem("token", data?.id);
        } else {
          warning();
        }
      });
  };
  return (
    <Container>
      {contextHolder}
      <Content>
        <div className="subTitle">Sign in</div>
        <Input onChange={onChanges} placeholder="email" type="email" />
        <Input onChange={onChanges} placeholder="password" type="password" />
        <Button onClick={onSubmit} width="%">
          Log in
        </Button>
      </Content>
    </Container>
  );
}

export default SigIn;
