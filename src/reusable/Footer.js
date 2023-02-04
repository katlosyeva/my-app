import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <footer class="bg-secondary">
      <ul class="nav justify-content-center ">
        <li>
          <Link class={`${classes.fxLink} nav-main nav-link`} to="/aboutus">
            {t("footer_aboutus")}
          </Link>
        </li>

        <li>
          <Link
            class={`${classes.fxLink} nav-main nav-link`}
            to="/photo-shoots"
          >
            {t("footer_photoshoots")}
          </Link>
        </li>
        <li>
          <Link
            class={`${classes.fxLink} nav-main nav-link`}
            to="/services-list"
          >
            {t("footer_services")}
          </Link>
        </li>
        <li>
          <Link class={`${classes.fxLink} nav-main nav-link`} to="/contacts">
          {t("footer_contacts")}
          </Link>
        </li>
      </ul>
      <div className={classes.divider}>
        <hr />
      </div>

      <p className={classes.rights}>{t("footer_rights")}</p>
    </footer>
  );
};

export default Footer;
