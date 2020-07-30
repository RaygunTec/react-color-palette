import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
  state = { format: "hex", open: false };

  handleFormatChange = (e) => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  };

  closeSnackbar = () => {
    this.setState({ open: false });
  };

  render() {
    const { level, changeLevel, showingAllColors, classes } = this.props;
    const { format } = this.state;

    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showingAllColors && (
          <div className={classes.sliderContainer}>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <Select
          className={classes.formatSelect}
          value={format}
          onChange={this.handleFormatChange}
          style={{ marginLeft: "1rem" }}
        >
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
        <div className={classes.selectContainer}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed To {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
