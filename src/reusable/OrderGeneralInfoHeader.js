import React from "react";
import classes from "./OrderGeneralInfoHeader.module.css";
import Button from "../UI/Button";

const OrderGeneralInfoHeader = (props) => {
  const onPressingDelete = () => {
    props.onPressingDelete();
  };

  return (
    <div className={`${classes.firstHeader} row justify-content-between`}>
      <div class="col-12 col-sm-8 row">
        <div class="col-12 col-sm-6">
          <span class="me-2">Завантажено фото</span>
          <span>{props.number}</span>
        </div>
        <div class="col-12 col-sm-6">
          <span class="me-2">Вартість, грн.</span>
          <span>{props.orderPrice.toFixed(2)}</span>
        </div>
      </div>
      <div class="col-12 col-sm-4 d-sm-flex justify-content-end">
        {props.buttonState ? (
          <Button onClick={onPressingDelete}>Видалити всі</Button>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
export default OrderGeneralInfoHeader;
