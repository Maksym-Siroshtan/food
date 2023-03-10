import calc from "./modules/calc";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modal";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import cookie from "./modules/cookieConsent";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    60000
  );

  calc();
  cards();
  forms("form", modalTimerId);
  modal("[data-modal]", ".modal", modalTimerId);
  slider({
    containerSelector: ".offer__slider",
    slideSelector: ".offer__slide",
    prevArrowSelector: ".offer__slider-prev",
    nextArrowSelector: ".offer__slider-next",
    totalCountSelector: "#total",
    currentCountSelector: "#current",
    wrapperSelector: ".offer__slider-wrapper",
    fieldSelector: ".offer__slider-inner",
  });
  tabs(
    ".tabcontent",
    ".tabheader__item",
    ".tabheader__items",
    "tabheader__item_active"
  );
  timer(".timer", "2023-05-11");
  cookie();
});
