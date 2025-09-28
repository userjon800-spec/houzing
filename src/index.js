import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/index";
import RootContext from "./context/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RootContext >
    <Root />
  </RootContext>
);
