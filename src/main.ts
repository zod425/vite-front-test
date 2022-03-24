// vue app 선언
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

//import vuex
import store from "./store";

// 공통 css
import "./assets/styles/index.scss";
import "@mdi/font/scss/materialdesignicons.scss";

// import element-plus
import ElementPlus, { ElMessageBox } from "element-plus";
import locale from "element-plus/lib/locale/lang/ko";

// vue the mask 등록
import VueTheMask from "vue-the-mask";

// app mount
store
  .dispatch("auth/check")
  .then(() => {
    app
      .use(store)
      .use(ElementPlus, { locale, size: "default" })
      .use(VueTheMask)
      .mount("#app");
  })
  .catch(() => {
    ElMessageBox({
      message: "서버 접속에 실패했습니다. 잠시 후 다시 시도해 주십시오.",
      title: "오류",
      type: "error",
      center: true,
    }).then(() => {
      // no action
    });
  });
