import React from "react";
import classes from "./PhotoGallery.module.css";

const PhotoGallery = (props) => {
  return (
    <div className={classes.photoshootsImages}>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot1.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot2.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot3.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot4.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot5.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot6.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot7.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot8.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot9.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot10.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot11.jpg" alt="photoshoot " />
      </div>
      <div className={classes.photoshootsImageContainer}>
        <img src="../assets/shoot12.jpg" alt="photoshoot " />
      </div>
    </div>
  );
};

export default PhotoGallery;
