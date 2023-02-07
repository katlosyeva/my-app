import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ServicesList from "./pages/ServicesList";
import ProductPage from "./pages/ProductPage";
import Order from "./pages/Order";
import PhotoShoots from "./pages/PhotoShoots";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";
import { loader as shopsLoader } from "./pages/Contacts";
import { loader as servicesLoader } from "./pages/ServicesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services-list",
        element: <ServicesList />,
        loader: servicesLoader,
      },
      {
        path: "/services-list/:productId",
        element: <ProductPage />,
        loader: servicesLoader,
      },
      {
        path: "/photo-print",
        element: <Order />,
      },
      {
        path: "/photo-shoots",
        element: <PhotoShoots />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
        loader: shopsLoader,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
