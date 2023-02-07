import classes from "./Home.module.css";
import Button from "../UI/shared/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Testimonials from "../UI/home/Testimonials";
import WhyUs from "../UI/home/WhyUs";
import OrderGuide from "../UI/product-page/OrderGuide";

const Home = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <section id="main">
        <div className={classes.background}>
          <div className={classes.mainContent}>
            <h1 className={classes.title}>{t("motto")}</h1>
            <Link to="/photo-shoots">
              <Button> {t("motto_btn")}</Button>
            </Link>
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials class="pt-5" />
      <OrderGuide />
    </div>
  );
};

export default Home;
