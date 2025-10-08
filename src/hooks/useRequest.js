
import { message } from "antd";
let { REACT_APP_BASE_URL } = process.env;
let useRequest = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const warning = (error) => {
    messageApi.open({
      type: "warning",
      content: `Nimadir xato ketdi (${error}) `,
    });
  };
  let request = async ({
    url,
    method = "GET",
    body = {},
    token,
    headers = {},
  }) => {
    if (method === "post") headers["Content-Type"] = "application/json";
    if (token) headers.Authorization = `${localStorage.getItem("token")}`;
    let options = {
      method,
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    console.log(options, "test");
    
    try {
      let res = await fetch(`${REACT_APP_BASE_URL}${url}`, options).then(
        (res) => res.json()
      );
      return res;
    } catch (error) {
      warning(error.message);
      return error;
    }
  };
  return request;
};
export { useRequest };
