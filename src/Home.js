import classes from "./Home.module.css";
import Button from "./UI/Button";

const Home = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.mainContent}>
        <h1 className={classes.title}>
          Будь щасливий саме зараз в поточний момент. Тому що твоє життя завжди
          складається з поточних моментів...
        </h1>
        <Button onClick={props.onClick}>Вибрати фотосесію</Button>
      </div>
    </div>
  );
};

export default Home;
