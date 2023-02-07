import React from "react";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className="bg-primary">
      <div className="container text-center py-5 bg-primary">
        <h2 className="services-title pb-4">Відгуки клієнтів</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card h-100 pt-5">
              <img
                src="../../../assets/images/customers/customer1.jpg"
                className={`${classes.personImage} card-img-top mx-auto`}
                alt="customer1"
              />
              <div className="card-body">
                <figure>
                  <blockquote className="card-text">
                    Шикарна зйомка. Фотограф Наталя - просто бомбезна! Зробила
                    все, щоб моя дружина була задоволена, а діти не втомилися.
                  </blockquote>
                  <figcaption>
                    <em>Юліан Орлов</em>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 pt-5">
              <img
                src="../../../assets/images/customers/customer2.jpg"
                className={`${classes.personImage} card-img-top mx-auto`}
                alt="customer2"
              />
              <div className="card-body">
                <figure>
                  <blockquote className="card-text">
                    Продавці в магазині на Сихові надзвичайно уважні і люб'язні.
                    Допомогли вибрати гарний альбом для моєї сестри.
                  </blockquote>
                  <figcaption>
                    <em>Романа Герасим</em>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 pt-5">
              <img
                src="../../../assets/images/customers/customer3.jpg"
                className={`${classes.personImage} card-img-top mx-auto`}
                alt="customer3"
              />
              <div className="card-body">
                <figure>
                  <blockquote className="card-text">
                    Роздруковував фото онлайн. Все пройшло чулово: нічого не
                    наплутали, роздрукували швидко і одразу зв'язалися зі мною.
                  </blockquote>
                  <figcaption>
                    <em>Василь Чорний</em>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
