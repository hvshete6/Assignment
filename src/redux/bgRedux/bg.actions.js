import { PURE_BLACK_BG, WHITE_BG, PURE_BLACK_TRANSPARENT, DARK_GREY, GREY, LIGHT_GREY } from "./bg.actionTypes";

let pureBlackBg = () => {
  return {
    type: PURE_BLACK_BG,
    payload: "000000",
  };
};
let whiteBg = () => {
  return {
    type: WHITE_BG,
    payload: "fff",
  };
};
let pureBlackTransparent = () => {
  return {
    type: PURE_BLACK_TRANSPARENT,
    payload: "808080",
  };
};
let darkGrey = () => {
  return {
    type: DARK_GREY,
    payload: "D8D8D8",
  };
};
let grey = () => {
  return {
    type: GREY,
    payload: "F0F0F0",
  };
};
let lightGrey = () => {
  return {
    type: LIGHT_GREY,
    payload: "FFFF00",
  };
};

export { pureBlackBg, whiteBg, pureBlackTransparent, darkGrey, grey, lightGrey};
