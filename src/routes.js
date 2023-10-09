import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import CustomDropDownInput from "./views/CustomDropDownInput.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/drop-down",
    name: "CustomDropDownInput",
    component: CustomDropDownInput,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
