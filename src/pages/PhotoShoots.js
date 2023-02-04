import React from "react";
import classes from "./PhotoShoots.module.css";
import PhotoGallery from "../reusable/PhotoGallery";
import { useTranslation } from "react-i18next";

const PhotoShoots = (props) => {
  const { t, i18n } = useTranslation();
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
                <h5>{t("loc1_name")}</h5>
                <p>{t("loc1_descript")}</p>
              </div>
            </div>
            <div
              className={`${classes.carouselPhoto} ${classes.carouselPhoto2} carousel-item`}
            >
              <div class="carousel-caption d-none d-md-block">
                <h5>{t("loc2_name")}</h5>
                <p>{t("loc2_descript")}</p>
              </div>
            </div>
            <div
              className={`${classes.carouselPhoto} ${classes.carouselPhoto3} carousel-item `}
            >
              <div class="carousel-caption d-none d-md-block">
                <h5>{t("loc3_name")}</h5>
                <p>{t("loc3_descript")}</p>
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
          <h2>{t("shoots_types")}</h2>
          <p>{t("shoots_locations")}</p>
          <p>{t("shoots_outside")}</p>
          <ul className={classes.list}>
            <li>{t("outside_type1")}</li>
            <li>{t("outside_type2")}</li>
            <li>{t("outside_type3")}</li>
            <li>{t("outside_type4")}</li>
          </ul>
          <p>{t("booking")}</p>
        </div>

        <div className={classes.photoshootsContainer}>
          <div className={classes.photoshootsInfo}>
            <h4> {t("theme_shoots")}</h4>
            <div className={classes.photoshootType}>
              <h5> {t("wedding")}</h5>
              <p>{t("wedding_descript")}</p>
            </div>
            <div className={classes.photoshootType}>
              <h5> {t("family")}</h5>
              <p>{t("family_descript")}</p>
            </div>

            <div className={classes.photoshootType}>
              <h5> {t("pregnant")}</h5>
              <p>{t("pregnant_descript")}</p>
            </div>

            <div className={classes.photoshootType}>
              <h5> {t("nyu")}</h5>
              <p>{t("nyu_descript")}</p>
            </div>
          </div>
          <PhotoGallery />
        </div>
      </div>
    </div>
  );
};

export default PhotoShoots;
