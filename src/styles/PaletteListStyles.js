import sizes from "./sizes";
// import bg from "./bg.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#4e54c8",
    //   "-webkit-linear-gradient(to right, #4A00E0, #8E2DE2)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #4e54c8, #8f94fb)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

    // backgroundImage: `url(${bg})`,
    overflow: "hidden",
    overflowY: "scroll",
  },
  heading: {
    fontSize: "1.5rem",
    [sizes.down("sm")]: {
      margin: "1rem",
    },
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },

    paddingBottom: "50px",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
    },
    [sizes.down("sm")]: {
      flexDirection: "column",
    },
  },
  button: {
    [sizes.down("sm")]: {
      marginBottom: "1rem",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
    },
  },
};
