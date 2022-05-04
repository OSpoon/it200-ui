const { defaultTheme } = require("@vuepress/theme-default");

module.exports = {
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
