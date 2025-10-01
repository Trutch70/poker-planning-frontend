import { createRouter, createWebHistory } from "vue-router";
import OnboardingView from "@/views/OnboardingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "onboarding",
      component: OnboardingView,
    },
    {
      path: "/room/:id",
      name: "room",
      component: () => import("../views/RoomView.vue"),
    },
  ],
});

export default router;
