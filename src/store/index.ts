import { createStore, Store } from "vuex";
import createPersistedState from "vuex-persistedstate";

// vuex 에 관리되면서 local storage 에 같이 담긴다.
export default createStore({
  plugins: [
    createPersistedState({
      key: "hoban-admin-front",
      paths: ["auth.authorization", "layout", "menu.currentMenuPath"],
    }),
  ],
}) as Store<any>;
