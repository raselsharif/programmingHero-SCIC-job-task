import { Outlet } from "react-router-dom";
import Navbar from "../compoments/common/Navbar/Navbar";
import Footer from "../compoments/common/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
