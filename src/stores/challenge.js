import { defineStore } from "pinia";

export const useChallengeStore = defineStore("challenge", {
  state: () => ({
    challenges: [
      {
        title: "FAQ Accordion Card",
        level: "初級",
        desc: "In this challenge, you'll be building out an FAQ accordion. This is anextremely common front-end pattern, so it's a great opportunity to get some practice in!",
        source:
          "https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam",
        route: "/faq-accordion-card",
        screenshot: "/FMChallenges/Screenshots/faq-accordion-card-desktop.png",
      },
      {
        title: "Four Card Feature Section",
        level: "初級",
        desc: "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
        source:
          "https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK",
        route: "/four-card-feature",
        screenshot: "/FMChallenges/Screenshots/four-card-feature-desktop.png",
      },
      {
        title: "Social Media Dashboard with Theme Switcher",
        level: "中級",
        desc: "This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.",
        source:
          "https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H",
        route: "/social-media-dashboard",
        screenshot: "/FMChallenges/Screenshots/social-media-dashboard-desktop.png",
      },
      {
        title: "Intro Component with Sign-Up Form",
        level: "初級",
        desc: "Practice building out a sign-up form complete with client-side validation using JavaScript.",
        source:
          "https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1",
        route: "/intro-sign-up",
        screenshot: "/FMChallenges/Screenshots/intro-sign-up-desktop.png",
      },
      {
        title: "Single Price Grid Component",
        level: "初級",
        desc: "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
        source:
          "https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc",
        route: "/single-price-grid",
        screenshot: "/FMChallenges/Screenshots/single-price-grid-desktop.png",
      },
      {
        title: "Data Storage Component",
        level: "中級",
        desc: "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
        source:
          "https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n",
        route: "/data-storage",
        screenshot: "/FMChallenges/Screenshots/data-storage-desktop.png",
      },
      {
        title: "Article Preview Component",
        level: "初級",
        desc: "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
        source:
          "https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT",
        route: "/article-preview",
        screenshot: "/FMChallenges/Screenshots/article-preview-desktop.png",
      },
      {
        title: "Social Proof Section",
        level: "初級",
        desc: "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
        source:
          "https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA",
        route: "/social-proof-section",
        screenshot: "/FMChallenges/Screenshots/social-proof-section-desktop.png",
      },
      {
        title: "AdviceGeneratorApp",
        level: "中級",
        desc: "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
        source:
          "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
        route: "/advice-generator",
        screenshot: "/FMChallenges/Screenshots/advice-generator-desktop.png",
      },
    ],
  }),
  getters: {},
  actions: {},
});
