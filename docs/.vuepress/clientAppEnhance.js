import { defineClientAppEnhance } from "@vuepress/client";
import Card from "./components/card.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component(Card.name, Card);
});
