<template>
  <section class="settings-page">
    <div class="page-header">
      <div class="page-title">
        <i class="fa-solid fa-gear"></i>
        <h1>Settings</h1>
      </div>
      <p>Manage your preferences, profile, and platform controls.</p>
    </div>

    <div class="settings-layout">
      <div class="settings-panels">
        <div class="panel-pill">
          <i class="fa-solid fa-sliders"></i>
          <span>Controls & Preferences</span>
        </div>

        <div class="settings-grid">
          <button class="settings-card" @click="activePanel = 'appearance'">
            <div class="settings-icon icon-blue">
              <i class="fa-solid fa-palette"></i>
            </div>
            <div class="settings-copy">
              <h3>Appearance Controls</h3>
              <p>Theme, layout, and display settings.</p>
            </div>
            <i class="fa-solid fa-chevron-right settings-arrow"></i>
          </button>

          <button class="settings-card" @click="activePanel = 'notifications'">
            <div class="settings-icon icon-orange">
              <i class="fa-solid fa-bell"></i>
            </div>
            <div class="settings-copy">
              <h3>Notification Preferences</h3>
              <p>Reminders, alerts, and progress updates.</p>
            </div>
            <i class="fa-solid fa-chevron-right settings-arrow"></i>
          </button>

          <button class="settings-card" @click="activePanel = 'accessibility'">
            <div class="settings-icon icon-green">
              <i class="fa-solid fa-universal-access"></i>
            </div>
            <div class="settings-copy">
              <h3>Accessibility Controls</h3>
              <p>Inclusive options for easier learning.</p>
            </div>
            <i class="fa-solid fa-chevron-right settings-arrow"></i>
          </button>

          <button class="settings-card" @click="activePanel = 'system'">
            <div class="settings-icon icon-purple">
              <i class="fa-solid fa-sliders"></i>
            </div>
            <div class="settings-copy">
              <h3>System Controls</h3>
              <p>Manage core platform behaviour.</p>
            </div>
            <i class="fa-solid fa-chevron-right settings-arrow"></i>
          </button>

          <button
            class="settings-card full-width"
            @click="activePanel = 'learning'"
          >
            <div class="settings-icon icon-yellow">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="settings-copy">
              <h3>Learning Preferences</h3>
              <p>Personalise how you learn and practise.</p>
            </div>
            <i class="fa-solid fa-chevron-right settings-arrow"></i>
          </button>
        </div>
      </div>

      <aside class="settings-profile">
        <div class="profile-card">
          <div class="profile-top">
            <div class="profile-avatar-wrap">
              <div class="profile-avatar">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <button
                class="profile-edit-btn avatar-edit"
                aria-label="Edit avatar"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>

            <div class="profile-badge">
              <i class="fa-solid fa-user"></i>
              Learner Profile
            </div>
          </div>

          <div class="profile-block">
            <div class="profile-label">Name</div>
            <div class="profile-field">
              <span class="profile-text">[Users Name]</span>
              <button class="profile-edit-btn" aria-label="Edit name">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </div>

          <div class="profile-block">
            <div class="profile-label">Description</div>
            <div class="profile-field">
              <span class="profile-text muted">Description.....</span>
              <button class="profile-edit-btn" aria-label="Edit description">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </div>

          <div class="profile-stats">
            <div class="mini-stat">
              <i class="fa-solid fa-fire"></i>
              <span>3-day streak</span>
            </div>
            <div class="mini-stat">
              <i class="fa-solid fa-award"></i>
              <span>5 badges</span>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <Transition name="panel-slide">
      <div
        v-if="activePanel"
        class="panel-overlay"
        @click.self="activePanel = null"
      >
        <div class="panel-drawer">
          <button
            class="panel-close"
            @click="activePanel = null"
            aria-label="Close"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div v-if="activePanel === 'appearance'">
            <h2 class="panel-title">
              <i class="fa-solid fa-palette"></i> Appearance Controls
            </h2>

            <div class="panel-section">
              <div class="panel-toggle-row">
                <div class="dark-mode-label">
                  <i
                    :class="darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"
                  ></i>
                  <div>
                    <strong>{{ darkMode ? "Dark Mode" : "Light Mode" }}</strong>
                    <p>Switch the overall colour theme of the platform.</p>
                  </div>
                </div>

                <label class="switch">
                  <input
                    type="checkbox"
                    v-model="darkMode"
                    @change="applyDarkMode"
                  />
                  <span class="slider"></span>
                </label>
              </div>
            </div>

            <p class="panel-placeholder">
              Further appearance options such as font size and colour scheme
              customisation will be available here in a future update.
            </p>
            <p class="panel-coming-soon">
              <i class="fa-solid fa-clock"></i> More controls coming soon.
            </p>
          </div>

          <div v-if="activePanel === 'notifications'">
            <h2 class="panel-title">
              <i class="fa-solid fa-bell"></i> Notification Preferences
            </h2>
            <p class="panel-placeholder">
              Stay on top of your learning journey. Here you will be able to
              manage alerts for streak reminders, new lesson availability,
              achievement unlocks, and weekly progress summaries.
            </p>
            <p class="panel-coming-soon">
              <i class="fa-solid fa-clock"></i> Full controls coming soon.
            </p>
          </div>

          <div v-if="activePanel === 'accessibility'">
            <h2 class="panel-title">
              <i class="fa-solid fa-universal-access"></i> Accessibility
              Controls
            </h2>
            <p class="panel-placeholder">
              Numerix Maths is built for everyone. This section will include
              options such as high contrast mode, screen reader support, reduced
              motion settings, and adjustable text spacing to ensure a
              comfortable experience for all learners.
            </p>
            <p class="panel-coming-soon">
              <i class="fa-solid fa-clock"></i> Full controls coming soon.
            </p>
          </div>

          <div v-if="activePanel === 'system'">
            <h2 class="panel-title">
              <i class="fa-solid fa-sliders"></i> System Controls
            </h2>
            <p class="panel-placeholder">
              Manage the core behaviour of the application. Options here will
              cover automatic progress saving, hint visibility, language
              selection, and the ability to reset your account data if needed.
            </p>
            <p class="panel-coming-soon">
              <i class="fa-solid fa-clock"></i> Full controls coming soon.
            </p>
          </div>

          <div v-if="activePanel === 'learning'">
            <h2 class="panel-title">
              <i class="fa-solid fa-graduation-cap"></i> Learning Preferences
            </h2>
            <p class="panel-placeholder">
              Tailor your learning experience to your own pace and goals. This
              section will let you set your preferred difficulty level,
              configure a daily question target, and choose whether step-by-step
              solutions are shown after each answer.
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

