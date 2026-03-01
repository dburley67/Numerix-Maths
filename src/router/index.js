import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import LessonsPage from "../pages/LessonsPage.vue";
import PracticePage from "../pages/PracticePage.vue";
import AchievementsPage from "../pages/AchievementsPage.vue";
import GamesPage from "../pages/GamesPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import TeamPage from "../pages/TeamPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/lessons", component: LessonsPage },
  { path: "/practice", component: PracticePage },
  { path: "/achievements", component: AchievementsPage },
  { path: "/games", component: GamesPage },
  { path: "/settings", component: SettingsPage },
  { path: "/contact", component: ContactPage },
  { path: "/team", component: TeamPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});