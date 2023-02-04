import React from "react";
import i18n from "../i18n";

const LanguageSwitch = () => {
  return (
    <ul className="d-flex ps-0 ps-lg-5">
      <li
        className="list-unstyled d-flex align-items-center"
        onClick={() => {
          i18n.changeLanguage("uk");
        }}
        role="button"
      >
        <div>
          <img className="pe-1" src="/assets/ukraine.png" />
          <span className="border-end border-info pe-2 border-2">УКР</span>
        </div>
      </li>

      <li
        className="list-unstyled d-flex align-items-center"
        value="en"
        onClick={() => {
          i18n.changeLanguage("en");
        }}
        role="button"
      >
        <div>
          <img className="ps-2 pe-1" src="/assets/united-kingdom.png" />
          <span>ENG</span>
        </div>
      </li>
    </ul>
  );
};
export default LanguageSwitch;
