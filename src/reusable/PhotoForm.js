import React from "react";
import classes from "./PhotoForm.module.css";
import Button from "../UI/Button";
import { useReducer } from "react";

const photoReducer = (state, action) => {
  if (action.type === "FORMAT") {
    return {
      format: action.val,
      paper: state.paper,
      ramka: state.ramka,
      number: state.number,
      // kadruvannya: state.kadruvannya,
    };
  }
  if (action.type === "PAPER") {
    return {
      format: state.format,
      paper: action.val,
      ramka: state.ramka,
      number: state.number,
      // kadruvannya: state.kadruvannya,
    };
  }
  if (action.type === "RAMKA") {
    return {
      format: state.format,
      paper: state.paper,
      ramka: action.val,
      number: state.number,
      // kadruvannya: state.kadruvannya,
    };
  }
  if (action.type === "NUMBER") {
    return {
      format: state.format,
      paper: state.paper,
      ramka: state.ramka,
      number: action.val,
      // kadruvannya: state.kadruvannya,
    };
  }
  // if (action.type === "KADRUVANNYA") {
  //   return {
  //     format: state.format,
  //     paper: state.paper,
  //     ramka: state.ramka,
  //     number: state.number,
  //     // kadruvannya: action.val,
  //   };
  // }
};

const PhotoForm = (props) => {
  const [photoState, dispatchProperties] = useReducer(photoReducer, {
    format: "9x13",
    paper: "Матовий",
    ramka: "Без рамки",
    number: 1,
    // kadruvannya: "В обріз",
  });
  const formatEventHandler = (event) => {
    dispatchProperties({ type: "FORMAT", val: event.target.value });
  };
  const paperEventHandler = (event) => {
    dispatchProperties({ type: "PAPER", val: event.target.value });
  };
  const ramkaEventHandler = (event) => {
    dispatchProperties({ type: "RAMKA", val: event.target.value });
  };
  const numberEventHandler = (event) => {
    dispatchProperties({ type: "NUMBER", val: event.target.value });
  };
  // const kadruvannyaEventHandler = (event) => {
  //   dispatchProperties({ type: "KADRUVANNYA", val: event.target.value });
  // };
  const submitEventHandler = (event) => {
    event.preventDefault();
    props.onChoosingProperties(photoState);
  };
  return (
    <div className={classes.secondHeader}>
      <form class="row gy-2" onSubmit={submitEventHandler}>
        <div class=" col-6 col-lg-2 d-flex pe-lg-2 align-items-center">
          <label className={classes.label}>Формат</label>
          <select class="form-control me-2" onChange={formatEventHandler}>
            <option>9X13</option>
            <option>10X15</option>
          </select>
        </div>
        <div class=" col-6 col-lg-2 d-flex pe-lg-2 align-items-center">
          <label className={classes.label}>Папір</label>
          <select class="form-control me-2" onChange={paperEventHandler}>
            <option>Матовий</option>
            <option>Глянцевий</option>
          </select>
        </div>
        <div class="col-6 col-lg-2 d-flex pe-lg-2 align-items-center">
          <label
            className={classes.label}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
          >
            Рамка
          </label>
          <i
            class="bi bi-question-circle text-muted  pe-1"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Біла рамка 5 мм по периметру"
          ></i>
          <select class="form-control me-2" onChange={ramkaEventHandler}>
            <option>Без рамки</option>
            <option>З рамкою</option>
          </select>
        </div>
        <div class="col-6 col-lg-2 d-flex pe-lg-2 align-items-center">
          <label className={classes.label}>Кількість</label>
          <input
            type="number"
            min="1"
            step="1"
            class="form-control me-2"
            onChange={numberEventHandler}
          />
        </div>
        {/* <div class=" col-6 col-lg-2 d-flex pe-lg-2 align-items-center">
          <label
            className={classes.label}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
          >
            Кадрування
          </label>
          <i
            class="bi bi-question-circle text-muted  pe-1"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=" При виборі «В обріз» частина зображення буде зрізана, якщо пропорції фото не співпадуть зі специфічними.
            При виборі «Весь кадр» у вибраному Вам форматі - зображення буде надруковано цілком. При цьому можуть відображатися білі поля, якщо пропорції файлу не збігаються з форматом віддруку."
          ></i>
          <select class="form-control me-2" onChange={kadruvannyaEventHandler}>
            <option>В обріз</option>
            <option>Весь кадр</option>
          </select>
        </div> */}
        <div class="col-6 col-lg-2 d-flex pe-lg-2 align-items-center">
          <Button className={classes.confirmButton}>Застосувати</Button>
        </div>
        <div class="col-6 col-lg-2 d-flex pe-lg-2 align-items-center">
          <Button className={classes.confirmButton}>Зробити замовлення </Button>
        </div>
      </form>
    </div>
  );
};
export default PhotoForm;
