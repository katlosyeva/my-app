import React from "react";
import Button from "./Button";
import classes from "./Service.module.css";
import { NavLink } from "react-router-dom";

const Service = (props) => {
  return (
    <div key={props.service.id} className="col-sm-12 col-md-6 col-lg-4 ">
      <div className={classes.card}>
        <div className={classes.content}>
          <div>
            <img src={props.service.img} className={classes.img} alt="card" />
          </div>
          <h3 className={classes.title}>{props.service.title}</h3>
          <p>{props.service.description}</p>
        </div>
        <div className="align-self-center pb-4">
          <Button>
            <NavLink className={classes.link} to={props.service.id}>
              Дізнатися більше
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
