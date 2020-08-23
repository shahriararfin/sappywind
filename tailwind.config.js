const plugin = require("tailwindcss/plugin");
const _ = require("lodash");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: false,
  theme: {
    fontFamily: {
      sans: ['"Noto Sans Bengali"', '"Proxima Nova"'],
    },
    extend: {
      screens: {
        xs: { max: "425px" },
      },
      colors: {
        success: "#00c74c",
        bkash: "#e2136e",
        error: {
          "100": "#ff5252",
          "150": "#fd5c7c",
          "200": "#ec4566",
          "300": "#ff1744",
        },
        royal: {
          yellow: "#fabc01",
        },

        coal: {
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121",
        },
      },
      borderWidth: {
        "1/2": "0.5px",
        "3": "3px",
      },
      spacing: { "72": "18rem", "80": "20rem" },
      minWidth: {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
        "72": "18rem",
      },
      maxWidth: {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
        "72": "18rem",
      },
      minHeight: {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
        "-50": "-50",
      },
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "odd",
      "even",
      "active",
      "visited",
      "disabled",
    ],
    borderWidth: ["responsive", "first", "last"],
    cursor: ["responsive", "disabled"],
    margin: ["responsive", "first", "last"],
    padding: ["responsive", "first", "last"],
  },
  plugins: [
    // ANCHOR Truncate lines
    plugin(function ({ addUtilities, e }) {
      const limits = ["1", "2", "3", "4", "5"];
      const variants = ["responsive"];

      const utilities = _.map(limits, (lim) => ({
        [`.limit-${e(lim)}`]: {
          "-webkit-line-clamp": lim,
        },
      }));

      addUtilities(utilities, variants);
    }),

    // ANCHOR Grid Autofit
    plugin(function ({ addUtilities, e }) {
      const sizes = {
        "24": "6",
        "32": "8",
        "40": "10",
        "48": "12",
        "56": "14",
        "64": "16",
        "72": "18",
      };
      const variants = ["responsive"];

      const utilities = _.map(sizes, (value, key) => {
        return {
          [`.${e(`grid-fit-${key}`)}`]: {
            "grid-template-columns": `repeat(auto-fit, minmax(${value}rem, 1fr))`,
          },
        };
      });

      addUtilities(utilities, variants);
    }),

    // ANCHOR Grid Fixled Columns
    plugin(function ({ addUtilities, e }) {
      const columns = {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
        "72": "18rem",
        "80": "20rem",
      };
      const variants = ["responsive"];

      const utilities = _.map(columns, (value, key) => {
        return {
          [`.${e(`fixed-cols-${key}`)}`]: {
            "grid-template-columns": `${value} 1fr`,
          },
          [`.${e(`fixed-cols-r-${key}`)}`]: {
            "grid-template-columns": `1fr ${value}`,
          },
        };
      });

      addUtilities(utilities, variants);
    }),
  ],
};
