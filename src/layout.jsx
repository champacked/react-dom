import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// what this outlet do is it will use this layout as a base and
// and inside it whatever you will give , it will only change the middle part
// timestamp 254===

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
