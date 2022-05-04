const { defaultTheme } = require("@vuepress/theme-default");

module.exports = {
  base: "/it200-ui/",
  theme: defaultTheme({
    sidebar: [
      "/",
      {
        text: "Card",
        link: "/components/card",
      },
    ],
  }),
};
