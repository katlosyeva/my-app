import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Footer from "../UI/footer/Footer";
import AuthProvider from "../contexts/AuthContext";
import Navigation from "../UI/navigation/Navigation";

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
