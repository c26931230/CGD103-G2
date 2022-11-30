import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "sass/main.scss";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@/assets/sass/main.scss";
// import "bootstrap/sass/bootstrap.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
	faUserSecret,
	faCartShopping,
	faUser,
	faStar,
	faBook,
	faHeart,
	faFeather,
	faCoffee,
	faMagnifyingGlass,
	faBars,
	faCheck,
	faList,
	faClipboard,
	faPlus,



} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
	faUserSecret,
	faCartShopping,
	faUser,
	faStar,
	faHeart,
	faBook,
	faFeather,
	faCoffee,
	faMagnifyingGlass,
	faBars,
	faCheck,
	faList,
	faClipboard,
	faPlus,
);

// import Vue from 'vue';
// import VueCarousel from 'vue-carousel';

createApp(App)
	.use(store)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
