import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import classes from "./ProductPage.module.css";

const ProductPage = (props) => {
  const params = useParams();

  let currentService = props.servicesList.filter(
    (service) => service.id === params.productId
  );

  if (currentService) {
    return (
      <div class="bg-secondary pb-5">
        <div class="container">
          <div className={`${classes.gap} row`}>
            <div class="col-sm-12 col-md-6">
              <div>
                <img
                  className={classes.img}
                  src={currentService[0].img}
                  alt="product image"
                />
              </div>
            </div>

            <div class="col-sm-12 col-md-6">
              <h3 className="classes.title" class="lead">
                {currentService[0].title}
              </h3>
              <p className="classes.description">
                {currentService[0].description}
              </p>
            </div>
          </div>

          <div class="border-top border-info border-bottom">
            <div class="row gx-5  justify-content-center">
              <div class="col-6">
                <div className={classes.heading}>Послуги</div>
              </div>

              <div class="col-3">
                <div className={classes.heading}>Вартість</div>
              </div>
            </div>
            <div>
              {currentService[0].table.map((type) => {
                return (
                  <div class="row gx-5 border-info justify-content-center">
                    <div class="col-6">
                      <div className={classes.border}>{type.format}</div>
                    </div>
                    <div class="col-3">
                      <div className={classes.border}>{type.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div class="mt-5 pb-5">
          <div class="container pb-5">
            <h1 className={classes.orderTitle}>Як зробити замовлення</h1>
            <div class="row justify-content-center g-4">
              <div class="col-sm-12 col-md-4">
                <div className={classes.column}>
                  <h1 className={classes.steptitle}>Крок 1</h1>
                  <div className={classes.colorIconContainer}>
                    <img src="/assets/social-media.png" />
                  </div>
                  <p>
                    Зв'яжіться з нами через соціальні мережі та залиште
                    інформацію про те, яке замовлення ви хочете зробити.
                  </p>
                  <div className={classes.icons}>
                    <i class="bi bi-facebook fs-3 me-3"></i>
                    <i class="bi bi-instagram fs-3"></i>
                  </div>
                  <p>
                    Замовлення також можна зробити в одному з наших магазинів.
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div className={classes.column}>
                  <h1 className={classes.steptitle}>Крок 2</h1>
                  <div className={classes.colorIconContainer}>
                    <img src="/assets/phone.png" />
                  </div>
                  <p>
                    Протягом деякого часу з вами зв'яжеться наш менеджер для
                    підтвердження вашого замовлення та повідомить про терміни
                    готовності ваших фото (1-3 дні).
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div className={classes.column}>
                  <h1 className={classes.steptitle}>Крок 3</h1>
                  <div className={classes.colorIconContainer}>
                    <img src="/assets/delivery-time.png" />
                  </div>
                  <p>
                    Друк фотографій готовий! Ми попередимо вас про це за
                    допомогою телефонного дзвінка та уточнимо зручний для вас
                    спосіб отримання замовлення:
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
      </div>
    );
  }
};

export default ProductPage;
