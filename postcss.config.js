// ANCHOR Purge (Remove) unused utility classes
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

// ANCHOR Minify CSS using cssnano
const cssnano = require("cssnano")({
  preset: "default",
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    // require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),

    // only needed if you want to purge
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : []),
  ],
};
