import React from "react";
import classes from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="pb-5">Чому ми найкращі у всій Західній Україні?</h2>
      <div className="row justify-content-center align-center">
        <div className="col-sm-6 col-md-4 py-4">
          <div className={`${classes.iconContainer} mb-4`}>
            <i className="fa-solid fa-truck-fast fa-xl"></i>
          </div>
          <p>
            Вам не прийдеться відпрошуватися з роботи, щоб забрати свої
            фотографії, тому що ми відправляємо замовлення поштою.
          </p>
        </div>
        <div className="col-sm-6 col-md-4 py-4">
          <div className={`${classes.iconContainer} mb-4`}>
            <i className="fa-solid fa-gift fa-xl"></i>
          </div>
          <p>
            У нас ви знайдете безліч сувенірної продукції, як то подушки,
            горнятка, футболки, календарі тощо.
          </p>
        </div>
        <div className="col-sm-6 col-md-4 py-4">
          <div className={`${classes.iconContainer} mb-4`}>
            <i className="fa-solid fa-store fa-xl"></i>
          </div>
          <p>
            Ми маємо быльше 11 магазинів по всьому місту і ви обов'язково
            знайдете один біля свого дому.
          </p>
        </div>
        <div className="col-sm-6 col-md-4 py-4">
          <div className={`${classes.iconContainer} mb-4`}>
            <i className="fa-solid fa-tree fa-xl"></i>
          </div>
          <p>
            Виїздні фотосесії на природі щоб подарувати вам і вашим найдорожчим
            ексклюзивну фотоісторію.
          </p>
        </div>
        <div className="col-sm-6 col-md-4 py-4">
          <div className={`${classes.iconContainer} mb-4`}>
            <i className="fa-solid fa-globe fa-xl"></i>
          </div>
          <p>
            Можливість друку через інтернет. Просто завантажуй свої фото на
            нашому сайті і отримуй знімки на наступний день.
          </p>
        </div>
        <div className="col-sm-6 col-md-4 py-4">
          <div className={`${classes.iconContainer} mb-4`}>
            <i className="fa-solid fa-print fa-xl"></i>
          </div>
          <p>
            Безліч інших послуг, таких як чорно-білий і кольоровий ксерокс,
            ламінування, брошурування, роздрук текстів.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
