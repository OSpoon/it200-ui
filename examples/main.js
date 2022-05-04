import Vue from "vue";
import App from "./App.vue";

// import "../components/css/demo.scss";
// import Demo from "../components/lib/demo/index.js";
// Vue.use(Demo);

// import "../components/css/card.scss";
// import Card from "../components/lib/card/index.js";
// Vue.use(Card);

// import "../dist/css/index.css";
// import IT200UI from "../dist/index.umd";
// Vue.use(IT200UI);

// import "../dist/css/card.css";
// import Card from "../dist/card.umd";
// Vue.use(Card);

// import "../dist/css/demo.css";
// import Demo from "../dist/demo.umd";
// Vue.use(Demo);

import "it200-ui/dist/css/index.css";
import IT200UI from "it200-ui";
Vue.use(IT200UI);

// import "it200-ui/dist/css/card.css";
// import Card from "it200-ui/dist/card.umd";
// Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
