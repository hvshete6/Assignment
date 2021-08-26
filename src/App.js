import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import ChangeButton from "./ChangeButton";
import { store } from "./redux/store";


const useStyles = makeStyles((theme) => ({
  minus: {
    background: "#F3F2FC",
    borderRadius: 3,
    border: "2px solid #D64B4B",
    color: "#D64B4B",
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    fontSize: "22px",
    borderRadius: "7px",
  },
  plus: {
    borderRadius: 3,
    border: "2px solid #5E4FDB",
    color: "#5E4FDB",
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    fontSize: "22px",
    borderRadius: "7px",
  },
  empty: {
    borderRadius: 3,
    border: "2px solid #F3F2FC",
    color: "#5E4FDB",
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    fontSize: "22px",
    borderRadius: "7px",
  },
}));

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>-</Button>;
// }

function App() {
  const classes = useStyles();


  return (
    <div className="container">
      {/* ////////////////////////////////////// TOP Section ////////////////////////// */}

      <div className="buttons">
        <Button
          variant="contained"
          type="checkbox"
          size="large"
          style={{
            backgroundColor: "#5E4FDB",
            color: "#F3F2FC",
            padding: "10px 50px",
          }}
        >
          Button
        </Button>
      </div>

      <div className="buttons">
        <Button
          variant="outlined"
          color="primary"
          style={{
            border: "2px solid #5E4FDB",
            padding: "10px 50px",
            fontWeight: "bold",
            color: "#5E4FDB",
            fontWeight: "bold",
          }}
        >
          Button
        </Button>
      </div>

      <div className="buttons">
        <Button
          color="primary"
          style={{
            padding: "10px 50px",
            fontWeight: "bold",
            color: "#5E4FDB",
            fontWeight: "bold",
          }}
        >
          Button
        </Button>
      </div>

      <div className="operators">
        <div className="buttons2">
          <Button className={classes.minus}>-</Button>
        </div>
        <div className="buttons2">
          <Button className={classes.plus}>+</Button>
        </div>
        <div className="buttons2">
          <Button className={classes.empty}></Button>
        </div>
      </div>

      <div className="operators2">
        <div className="buttons2">
          <Button
            className={classes.minus}
            style={{ background: "#D64B4B", color: "#F3F2FC", border: "none" }}
          >
            -
          </Button>
        </div>
        <div className="buttons2">
          <Button
            className={classes.plus}
            style={{ background: "#5E4FDB", color: "#F3F2FC", border: "none" }}
          >
            +
          </Button>
        </div>
        <div className="buttons2">
          <Button
            className={classes.minus}
            style={{ background: "#1ABC9C", color: "#F3F2FC", border: "none" }}
          >
            ✓
          </Button>
        </div>
      </div>

      {/* ////////////////////////////////////// Bottom Section ////////////////////////// */}

      <div className="lastSection">
        <div className="toggleBox">
          <div className="toggle">
            <input type="checkbox" className="red" id="one" />
            <label htmlFor="" className="no">
              No
            </label>
          </div>
        </div>
        <div className="toggleBox">
          <div className="toggle">
            <input type="checkbox" className="green" id="two" />
            <label htmlFor="" className="yes">
              Yes
            </label>
          </div>
        </div>
        <div className="toggleBox">
          <div className="toggle">
            <input type="checkbox" className="green" id="two" />
            <label htmlFor="" className="blank"></label>
          </div>
        </div>
        <div className="toggleBox">
          <div className="toggle">
            <input type="checkbox" className="grey" id="one" />
            <label htmlFor="" className="no"></label>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////// Change Colour Section ////////////////////////// */}
      <Provider store={store}>
        <div className="changeButton" sty>
        <ChangeButton/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
