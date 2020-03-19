module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "~": "./src",
          components: "./src/components",
          models: "./src/models",
          services: "./src/services",
          pages: "./src/pages"
        }
      }
    ]
  ]
};
