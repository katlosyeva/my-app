import classes from "./Home.module.css";
import Button from "./UI/Button";
import { useTranslation } from "react-i18next";

const Home = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.background}>
      <div className={classes.mainContent}>
        <h1 className={classes.title}>{t("motto")}</h1>
        <Button onClick={props.onClick}> {t("motto_btn")}</Button>
      </div>
    </div>
  );
};

export default Home;
