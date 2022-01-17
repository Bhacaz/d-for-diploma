import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Calculator from "../views/Calculator.vue";
import ExamListCalculator from "../views/ExamListCalculator";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
    alias: "/",
  },
  {
    path: "/exams",
    name: "Exams",
    component: ExamListCalculator,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
