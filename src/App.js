// import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./Home";

import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ServicesList from "./pages/ServicesList";
import ProductPage from "./pages/ProductPage";
import Order from "./pages/Order";
import PhotoShoots from "./pages/PhotoShoots";

const servicesList = [
  {
    id: "druknoholsti",
    img: "/assets/druknaholsti.jpg",
    title: "ДРУК НА ХОЛСТІ",
    description:
      "Надзвичайно оригінальний подарунок, який ви тепер зможете піднести дорогим серцю людям - це їх зображення у вигляді картини на справжньому художньому полотні.",
    table: [
      {
        price: "167 гривень",
        format: "21x30см планшетна натяжка",
      },
      {
        price: "258 гривень",
        format: "30х40см планшетна натяжка",
      },
      {
        price: "372 гривень",
        format: "40х50см планшетна натяжка	",
      },
      {
        price: "504 гривень",
        format: "50х60см планшетна натяжка	",
      },
      {
        price: "724 гривень",
        format: "60х80см планшетна натяжка",
      },
      {
        price: "193 гривень",
        format: "21х30см галерейна натяжка",
      },
      {
        price: "292 гривень",
        format: "30х40см галерейна натяжка",
      },
      {
        price: "292 гривень",
        format: "40х50см галерейна натяжка",
      },
    ],
  },

  {
    id: "fotonakeramici",
    img: "/assets/fotonakeramici.jpg",
    title: "ФОТО НА КЕРАМІЦІ",
    description:
      "Також у салонах фотохати ви можете замовити фото на пам’ятник – будь-яку фотографію, розміщену на керамічних пластинах овальної форми.",

    table: [
      {
        price: "1050 гривень",
        format: "Керамічний овал 9х12см",
      },
      {
        price: "1375 гривень",
        format: "Керамічний овал 11х15см",
      },
      {
        price: "1300 гривень",
        format: "Керамічний овал 13х18см	",
      },
      {
        price: "1860 гривень",
        format: "Керамічний овал 18х24см",
      },
      {
        price: "3300 гривень",
        format: "Керамічний овал 24х30см",
      },
      {
        price: "550 гривень",
        format: "Металокераміка 9x12см",
      },
      {
        price: "650 гривень",
        format: "Металокераміка 13x18см",
      },
    ],
  },

  {
    id: "albomutaplanshetki",
    img: "/assets/vupysknialbomu.jpg",
    title: "АЛЬБОМИ ТА ПЛАНШЕТКИ",
    description:
      "Спогади про шкільні роки, екзамени, вчителів та однокласників найкраще і приємніше залишати у вигляді випускного альбому або планшетки.",
    table: [
      {
        price: "600 гривень",
        format: "Фотокнига в м'якій обкладинці Стандарт на пружині",
      },
      {
        price: "400 гривень",
        format: "Фотокнига в м'якій обкладинці Стандарт",
      },
      {
        price: "700 гривень",
        format: "Фотокнига в м'якій обкладинці Преміум",
      },
      {
        price: "850 гривень",
        format: "Фотокнига в твердій обкладинці Стандарт",
      },
      {
        price: "1300 гривень",
        format: "Фотокнига в м'якій обкладинці Преміум",
      },
      {
        price: "2200 гривень",
        format: "Фотокнига в м'якій обкладинці Роял",
      },
    ],
  },
  {
    id: "paspartutaramu",
    img: "/assets/paspartu.jpg",
    title: "ОФОРМЛЕННЯ В ПАСПАРТУ ТА РАМИ",
    description:
      "Якщо в сімейному архіві у вас присутні старі фото малого формату, - ми вигідно помістимо їх в паспарту, візуально збільшуючи їх розмір.",
    table: [
      {
        price: "30 гривень",
        format: " Оформлення вишивки в раму до 20х30см від",
      },
      {
        price: "40 гривень",
        format: "Оформлення вишивки в раму більше 20х30см від",
      },
      {
        price: "30 гривень",
        format: "Натяжка холста на підрамник від",
      },
      {
        price: "30 гривень",
        format: "Оформлення в раму фотографій, холстів від",
      },
      {
        price: "80 гривень",
        format: "Оформлення папіруса, від",
      },
    ],
  },
  {
    id: "proyavkaplivok",
    img: "/assets/proyavka.jpg",
    title: "ПРОЯВКА КОЛЬОРОВИХ ПЛІВОК",
    description:
      "Можете нести до нас у Фотохату хоч 100 метрів всілякої різної фотоплівки. Ми всю фотоплівку,принесену вами, проявимо, відскануємо та роздрукуємо на відмінно!",
    table: [
      {
        price: "150 гривень",
        format: "Проявка плівки без друку фото",
      },
      {
        price: "300 гривень",
        format: "Проявка широкої (120-а) плівки",
      },
      {
        price: "60 гривень",
        format: "Оцифрування фотоплівки 35 мм 12 кадрів (все підряд) 6Мп",
      },
      {
        price: "80 гривень",
        format: "Оцифровка фотоплівки 35 мм 24 кадрів (все підряд) 6Мп",
      },
      {
        price: "100 гривень",
        format: "Оцифровка фотоплівки 35 мм 36 кадрів (все підряд) 6Мп",
      },
      {
        price: "60 гривень",
        format:
          "Сканування різаної плівки 35 мм не менше 2 кадрів (все підряд, за кадр)",
      },
    ],
  },

  {
    id: "restavraciyafoto",
    img: "/assets/restavraciia.jpg",
    title: "РЕСТАВРАЦІЯ ФОТОГРАФІЙ",
    description:
      "У кожному сімейному фотоальбомі є знимки, які не завадило б освіжити. Такі фото ми відреставруємо, збільшимо у розмірах, або навпаки, можемо зменшити.",
    table: [
      {
        price: "18 гривень",
        format: "Репродукція фотографій 9х13см або 10х15см",
      },
      {
        price: "22 гривні",
        format: "Репродукція фотографій 13х18см",
      },
      {
        price: "24 гривні",
        format: "Репродукція фотографій 15х21см",
      },
      {
        price: "34 гривні",
        format: "Репродукція фотографій 18х25см",
      },
      {
        price: "36 гривень",
        format: "Репродукція фотографій 21х30см",
      },
      {
        price: "52 гривні",
        format: "Репродукція фотографій 25х38см",
      },
      {
        price: "60 гривень",
        format: "Репродукція фотографій 35х40см",
      },
      {
        price: "100 гривень",
        format: "Реставрація фотографій від",
      },
    ],
  },
];

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
        element: <ServicesList servicesList={servicesList} />,
      },
      {
        path: "/services-list/:productId",
        element: <ProductPage servicesList={servicesList} />,
      },
      {
        path: "/photo-print",
        element: <Order />,
      },
      {
        path: "/photo-shoots",
        element: <PhotoShoots />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
