import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "sass/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faCartShopping, faUser);

createApp(App)
	.use(store)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
