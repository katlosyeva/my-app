import { Outlet } from "react-router-dom";

import Navigation from "../reusable/Navigation";
import Footer from "../reusable/Footer";

function RootLayout() {
  return (
    <>
      <Navigation></Navigation>
      <Outlet />
      <Footer />
    </>
  );
}
export default RootLayout;
