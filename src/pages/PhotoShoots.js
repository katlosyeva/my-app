import React from "react";
import classes from "./PhotoShoots.module.css";
import PhotoGallery from "../UI/photoshoots/PhotoGallery";
import { useTranslation } from "react-i18next";
import PhotoCarousel from "../UI/photoshoots/PhotoCarousel";

const PhotoShoots = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <PhotoCarousel />
      <div>
        <div className={classes.photoshootsMainContainer}>
          <div class="py-5">
            <p>{t("shoots_certificate")}</p>
            <p>{t("shoots_locations")}</p>
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
    </div>
  );
};

export default PhotoShoots;
