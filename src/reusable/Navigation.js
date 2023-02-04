import classes from "./Navigation.module.css";
import React from "react";
import { NavLink, useLinkClickHandler } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../UI/AuthModal";
import RegistrationModal from "../UI/RegistrationModal";
import ForgotPasswordModal from "../UI/ForgotPasswordModal";
import AuthProvider from "../contexts/AuthContext";
import { useAuth } from "../contexts/AuthContext";
import ConfirmationModal from "../UI/ConfirmationModal";
import LanguageSwitch from "../UI/LanguageSwitch";
import { useTranslation } from "react-i18next";

const Navigation = (props) => {
  const { t, i18n } = useTranslation();

  const [show, setShow] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showForgotModal, setForgotModalShowRegistration] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const { signout, currentUser } = useAuth();
  const { errorLogout, setErrorLogout } = useState(false);

  const openConfirmModal = () => {
    setConfirmModalShow(true);
  };
  const closeConfirmModal = () => {
    setConfirmModalShow(false);
  };
  const logoutSubmit = async (event) => {
    try {
      await signout();
      closeConfirmModal();
    } catch {
      setErrorLogout("Сталася помилка. Попробуйте ще раз.");
    }
  };
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
    <AuthProvider>
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
                      {t("nav_photoshoots")}
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
                      {t("nav_photoservices")}
                    </NavLink>
                  </li>
                  {/* <li class="nav-item">
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
                  </li> */}
                  <li class="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.fxLink} ${classes.active} nav-main nav-link`
                          : `${classes.fxLink} nav-main nav-link`
                      }
                      to="/photo-print"
                    >
                      {t("nav_print")}
                    </NavLink>
                  </li>
                  {!currentUser && (
                    <li
                      class={`${classes.fxLink} nav-main nav-link`}
                      onClick={handleShow}
                    >
                      {t("nav_login")}
                    </li>
                  )}
                  {currentUser && (
                    <li class="nav-item ">
                      <div class="h-100 d-flex align-items-center px-1">
                        <i class="bi bi-person-circle fs-3"></i>
                      </div>
                      {/* <p>{currentUser.email}</p> */}
                    </li>
                  )}
                  {currentUser && (
                    <li
                      class={`${classes.fxLink} nav-main nav-link`}
                      onClick={openConfirmModal}
                    >
                      {t("nav_logout")}
                    </li>
                  )}
                  <LanguageSwitch />
                </ul>
                {/* <div
                  class="btn-group ms-4"
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" class="btn btn-secondary">
                    укр
                  </button>
                  <button type="button" class="btn btn-secondary">
                    eng
                  </button>
                </div> */}
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
      <ConfirmationModal
        close={closeConfirmModal}
        logout={logoutSubmit}
        errorState={errorLogout}
        show={confirmModalShow}
        text={"Вийти"}
      />
    </AuthProvider>
  );
};

export default Navigation;
