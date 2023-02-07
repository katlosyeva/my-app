import React from "react";
import classes from "./OrderGeneralInfoHeader.module.css";
import Button from "../shared/Button";

const OrderGeneralInfoHeader = (props) => {
  const onPressingDelete = () => {
    props.onPressingDelete();
  };

  return (
    <div className={`${classes.firstHeader} row justify-content-between`}>
      <div className="col-12 col-sm-6 row">
        <div className="col-12 col-sm-6">
          <span className="me-2">Завантажено фото</span>
          <span>{props.number}</span>
        </div>
        <div className="col-12 col-sm-6">
          <span className="me-2">Вартість, грн.</span>
          <span>{props.orderPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="col-12 col-sm-3">
        {props.buttonState && (
          <Button onClick={onPressingDelete}>Видалити всі</Button>
        )}
      </div>
      <div className="col-12 col-sm-3">
        {props.buttonState && <Button>Зробити замовлення </Button>}
      </div>

      {/* <div className="col-6 col-lg-2 d-flex pe-lg-2 align-items-center">
        <Button className={classes.confirmButton}>Зробити замовлення </Button>
      </div> */}
    </div>
  );
};
export default OrderGeneralInfoHeader;
