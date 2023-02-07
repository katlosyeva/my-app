import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./PhotoCarousel.module.css";

const PhotoCarousel = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
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
        <div className="carousel-inner">
          <div
            className={`${classes.carouselPhoto} ${classes.carouselPhoto1} carousel-item active`}
          >
            <div className="carousel-caption d-none d-md-block">
              <h5>{t("loc1_name")}</h5>
              <p>{t("loc1_descript")}</p>
            </div>
          </div>
          <div
            className={`${classes.carouselPhoto} ${classes.carouselPhoto2} carousel-item`}
          >
            <div className="carousel-caption d-none d-md-block">
              <h5>{t("loc2_name")}</h5>
              <p>{t("loc2_descript")}</p>
            </div>
          </div>
          <div
            className={`${classes.carouselPhoto} ${classes.carouselPhoto3} carousel-item `}
          >
            <div className="carousel-caption d-none d-md-block">
              <h5>{t("loc3_name")}</h5>
              <p>{t("loc3_descript")}</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default PhotoCarousel;
