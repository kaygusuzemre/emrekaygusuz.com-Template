import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
// 	apiKey: "AIzaSyBFbc5WDPd3KZ0rafKO136rYKQPfxnHLCw",
// 	authDomain: "myblogwebsite-fe03f.firebaseapp.com",
// 	projectId: "myblogwebsite-fe03f",
// 	storageBucket: "myblogwebsite-fe03f.appspot.com",
// 	messagingSenderId: "570532837073",
// 	appId: "1:570532837073:web:0d85e276cc1a3cb67f77f0",
// 	measurementId: "G-WCHXV8E8R9",
// };

// const analytics = getAnalytics(app);

const app = createApp(App);

app.use(router);
// app.initializeApp(firebaseConfig);
app.mount("#app");
