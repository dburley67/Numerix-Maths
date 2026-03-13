import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "../pages/WelcomePage.vue";
import HomePage from "../pages/HomePage.vue";
import LessonsPage from "../pages/LessonsPage.vue";
import PracticePage from "../pages/PracticePage.vue";
import AchievementsPage from "../pages/AchievementsPage.vue";
import GamesPage from "../pages/GamesPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import Lesson1 from "../pages/DecimalRounding.vue";
import Lesson2 from "../pages/FactorMultiplesPrimes.vue";
import Lesson3 from "../pages/StandardForm.vue";


const routes = [
  { path: "/", component: WelcomePage, meta: { layout: "welcome" } },

  { path: "/home", component: HomePage },
  { path: "/lessons", component: LessonsPage },
  { path: "/practice", component: PracticePage },
  { path: "/achievements", component: AchievementsPage },
  { path: "/games", component: GamesPage },
  { path: "/settings", component: SettingsPage },
  { path: "/contact", component: ContactPage },
  { path: "/team", component: TeamPage },
  { path: "/Lesson1", component: Lesson1},
  { path: "/Lesson2", component: Lesson2},
  { path: "/Lesson3", component: Lesson3}
];

export default createRouter({
  history: createWebHistory(),
  routes,
});