<style scoped>
.settings-page {
  min-height: 100%;
  padding: 32px;
  background: transparent;
}

.page-header {
  margin-bottom: 28px;
}

.page-title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}

.page-title i {
  font-size: 2rem;
  color: #2f66e8;
}

.page-header h1 {
  margin: 0;
  font-size: 2.4rem;
  line-height: 1;
  color: #14213d;
}

.page-header p {
  margin: 0;
  color: #4f6481;
  font-size: 1.02rem;
  font-weight: 500;
}

.settings-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: start;
}

.panel-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
  padding: 12px 20px;
  border: 2px solid #bcd3ff;
  border-radius: 999px;
  color: #2f66e8;
  background: #f4f8ff;
  font-weight: 700;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.settings-card {
  width: 100%;
  background: #ffffff;
  border: 1px solid #d8e0ea;
  border-radius: 24px;
  padding: 22px;
  box-shadow: 0 3px 12px rgba(31, 47, 70, 0.05);
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.settings-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(31, 47, 70, 0.08);
}

.settings-card.full-width {
  grid-column: 1 / -1;
}

.settings-icon {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.icon-blue {
  background: #e8f0ff;
  color: #2f66e8;
}
.icon-orange {
  background: #f8ebdc;
  color: #f06a11;
}
.icon-green {
  background: #e4f5e8;
  color: #22a447;
}
.icon-purple {
  background: #efe8fb;
  color: #7c4dff;
}
.icon-yellow {
  background: #f9f1d6;
  color: #c6922b;
}

.settings-copy h3 {
  margin: 0 0 6px;
  color: #14213d;
  font-size: 1.15rem;
}

.settings-copy p {
  margin: 0;
  color: #5b6e88;
  line-height: 1.5;
}

.settings-arrow {
  margin-left: auto;
  color: #8ca0bb;
}

.profile-card {
  background: #ffffff;
  border: 1px solid #d8e0ea;
  border-radius: 26px;
  padding: 24px;
  box-shadow: 0 3px 12px rgba(31, 47, 70, 0.05);
}

.profile-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-avatar-wrap {
  position: relative;
  margin-bottom: 16px;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #edf4ff;
  color: #2f66e8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  border: 6px solid #ffffff;
  box-shadow: 0 4px 12px rgba(31, 47, 70, 0.08);
}

.profile-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f4f8ff;
  color: #2f66e8;
  border: 1px solid #cfe0ff;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 0.9rem;
  font-weight: 700;
}

