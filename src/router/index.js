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

// Lesson Imports
import Lesson1 from "../pages/DecimalRounding.vue";
import Lesson2 from "../pages/FactorMultiplesPrimes.vue";
import Lesson3 from "../pages/StandardForm.vue";
import Lesson4 from "../pages/PercentageFinance.vue";
import Lesson5 from "../pages/FinanceLesson.vue";
import Lesson6 from "../pages/BasicOperations.vue";
import Lesson7 from "../pages/BIDMAS.vue";
import Lesson8 from "../pages/NegativeNumbers.vue";
import Lesson9 from "../pages/ProbabilityLesson.vue";

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
  
  // Lesson Routes
  { path: "/Lesson1", component: Lesson1 },
  { path: "/Lesson2", component: Lesson2 },
  { path: "/Lesson3", component: Lesson3 },
  { path: "/Lesson4", component: Lesson4 },
  { path: "/Lesson5", component: Lesson5 }, 
  { path: "/Lesson6", component: Lesson6 },
  { path: "/Lesson7", component: Lesson7 },
  { path: "/Lesson8", component: Lesson8 },
  { path: "/Lesson9", component: Lesson9 } 
];

export default createRouter({
  history: createWebHistory(),
  routes,
});