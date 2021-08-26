import React from "react";
import Button from "@material-ui/core/Button";

import { useSelector, useDispatch } from "react-redux";
import { BG_KEY } from "./redux/bgRedux/bgReducer";
import {
  pureBlackBg,
  whiteBg,
  pureBlackTransparent,
  darkGrey,
  grey,
  lightGrey,
} from "./redux/bgRedux/bg.actions";

const ChangeButton = () => {
  let dispatch = useDispatch();

  let clickPureBlack = () => {
    dispatch(pureBlackBg());
  };

  let clickWhite = () => {
    dispatch(whiteBg());
  };
  let clickBlackTransparent = () => {
    dispatch(pureBlackTransparent());
  };
  let clickDarkGrey = () => {
    dispatch(darkGrey());
  };
  let clickGrey = () => {
    dispatch(grey());
  };
  let clickLightGrey = () => {
    dispatch(lightGrey());
  };

  let viewBg = useSelector((state) => {
    return state[BG_KEY];
  });
  return (
    <div className="changeButtonComp" style={{ backgroundColor: viewBg.color }}>
      <pre>{JSON.stringify(viewBg)}</pre>

      <Button
        variant="contained"
        type="checkbox"
        size="large"
        style={{
          backgroundColor: "#000000",
          color: "#F3F2FC",
          padding: "10px 50px",
          marginBottom:'10px'
        }}
        onClick={clickPureBlack}
      >
        Pure Black
      </Button>
      <Button
        variant="contained"
        type="checkbox"
        size="large"
        style={{
          backgroundColor: "#FFFFF",
          color: "#000000",
          padding: "10px 50px",
          marginBottom:'10px'

        }}
        onClick={clickWhite}
      >
        White
      </Button>
      <Button
        variant="contained"
        type="checkbox"
        size="large"
        style={{
          backgroundColor: "#808080",
          color: "#000000",
          padding: "10px 50px",
          marginBottom:'10px'

        }}
        onClick={clickBlackTransparent}
      >
        Black 50% Transparent
      </Button>
      <Button
        variant="contained"
        type="checkbox"
        size="large"
        style={{
          backgroundColor: "#D8D8D8",
          color: "#000000",
          padding: "10px 50px",
          marginBottom:'10px'

        }}
        onClick={clickDarkGrey}
      >
        Dark Grey
      </Button>
      <Button
        variant="contained"
        type="checkbox"
        size="large"
        style={{
          backgroundColor: "#F0F0F0",
          color: "#000000",
          padding: "10px 50px",
          marginBottom:'10px'

        }}
        onClick={clickGrey}
      >
        Grey
      </Button>
      <Button
        variant="contained"
        type="checkbox"
        size="large"
        style={{
          backgroundColor: "#F6F6F6",
          color: "#000000",
          padding: "10px 50px",
          marginBottom:'10px'

        }}
        onClick={clickLightGrey}
      >
        Light Grey
      </Button>
    </div>
  );
};

export default ChangeButton;
