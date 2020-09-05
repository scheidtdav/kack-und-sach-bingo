const theme = {
  name: "K&S Theme",
  rounding: 0,
  spacing: 15,
  global: {
    colors: {
      brand: "#e90014",
      text: "#000000",
      background: "brand",
      border: "text",
      control: "brand",
      focus: undefined,
    },
    font: {
      family: '"Oswald", sans-serif',
      size: "15px",
      height: "20px",
    },
    elevation: {
      dark: {
        none: "none",
        xsmall: "0px 1px 2px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  button: {
    default: {
      border: {
        width: "1px",
        radius: "4px",
      },
      padding: "xxsmall",
    },
    active: {
      background: {
        color: "#ffffff",
      },
    },
  },
  text: {
    medium: {
      size: "12px",
      height: "18px",
    },
  },
};

export default theme;
