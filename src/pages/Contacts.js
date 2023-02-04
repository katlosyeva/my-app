import Map from "../reusable/Map";
import classes from "./Contacts.module.css";
import { useLoaderData } from "react-router-dom";
// const shops = [
//   {
//     id: "01",
//     address: "вул. Сихівська, 11",
//     phone: "+38(067) 8336137",
//     info: 'Наша Дикозахідна "Фотохата" на Сихові – то істинно ладно заекіпірована крамниця –студія! Прийдіт сюди до нас і відчуйте шо то таке – безпечний фотографічний притулок серед не дрімаючої «країни» Сихів. Купіть собі тут шо схочете, фотографуйтеся кіко забажаєте і радійте життю і знимкам!',
//     email: "fotoxata@gmail.com",
//     workinghours: {
//       workdays: "з  9-00  до 19-00",
//       sat: "з 10-00  до 18-00",
//       sun: "з 10-00 до 16-00",
//     },
//     location: {
//       lat: 49.796549335783375,
//       lng: 24.063943555819872,
//     },
//   },
//   {
//     id: "02",
//     address: "вул. Франка, 71",
//     phone: "+38(068) 7808827",
//     info: "Як Ільф і Петров колись захопили ваш розум своєю книгою і Миронов видався неперевершеним в екранізації того чудо-роману, то вам сюди, до нас! Наш магазин та студія зроблені у стилі фільму «12 стільців». І як не схочете у нас купляти якісь фотографічні обладунки, то ми вас зможемо посадити на скриню і фотографувати до ранку!",
//     email: "xata.franka@gmail.com",
//     workinghours: {
//       workdays: "з  9-00  до 19-00",
//       sat: "з 10-00  до 18-00",
//       sun: "з 10-00 до 16-00",
//     },
//     location: {
//       lat: 49.83043881337086,
//       lng: 24.032383585052727,
//     },
//   },
//   {
//     id: "03",
//     address: "вул. Грінченка, 11Б",
//     phone: "+38(032) 2933262",
//     info: "Раді повідомити, що ми відкрилися. Більше того - вже активно працюємо! Знайомимось з новими клієнтами. Досвідчені працівники, приємне обслуговування, новий затишний інтер'єр! Приходьте та ще краще з друзями, сусідами, знайомими та не дуже. Бо Ви цього варті!",
//     email: "fotoxata7@gmail.com",
//     workinghours: {
//       workdays: "з  9-00  до 19-00",
//       sat: "з 10-00  до 18-00",
//       sun: "з 10-00 до 18-00",
//     },
//     location: {
//       lat: 49.871637549885016,
//       lng: 24.052146449335964,
//     },
//   },
//   {
//     id: "04",
//     address: "вул. Тичини, 14",
//     phone: "+38(094) 9940583",
//     info: '"Фотохата" на Тичини, 14 вже відкрилась! Чекаємо на наших постійних та нових клієнтів! Побачимось!',
//     email: "fotoxatatuchunu14@gmail.com",
//     workinghours: {
//       workdays: "з  9-00  до 19-00",
//       sat: "з 10-00  до 18-00",
//       sun: "з 10-00 до 16-00",
//     },
//     location: {
//       lat: 49.867810562364355,
//       lng: 24.03437846970987,
//     },
//   },
// ];

export default function Contacts() {
  const shops = useLoaderData();
  console.log(shops);
  // let shops = [];
  // for (const key in shopsObject) {
  //   shops.push({
  //     id: key,
  //     address: shopsObject[key].address,
  //     phone: shopsObject[key].phone,
  //     info: shopsObject[key].info,
  //     email: shopsObject[key].email,
  //     workinghours: shopsObject[key].workinghours,
  //     location: shopsObject[key].location,
  //   });
  // }
  return (
    <div className="container my-5 py-5">
      {shops.map((shop) => {
        return (
          <div>
            <div className={classes.mainContainer}>
              <div className={classes.mapContainer}>
                <Map lat={shop.location.lat} lng={shop.location.lng} />
              </div>
              <div className={classes.infoContainer}>
                <div className="d-flex">
                  <h5 className={classes.infoLabel}>Адреса</h5>
                  <p>{shop.address}</p>
                </div>
                <div className="d-flex">
                  <h5 className={classes.infoLabel}>Про нас </h5>
                  <p>{shop.info}</p>
                </div>
                <div className="d-flex">
                  <h5 className={classes.infoLabel}>E-mail</h5>
                  <p>{shop.email}</p>
                </div>
                <div className="d-flex">
                  <h5 className={classes.infoLabel}>Години роботи</h5>
                  <div>
                    <div className="d-flex pe-3">
                      <p className="text-danger pe-1 ">Пн-Пт</p>
                      <p> {shop.workinghours.workdays}</p>
                    </div>
                    <div className="d-flex pe-3">
                      <p className="text-danger pe-1 ">Сб</p>
                      <p>{shop.workinghours.sat}</p>
                    </div>
                    <div className="d-flex pe-3">
                      <p className="text-danger pe-1">Нд</p>
                      <p>{shop.workinghours.sun}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function loader() {
  const response = await fetch(
    "https://new-project-fef7d-default-rtdb.firebaseio.com/shops.json"
  );

  return response;
}
