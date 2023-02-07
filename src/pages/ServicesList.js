import React from "react";
import classes from "./ServicesList.module.css";
import Service from "../UI/shared/Service";
import { useLoaderData } from "react-router-dom";

const ServicesList = (props) => {
  const servicesList = useLoaderData();
  return (
    <div className={classes.background}>
      {/* <div class="container"> */}
      <h1 className={classes.maintitle}>Наші послуги</h1>
      <p className={classes.maindescription}>
        Якщо вам потрібно надрукувати фотоальбом, надрукувати фото на холсті чи
        кераміці чи проявити плівку - ПРИХОДІТЬ ДО НАС! Досвідчені працівники
        запропонують вам багатий вибір фото послуг. Художні портрети,
        різноманітні колажі, веселий фотомонтаж, ретуш та оновлення старих
        сімейних фотографій та багато іншого на ваш смак. А також якісне та
        креативне виготовлення рам у багетній майстерні. Ми разом з вами
        вирішимо, що саме ви хочете, і чого хотілося б вашим друзям отримати в
        подарунок! Питання ціни також вирішується відповідно до ваших побажань
        та можливостей! Довіртеся нам, і ви залишитеся задоволені!
      </p>
      <div className="row justify-items-center g-5 ">
        {servicesList.map((serviceItem) => {
          return <Service service={serviceItem} />;
        })}
      </div>
    </div>
  );
};
export default ServicesList;
export async function loader() {
  const response = await fetch(
    "https://new-project-fef7d-default-rtdb.firebaseio.com/servicesList.json"
  );
  return response;
}
