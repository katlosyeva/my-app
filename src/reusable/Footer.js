import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer class="bg-secondary">
      <ul class="nav justify-content-center ">
        <li class="nav-item">
          <a class="nav-link text-info" aria-current="page" href="#">
            Про нас
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-info" href="#">
            Послуги
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-info" href="#">
            Товари
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-info" href="#">
            Контакти
          </a>
        </li>
      </ul>
      <div className={classes.divider}>
        <hr />
      </div>

      <p className={classes.rights}>Всі права застережено</p>
    </footer>
  );
};

export default Footer;
