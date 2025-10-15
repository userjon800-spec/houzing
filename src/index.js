import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/index";
import RootContext from "./context/index";
import "slick-carousel/slick/slick.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "react-query";
const root = ReactDOM.createRoot(document.getElementById("root"));
let queryClient = new QueryClient();
root.render(
  <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <QueryClientProvider client={queryClient}>
      <RootContext>
        <Root />
      </RootContext>
    </QueryClientProvider>
  </>
);
