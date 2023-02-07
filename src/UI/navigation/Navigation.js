import classes from "./Navigation.module.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../modals/AuthModal";
import RegistrationModal from "../modals/RegistrationModal";
import ForgotPasswordModal from "../modals/ForgotPasswordModal";
import LanguageSwitch from "../../UI/shared/LanguageSwitch";
import { useTranslation } from "react-i18next";
import ConfirmationModal from "../modals/ConfirmationModal";
import AuthProvider, { useAuth } from "../../contexts/AuthContext";

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
        <div className="container">
          <nav className="navbar navbar-expand-lg align-center">
            <div className="container-fluid">
              <Link className={`${classes.fxBrand} `} to="/">
                FotoXata
              </Link>
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end align-center"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
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
                  <li className="nav-item">
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
                  <li className="nav-item">
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
                      className={`${classes.fxLink} nav-main nav-link`}
                      onClick={handleShow}
                    >
                      {t("nav_login")}
                    </li>
                  )}
                  {currentUser && (
                    <li className="nav-item ">
                      <div className="h-100 d-flex align-items-center px-1">
                        <i className="bi bi-person-circle fs-3"></i>
                      </div>
                      {/* <p>{currentUser.email}</p> */}
                    </li>
                  )}
                  {currentUser && (
                    <li
                      className={`${classes.fxLink} nav-main nav-link`}
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
