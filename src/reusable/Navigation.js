import classes from "./Navigation.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../UI/AuthModal";
import RegistrationModal from "../UI/RegistrationModal";
import ForgotPasswordModal from "../UI/ForgotPasswordModal";

const Navigation = (props) => {
  const [show, setShow] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showForgotModal, setForgotModalShowRegistration] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeForgotModal = () => {
    setForgotModalShowRegistration(false);
  };
  const openForgotModalAndCloseAuth = () => {
    setShow(false);
    setForgotModalShowRegistration(true);
  };

  const handleCloseRegistration = () => setShowRegistration(false);

  const openRegistrationAndClosingAuthModal = () => {
    setShowRegistration(true);
    setShow(false);
  };

  return (
    <>
      <div className={classes.absoluteContainer}>
        <div class="container">
          <nav class="navbar navbar-expand-lg align-center">
            <div class="container-fluid">
              <div className={`${classes.fxBrand} `} href="#">
                FotoXata
              </div>
              <button
                class="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end align-center"
                id="navbarNav"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.fxLink} ${classes.active} nav-main nav-link`
                          : `${classes.fxLink} nav-main nav-link`
                      }
                      to="/photo-shoots"
                    >
                      Фотосесії
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.fxLink} ${classes.active} nav-main nav-link`
                          : `${classes.fxLink} nav-main nav-link`
                      }
                      to="/services-list"
                    >
                      Фотопослуги
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.fxLink} ${classes.active} nav-main nav-link`
                          : `${classes.fxLink} nav-main nav-link`
                      }
                      to="/other-services"
                    >
                      Інші послуги
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.fxLink} ${classes.active} nav-main nav-link`
                          : `${classes.fxLink} nav-main nav-link`
                      }
                      to="/products"
                    >
                      Товари
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.fxLink} ${classes.active} nav-main nav-link`
                          : `${classes.fxLink} nav-main nav-link`
                      }
                      to="/photo-print"
                    >
                      Друк через інтернет
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <button
                      type="button"
                      onClick={handleShow}
                      className={`${classes.fxLink} nav-main nav-link`}
                    >
                      Увійти
                    </button>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.fxLink} ${classes.active} nav-main nav-link`
                          : `${classes.fxLink} nav-main nav-link`
                      }
                      to="/language"
                    >
                      Мова
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <AuthModal
        show={show}
        handleClose={handleClose}
        openRegistrationAndClosingAuthModal={
          openRegistrationAndClosingAuthModal
        }
        openForgotModal={openForgotModalAndCloseAuth}
      />
      <RegistrationModal
        show={showRegistration}
        handleCloseRegistration={handleCloseRegistration}
      />
      <ForgotPasswordModal
        closeForgotModal={closeForgotModal}
        show={showForgotModal}
      />
    </>
  );
};

export default Navigation;