.profile-block {
  margin-bottom: 18px;
}
.profile-label {
  margin-bottom: 8px;
  color: #5f718c;
  font-size: 0.92rem;
  font-weight: 700;
}

.profile-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: #f8fafc;
  border: 1px solid #d8e0ea;
  border-radius: 16px;
  padding: 14px 16px;
}

.profile-text {
  color: #14213d;
  font-weight: 700;
}
.profile-text.muted {
  color: #5b6e88;
  font-weight: 500;
}

.profile-edit-btn {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 12px;
  background: #edf4ff;
  color: #2f66e8;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.avatar-edit {
  position: absolute;
  right: 0;
  bottom: 4px;
}

.profile-stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}

.mini-stat {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #1d3560;
  font-weight: 700;
  background: #f8fafc;
  border: 1px solid #d8e0ea;
  border-radius: 14px;
  padding: 12px 14px;
}

.mini-stat .fa-fire {
  color: #f97316;
}
.mini-stat .fa-award {
  color: #c6922b;
}

.panel-overlay {
  position: fixed;
  inset: 0;
  background: rgba(20, 33, 61, 0.28);
  display: flex;
  justify-content: flex-end;
  z-index: 50;
}

.panel-drawer {
  width: min(460px, 100%);
  height: 100%;
  background: #ffffff;
  padding: 28px 24px;
  position: relative;
  box-shadow: -8px 0 24px rgba(31, 47, 70, 0.15);
  overflow-y: auto;
}

.panel-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 12px;
  background: #edf4ff;
  color: #2f66e8;
  cursor: pointer;
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 24px;
  color: #14213d;
  font-size: 1.5rem;
}

.panel-title i {
  color: #2f66e8;
}

.panel-section {
  background: #f8fafc;
  border: 1px solid #d8e0ea;
  border-radius: 18px;
  padding: 18px;
  margin-bottom: 20px;
}

.panel-toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.dark-mode-label {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #14213d;
}

.dark-mode-label i {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: #edf4ff;
  color: #2f66e8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark-mode-label p {
  margin: 4px 0 0;
  color: #5b6e88;
  font-size: 0.95rem;
}

.panel-placeholder {
  color: #5b6e88;
  line-height: 1.7;
  margin: 0 0 16px;
}

.panel-coming-soon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f4f8ff;
  color: #2f66e8;
  border: 1px solid #cfe0ff;
  border-radius: 999px;
  padding: 10px 14px;
  font-weight: 700;
}

.switch {
  position: relative;
  display: inline-block;
  width: 58px;
  height: 32px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  inset: 0;
  background: #d8e0ea;
  border-radius: 999px;
  transition: 0.3s;
}

.slider::before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  left: 4px;
  top: 4px;
  background: white;
  border-radius: 50%;
  transition: 0.3s;
  box-shadow: 0 2px 6px rgba(31, 47, 70, 0.2);
}

.switch input:checked + .slider {
  background: #2f66e8;
}
.switch input:checked + .slider::before {
  transform: translateX(26px);
}

.panel-slide-enter-active,
.panel-slide-leave-active {
  transition: opacity 0.25s ease;
}
.panel-slide-enter-active .panel-drawer,
.panel-slide-leave-active .panel-drawer {
  transition: transform 0.25s ease;
}
.panel-slide-enter-from,
.panel-slide-leave-to {
  opacity: 0;
}
.panel-slide-enter-from .panel-drawer,
.panel-slide-leave-to .panel-drawer {
  transform: translateX(100%);
}

@media (max-width: 1000px) {
  .settings-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .settings-page {
    padding: 20px;
  }
  .page-header h1 {
    font-size: 2rem;
  }
  .settings-grid {
    grid-template-columns: 1fr;
  }
}
</style>
