<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isWelcome = computed(() => route.path === "/");

const bellOn = ref(false);
const toastShow = ref(false);
const toastText = ref("");

onMounted(() => {
  bellOn.value = localStorage.getItem("notificationsOn") === "true";
});

function toggleBell() {
  bellOn.value = !bellOn.value;
  localStorage.setItem("notificationsOn", String(bellOn.value));

  toastText.value = bellOn.value
    ? "Notifications turned ON"
    : "Notifications turned OFF";

  toastShow.value = true;
  setTimeout(() => (toastShow.value = false), 2000);
}
</script>

<template>
  <RouterView v-if="isWelcome" />

  <template v-else>
    <header class="topbar topbar--white">
      <div class="topbar-left topbar-left--white">
        <img
          src="/images/numerixMathsLogo.png"
          alt="Numerix Maths Logo"
          class="topbar-logo"
        />
      </div>

      <div class="topbar-right">
        <RouterLink to="/contact" class="topbar-contact">
          <span>Contact Us</span>
          <i class="fa-solid fa-envelope"></i>
        </RouterLink>

        <button class="topbar-ico fire" type="button" aria-label="Streak">
          <i class="fa-solid fa-fire"></i>
          <span class="tooltip">3-day streak - Keep it going!</span>
        </button>

        <button
          class="topbar-ico bell"
          type="button"
          aria-label="Notifications"
          @click="toggleBell"
          :class="{ active: bellOn }"
        >
          <i :class="bellOn ? 'fa-solid fa-bell' : 'fa-regular fa-bell'"></i>
        </button>

        <RouterLink to="/settings" class="profile-link" aria-label="Settings">
          <i class="fa-solid fa-circle-user"></i>
        </RouterLink>
      </div>
    </header>

    <div class="layout">
      <nav class="nav">
        <ul>
          <li>
            <RouterLink to="/home" class="nav-item" exact-active-class="active"
              ><i class="fa-solid fa-house"></i><span>Home</span></RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/lessons"
              class="nav-item"
              exact-active-class="active"
              ><i class="fa-solid fa-book-open"></i
              ><span>Lessons</span></RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/practice"
              class="nav-item"
              exact-active-class="active"
              ><i class="fa-solid fa-pen"></i><span>Practice</span></RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/achievements"
              class="nav-item"
              exact-active-class="active"
              ><i class="fa-solid fa-award"></i
              ><span>Achievements</span></RouterLink
            >
          </li>
          <li>
            <RouterLink to="/games" class="nav-item" exact-active-class="active"
              ><i class="fa-solid fa-gamepad"></i><span>Games</span></RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/settings"
              class="nav-item"
              exact-active-class="active"
              ><i class="fa-solid fa-gear"></i><span>Settings</span></RouterLink
            >
          </li>
        </ul>
      </nav>

      <main class="main-content">
        <RouterView />
      </main>
    </div>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <strong>Numerix Maths</strong>
            <div class="footer-tagline">Learn • Practice • Succeed</div>
          </div>

          <div class="footer-actions">
            <RouterLink to="/team"
              ><i class="fa-solid fa-people-group"></i> Team</RouterLink
            >
            <RouterLink to="/contact"
              ><i class="fa-solid fa-envelope"></i> Contact</RouterLink
            >
          </div>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-grid">
          <div class="footer-col">
            <p>Developed by CoreWave Digital</p>
            <p>MOD008917 - Team Based Project</p>
          </div>

          <div class="footer-col footer-col-center">
            <p>Anglia Ruskin University</p>
          </div>

          <div class="footer-col footer-col-right">
            <a href="#">Accessibility Statement</a>
            <a href="#">Privacy Notice</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        © 2026 Numerix Maths - Educational Prototype Project
      </div>

      <div id="notification-toast" class="toast" :class="{ show: toastShow }">
        {{ toastText }}
      </div>
    </footer>
  </template>
</template>
