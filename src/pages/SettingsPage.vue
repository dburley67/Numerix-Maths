<template>
  <section class="settings">

    <!-- Left: Settings Panels Grid -->
    <div class="settings-panels">

      <div class="settings-row">
        <button class="settings-card" @click="activePanel = 'appearance'">
          <i class="fa-solid fa-palette"></i>
          <span>Appearance<br />Controls</span>
        </button>

        <button class="settings-card" @click="activePanel = 'notifications'">
          <i class="fa-solid fa-bell"></i>
          <span>Notification<br />Preferences</span>
        </button>
      </div>

      <div class="settings-row">
        <button class="settings-card" @click="activePanel = 'accessibility'">
          <i class="fa-solid fa-universal-access"></i>
          <span>Accessibility<br />Controls</span>
        </button>

        <button class="settings-card" @click="activePanel = 'system'">
          <i class="fa-solid fa-sliders"></i>
          <span>System<br />Controls</span>
        </button>
      </div>

      <div class="settings-row">
        <button class="settings-card" @click="activePanel = 'learning'">
          <i class="fa-solid fa-graduation-cap"></i>
          <span>Learning<br />Preferences</span>
        </button>
      </div>

    </div>

    <!-- Right: Profile Card -->
    <div class="settings-profile">

      <div class="profile-avatar-wrap">
        <div class="profile-avatar">
          <i class="fa-solid fa-circle-user"></i>
        </div>
        <button class="profile-edit-btn avatar-edit" aria-label="Edit avatar">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>

      <div class="profile-name-wrap">
        <span class="profile-name">[Users Name]</span>
        <button class="profile-edit-btn" aria-label="Edit name">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>

      <div class="profile-desc-wrap">
        <span class="profile-desc">Description.....</span>
        <button class="profile-edit-btn" aria-label="Edit description">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>

    </div>

    <!-- Slide-in Panel Overlay -->
    <Transition name="panel-slide">
      <div v-if="activePanel" class="panel-overlay" @click.self="activePanel = null">
        <div class="panel-drawer">

          <button class="panel-close" @click="activePanel = null" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <!-- Appearance Controls -->
          <div v-if="activePanel === 'appearance'">
            <h2 class="panel-title">
              <i class="fa-solid fa-palette"></i> Appearance Controls
            </h2>

            <!-- Dark Mode Toggle -->
            <div class="panel-toggle-row space-between">
              <div class="dark-mode-label">
                <i :class="darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" class="dark-mode-icon"></i>
                <span>{{ darkMode ? 'Dark Mode' : 'Light Mode' }}</span>
              </div>
              <label class="switch">
                <input type="checkbox" v-model="darkMode" @change="applyDarkMode" />
                <span class="slider"></span>
              </label>
            </div>

            <p class="panel-placeholder" style="margin-top: 1.2rem;">
              Further appearance options such as font size and colour scheme
              customisation will be available here in a future update.
            </p>
            <p class="panel-coming-soon">
              <i class="fa-solid fa-clock"></i> More controls coming soon.
            </p>
          </div>

          <!-- Notification Preferences -->
          <div v-if="activePanel === 'notifications'">
            <h2 class="panel-title">
              <i class="fa-solid fa-bell"></i> Notification Preferences
            </h2>
            <p class="panel-placeholder">
              Stay on top of your learning journey. Here you will be able to manage
              alerts for streak reminders, new lesson availability, achievement
              unlocks, and weekly progress summaries.
            </p>
            <p class="panel-coming-soon">
              <i class="fa-solid fa-clock"></i> Full controls coming soon.
            </p>
          </div>

          <!-- Accessibility Controls -->
          <div v-if="activePanel === 'accessibility'">
            <h2 class="panel-title">
              <i class="fa-solid fa-universal-access"></i> Accessibility Controls
            </h2>
            <p class="panel-placeholder">
              Numerix Maths is built for everyone. This section will include options
              such as high contrast mode, screen reader support, reduced motion
              settings, and adjustable text spacing to ensure a comfortable experience
              for all learners.
            </p>
            <p class="panel-coming-soon">
              <i class="fa-solid fa-clock"></i> Full controls coming soon.
            </p>
          </div>

          <!-- System Controls -->
          <div v-if="activePanel === 'system'">
            <h2 class="panel-title">
              <i class="fa-solid fa-sliders"></i> System Controls
            </h2>
            <p class="panel-placeholder">
              Manage the core behaviour of the application. Options here will cover
              automatic progress saving, hint visibility, language selection, and the
              ability to reset your account data if needed.
            </p>
            <p class="panel-coming-soon">
              <i class="fa-solid fa-clock"></i> Full controls coming soon.
            </p>
          </div>

          <!-- Learning Preferences -->
          <div v-if="activePanel === 'learning'">
            <h2 class="panel-title">
              <i class="fa-solid fa-graduation-cap"></i> Learning Preferences
            </h2>
            <p class="panel-placeholder">
              Tailor your learning experience to your own pace and goals. This section
              will let you set your preferred difficulty level, configure a daily
              question target, and choose whether step-by-step solutions are shown
              after each answer.
            </p>
            <p class="panel-coming-soon">
              <i class="fa-solid fa-clock"></i> Full controls coming soon.
            </p>
          </div>

        </div>
      </div>
    </Transition>

  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const activePanel = ref(null);
const darkMode = ref(false);

onMounted(() => {
  darkMode.value = localStorage.getItem("darkMode") === "true";
  applyDarkMode();
});

function applyDarkMode() {
  document.body.classList.toggle("dark", darkMode.value);
  localStorage.setItem("darkMode", String(darkMode.value));
}
</script>
