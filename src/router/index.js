import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "FM Challenges | JasonZheng" },
    },
    {
      path: "/faq-accordion-card",
      name: "FAQ-Accordion-Card",
      component: () =>
        import("@/views/FAQAccordionCard/FAQAccordionCardView.vue"),
      meta: { title: "FAQ Accordion Card" },
    },
    {
      path: "/four-card-feature",
      name: "Four-Card-Feature",
      component: () =>
        import("@/views/FourCardFeature/FourCardFeatureView.vue"),
      meta: { title: "Four Card Feature" },
    },
    {
      path: "/social-media-dashboard",
      name: "Social-Media-Dashboard",
      component: () =>
        import("@/views/SocialMediaDashboard/SocialMediaDashboardView.vue"),
      meta: { title: "Social Media Dashboard" },
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;
