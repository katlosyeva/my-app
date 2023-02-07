import React from "react";
import classes from "./OrderGuide.module.css";

const OrderGuide = () => {
  return (
    <div className="mt-5 pb-5">
      <div className="container pb-5">
        <h1 className={classes.orderTitle}>Як зробити замовлення</h1>
        <div className="row justify-content-center g-4">
          <div className="col-sm-12 col-md-4">
            <div className={classes.column}>
              <h1 className={classes.steptitle}>Крок 1</h1>
              <div className={classes.colorIconContainer}>
                <img
                  src="/assets/icons/product-page/social-media.png"
                  alt="how_to_order_icon"
                />
              </div>
              <p>
                Зв'яжіться з нами через соціальні мережі та залиште інформацію
                про те, яке замовлення ви хочете зробити.
              </p>
              <div className={classes.icons}>
                <i className="bi bi-facebook fs-3 me-3"></i>
                <i className="bi bi-instagram fs-3"></i>
              </div>
              <p>Замовлення також можна зробити в одному з наших магазинів.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className={classes.column}>
              <h1 className={classes.steptitle}>Крок 2</h1>
              <div className={classes.colorIconContainer}>
                <img
                  src="/assets/icons/product-page/phone.png"
                  alt="communication_icon"
                />
              </div>
              <p>
                Протягом деякого часу з вами зв'яжеться наш менеджер для
                підтвердження вашого замовлення та повідомить про терміни
                готовності ваших фото (1-3 дні).
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className={classes.column}>
              <h1 className={classes.steptitle}>Крок 3</h1>
              <div className={classes.colorIconContainer}>
                <img
                  src="/assets/icons/product-page/delivery-time.png"
                  alt="delivery_icon"
                />
              </div>
              <p>
                Друк фотографій готовий! Ми попередимо вас про це за допомогою
                телефонного дзвінка та уточнимо зручний для вас спосіб отримання
                замовлення:
              </p>
            </div>
            <ul className={classes.list}>
              <li>- Самовивіз з нашого магазину</li>
              <li>- Кур'єрська доставка по місту</li>
              <li>- Доставка Новою поштою по Україні</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderGuide;
