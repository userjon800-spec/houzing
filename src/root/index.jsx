import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/navbar";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          {navbar.map(({ path, element,id }) => {
          return <Route path={path} element={element} key={id} />;
        })}
        </Route>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Root;