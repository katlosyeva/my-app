import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../reusable/Navigation";
import Footer from "../reusable/Footer";
import AuthProvider from "../contexts/AuthContext";

function RootLayout() {
  let location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location]);

  return (
    <AuthProvider>
      <Navigation></Navigation>
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}
export default RootLayout;
