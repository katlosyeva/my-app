import Map from "../UI/shared/Map";
import classes from "./Contacts.module.css";
import { useLoaderData } from "react-router-dom";

export default function Contacts() {
  const shops = useLoaderData();
  return (
    <div className="container my-5 py-5">
      {shops.map((shop) => {
        return (
          <div key={shop.id}>
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
