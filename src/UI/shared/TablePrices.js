import React from "react";
import classes from "./TablePrices.module.css";

const TablePrices = (props) => {
  return (
    <div className="border-top border-info border-bottom">
      <div className="row gx-5  justify-content-center">
        <div className="col-6">
          <div className={classes.heading}>{props.firstcolName}</div>
        </div>

        <div className="col-3">
          <div className={classes.heading}>{props.secondcolName}</div>
        </div>
      </div>
      <div>
        {props.table.map((type) => {
          return (
            <div
              key={type.format}
              className="row gx-5 border-info justify-content-center"
            >
              <div className="col-6">
                <div className={classes.border}>{type.format}</div>
              </div>
              <div className="col-3">
                <div className={classes.border}>{type.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TablePrices;
