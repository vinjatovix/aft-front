module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { auto: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
