import React from "react";
import Card from "../UI/Card";
import classes from "./ServicesList.module.css";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

const ServicesList = (props) => {
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
      <div class="row justify-items-center g-5 ">
        {props.servicesList.map((service) => {
          return (
            <div class="col-sm-12 col-md-6 col-lg-4 ">
              <div className={classes.card}>
                <div className={classes.content}>
                  <div>
                    <img
                      src={service.img}
                      className={classes.img}
                      alt="Card image"
                    />
                  </div>
                  <h3 class="lead" className={classes.title}>
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
                <div class="align-self-center pb-4">
                  <Button>
                    <NavLink className={classes.link} to={service.id}>
                      Дізнатися більше
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ServicesList;
