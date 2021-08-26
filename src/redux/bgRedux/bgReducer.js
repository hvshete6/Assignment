import { PURE_BLACK_BG, WHITE_BG, PURE_BLACK_TRANSPARENT, DARK_GREY, GREY, LIGHT_GREY } from "./bg.actionTypes";

export const BG_KEY = "bgStore";

let initialState = {
  color: "#fff",
};

let bgReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case PURE_BLACK_BG:
      return {
        color: "#" + payload,
      };

    case WHITE_BG:
      return {
        color: "#" + payload,
      };
    case PURE_BLACK_TRANSPARENT:
      return {
        color: "#" + payload,
      };
    case DARK_GREY:
      return {
        color: "#" + payload,
      };
    case DARK_GREY:
      return {
        color: "#" + payload,
      };
    case GREY:
      return {
        color: "#" + payload,
      };
    case LIGHT_GREY:
      return {
        color: "#" + payload,
      };

    default:
      return state;
  }
};

export {bgReducer}