import React from "react";
import classes from "./PhotoShoots.module.css";
import PhotoGallery from "../reusable/PhotoGallery";

const PhotoShoots = (props) => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div
              className={`${classes.carouselPhoto} ${classes.carouselPhoto1} carousel-item active`}
            >
              <div class="carousel-caption d-none d-md-block">
                <h5>Вище неба</h5>
                <p>Найромантичніша локація для вашої коханої людини.</p>
              </div>
            </div>
            <div
              className={`${classes.carouselPhoto} ${classes.carouselPhoto2} carousel-item`}
            >
              <div class="carousel-caption d-none d-md-block">
                <h5>Новорічна казка</h5>
                <p>Замовте фотосесію і отримайте спогади на цілий рік.</p>
              </div>
            </div>
            <div
              className={`${classes.carouselPhoto} ${classes.carouselPhoto3} carousel-item `}
            >
              {/* <img src="..." class="d-block w-100" alt="..." /> */}
              <div class="carousel-caption d-none d-md-block">
                <h5>Чарівний сад</h5>
                <p>В літню пору працює наша зелена локація. </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className={classes.photoshootsMainContainer}>
        <div class="py-5">
          <h2>Фотографія в студії і на виїзді</h2>
          <p>
            Фотохата пропонує широкий вибір кімнат-студій для фотосесії: "Вище
            неба","Новорічна казка","Чарівний сад".
          </p>
          <p>Також, ми проводимо низку фотосесій на виїзді</p>
          <ul className={classes.list}>
            <li>Весілля</li>
            <li>Хрестини</li>
            <li>Випускний</li>
            <li>Корпоративи</li>
          </ul>
          <p>
            Для бронювання зв'яжіться з нашими менеджерами за телефоном або
            через електронну пошту. Якщо Ваша подія відбувається в особливо
            "спекотні" дні-кінець навчального року, літні місяці- радимо
            зарезервувати час якомога раніше.
          </p>
        </div>

        <div className={classes.photoshootsContainer}>
          <div className={classes.photoshootsInfo}>
            <h4>Наша студія також пропонує ряд тематичних фотосесій.</h4>
            <div className={classes.photoshootType}>
              <h5>Весільна фотографія</h5>
              <p>
                Один з найпрекрасніших моментів всього життя – це весілля! Біла,
                розкішна сукня, фата, костюм, букет, золоті обручки на
                безіменних пальцях і щасливі, від щастя посмішок! Один короткий
                день, сповнений таких дефілядних емоцій та переживань потім
                будуть згадувати обоє молодят, сидячи перед телевізором за років
                так 60.
              </p>
            </div>
            <div className={classes.photoshootType}>
              <h5>Родинна фотосесія</h5>
              <p>
                Зберегти дорогі серцю образи ваших рідних - обов'язок і бажання,
                які ми обов'язково передамо своїм нащадкам. Холодними осінніми
                вечорами вдивлятися в очі рідних, які зараз далеко, ви зможете
                завдяки спільним фотографіям. Перенестися в радісний день, коли
                вся родина збирається разом, ви зможете замовивши послугу
                "сімейна фотографія" у нашій студії.
              </p>
            </div>

            <div className={classes.photoshootType}>
              <h5>9 місяців</h5>
              <p>
                Шоб ваша дитина була певною, шо її не приніс лелека чи її,
                бідолашну не здибали батьки в капусті на сирій, холодній землі –
                ви просто мусите прийти до нас, аби ми наробили вам купу знимок
                з вашим животиком! А ше краще кожного місяця в один і той самий
                день приходити і знимкувати животик!
              </p>
            </div>

            <div className={classes.photoshootType}>
              <h5>Фото в стилі "НЮ"</h5>
              <p>
                Якщо ви завжди мріяли про оригінальну і нестандартну фотосесію в
                стилі "ню", - наша фотостудія запрошує вас. Чуттєві, теплі фото
                з натяком на тонку еротику - найкращий подарунок для закоханих
                один одному.
              </p>
            </div>
          </div>
          <PhotoGallery />
        </div>
      </div>
    </div>
  );
};

export default PhotoShoots;
