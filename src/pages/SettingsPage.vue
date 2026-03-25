<script setup>
import { ref, reactive, onMounted, watch } from "vue";

const activePanel = ref(null);

// ── Defaults ────────────
const defaults = {
  appearance:    { darkMode: false, fontSize: "medium", compactLayout: false },
  notifications: { streakReminders: true, newLessons: true, achievements: true, reminderTime: "18:00" },
  accessibility: { highContrast: false, reducedMotion: false, textSpacing: false },
  system:        { language: "en" },
  learning:      { difficulty: "adaptive", dailyTarget: 10, showHints: true },
};

// ── Load save ────────────
function loadSettings() {
  try {
    const saved = localStorage.getItem("nx_settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      
      return {
        appearance:    { ...defaults.appearance,    ...parsed.appearance },
        notifications: { ...defaults.notifications, ...parsed.notifications },
        accessibility: { ...defaults.accessibility, ...parsed.accessibility },
        system:        { ...defaults.system,        ...parsed.system },
        learning:      { ...defaults.learning,      ...parsed.learning },
      };
    }
  } catch {}
  return JSON.parse(JSON.stringify(defaults));
}

const settings = reactive(loadSettings());

watch(settings, () => {
  localStorage.setItem("nx_settings", JSON.stringify(settings));
  applyGlobalEffects();
}, { deep: true });

// ── Apply effects to <body> ──────────────────────────
function applyGlobalEffects() {
  const root = document.documentElement;
  const body = document.body;

  // Dark mode 
  body.classList.toggle("dark", settings.appearance.darkMode);

  // Font size — sets CSS variable consumed anywhere with var(--base-font-size)
  const sizeMap = { small: "13px", medium: "16px", large: "19px" };
  root.style.fontSize = sizeMap[settings.appearance.fontSize] || "16px";

  // Compact layout — reduces main-content padding
  if (settings.appearance.compactLayout) {
    document.querySelector(".main-content")?.style.setProperty("padding", "20px");
  } else {
    document.querySelector(".main-content")?.style.removeProperty("padding");
  }

  // High contrast
  body.classList.toggle("high-contrast", settings.accessibility.highContrast);

  // Reduce motion — disables transitions globally via class
  body.classList.toggle("reduce-motion", settings.accessibility.reducedMotion);

  // Text spacing
  body.classList.toggle("text-spacing", settings.accessibility.textSpacing);
}

onMounted(applyGlobalEffects);

// ── Reset dialog ───────────────────────────────────────────────
const resetConfirmVisible = ref(false);
function requestReset() { resetConfirmVisible.value = true; }
function cancelReset()  { resetConfirmVisible.value = false; }
function confirmReset() {
  const fresh = JSON.parse(JSON.stringify(defaults));
  Object.assign(settings.appearance,    fresh.appearance);
  Object.assign(settings.notifications, fresh.notifications);
  Object.assign(settings.accessibility, fresh.accessibility);
  Object.assign(settings.system,        fresh.system);
  Object.assign(settings.learning,      fresh.learning);
  localStorage.removeItem("nx_settings");
  resetConfirmVisible.value = false;
  applyGlobalEffects();
}

// ── Saved ────────────────────────────────────────────────
const toastVisible = ref(false);
let toastTimer = null;
watch(settings, () => {
  toastVisible.value = true;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toastVisible.value = false; }, 2000);
}, { deep: true });
</script>

<template>
  <section class="sp-page">

    <!-- Header -->
    <div class="sp-header">
      <div class="sp-title-row">
        <i class="fa-solid fa-gear"></i>
        <h1>Settings</h1>
      </div>
      <p>Manage your preferences, profile, and platform controls.</p>
    </div>

    <!-- Layout: cards + profile -->
    <div class="sp-layout">

      <!-- Left: setting cards -->
      <div class="sp-cards-col">
        <div class="sp-pill">
          <i class="fa-solid fa-sliders"></i>
          <span>Controls &amp; Preferences</span>
        </div>

        <div class="sp-grid">
          <button class="sp-card" @click="activePanel = 'appearance'">
            <div class="sp-icon sp-blue"><i class="fa-solid fa-palette"></i></div>
            <div class="sp-copy">
              <h3>Appearance Controls</h3>
              <p>Theme, layout, and display settings.</p>
            </div>
            <i class="fa-solid fa-chevron-right sp-arrow"></i>
          </button>

          <button class="sp-card" @click="activePanel = 'notifications'">
            <div class="sp-icon sp-orange"><i class="fa-solid fa-bell"></i></div>
            <div class="sp-copy">
              <h3>Notification Preferences</h3>
              <p>Reminders, alerts, and progress updates.</p>
            </div>
            <i class="fa-solid fa-chevron-right sp-arrow"></i>
          </button>

          <button class="sp-card" @click="activePanel = 'accessibility'">
            <div class="sp-icon sp-green"><i class="fa-solid fa-universal-access"></i></div>
            <div class="sp-copy">
              <h3>Accessibility Controls</h3>
              <p>Inclusive options for easier learning.</p>
            </div>
            <i class="fa-solid fa-chevron-right sp-arrow"></i>
          </button>

          <button class="sp-card" @click="activePanel = 'system'">
            <div class="sp-icon sp-purple"><i class="fa-solid fa-sliders"></i></div>
            <div class="sp-copy">
              <h3>System Controls</h3>
              <p>Manage core platform behaviour.</p>
            </div>
            <i class="fa-solid fa-chevron-right sp-arrow"></i>
          </button>

          <button class="sp-card sp-full" @click="activePanel = 'learning'">
            <div class="sp-icon sp-yellow"><i class="fa-solid fa-graduation-cap"></i></div>
            <div class="sp-copy">
              <h3>Learning Preferences</h3>
              <p>Personalise how you learn and practise.</p>
            </div>
            <i class="fa-solid fa-chevron-right sp-arrow"></i>
          </button>
        </div>
      </div>

      <!-- Right: profile card -->
      <aside class="sp-profile-col">
        <div class="sp-profile-card">
          <div class="sp-profile-top">
            <div class="sp-avatar-wrap">
              <div class="sp-avatar"><i class="fa-solid fa-circle-user"></i></div>
              <button class="sp-edit-btn sp-avatar-edit" aria-label="Edit avatar">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
            <div class="sp-badge"><i class="fa-solid fa-user"></i> Learner Profile</div>
          </div>

          <div class="sp-profile-block">
            <div class="sp-profile-label">Name</div>
            <div class="sp-profile-field">
              <span class="sp-profile-text">[Users Name]</span>
              <button class="sp-edit-btn" aria-label="Edit name"><i class="fa-solid fa-pen-to-square"></i></button>
            </div>
          </div>

          <div class="sp-profile-block">
            <div class="sp-profile-label">Description</div>
            <div class="sp-profile-field">
              <span class="sp-profile-text sp-muted">Description.....</span>
              <button class="sp-edit-btn" aria-label="Edit description"><i class="fa-solid fa-pen-to-square"></i></button>
            </div>
          </div>

          <div class="sp-stats">
            <div class="sp-stat"><i class="fa-solid fa-fire"></i><span>3-day streak</span></div>
            <div class="sp-stat"><i class="fa-solid fa-award"></i><span>5 badges</span></div>
          </div>
        </div>
      </aside>
    </div>

    <!-- SLIDE-IN DRAWER  -->
    <Transition name="sp-slide">
      <div v-if="activePanel" class="sp-overlay" @click.self="activePanel = null">
        <div class="sp-drawer">
          <button class="sp-close" @click="activePanel = null" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <!-- APPEARANCE -->
          <div v-if="activePanel === 'appearance'">
            <h2 class="sp-drawer-title"><i class="fa-solid fa-palette"></i> Appearance Controls</h2>

            <div class="sp-section">
              <div class="sp-row">
                <div class="sp-label-group">
                  <div class="sp-ico sp-ico-blue"><i :class="settings.appearance.darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"></i></div>
                  <div>
                    <strong>{{ settings.appearance.darkMode ? "Dark Mode" : "Light Mode" }}</strong>
                    <p>Switch the overall colour theme of the app.</p>
                  </div>
                </div>
                <label class="sp-switch">
                  <input type="checkbox" v-model="settings.appearance.darkMode" />
                  <span class="sp-slider"></span>
                </label>
              </div>
            </div>

            <div class="sp-section">
              <div class="sp-row">
                <div class="sp-label-group">
                  <div class="sp-ico sp-ico-blue"><i class="fa-solid fa-table-columns"></i></div>
                  <div>
                    <strong>Compact Layout</strong>
                    <p>Reduce padding for a denser view.</p>
                  </div>
                </div>
                <label class="sp-switch">
                  <input type="checkbox" v-model="settings.appearance.compactLayout" />
                  <span class="sp-slider"></span>
                </label>
              </div>
            </div>

            <div class="sp-section">
              <div class="sp-label-group sp-mb">
                <div class="sp-ico sp-ico-blue"><i class="fa-solid fa-text-height"></i></div>
                <div>
                  <strong>Font Size</strong>
                  <p>Adjust the text size across the platform.</p>
                </div>
              </div>
              <div class="sp-seg">
                <button v-for="o in [{v:'small',l:'Small'},{v:'medium',l:'Medium'},{v:'large',l:'Large'}]" :key="o.v"
                  :class="['sp-seg-btn', { active: settings.appearance.fontSize === o.v }]"
                  @click="settings.appearance.fontSize = o.v">{{ o.l }}</button>
              </div>
            </div>
          </div>

          <!-- NOTIFICATIONS -->
          <div v-if="activePanel === 'notifications'">
            <h2 class="sp-drawer-title"><i class="fa-solid fa-bell"></i> Notification Preferences</h2>

            <div class="sp-section">
              <div class="sp-row">
                <div class="sp-label-group">
                  <div class="sp-ico sp-ico-orange"><i class="fa-solid fa-fire"></i></div>
                  <div><strong>Streak Reminders</strong><p>Daily nudges to keep your streak alive.</p></div>
                </div>
                <label class="sp-switch">
                  <input type="checkbox" v-model="settings.notifications.streakReminders" />
                  <span class="sp-slider"></span>
                </label>
              </div>
            </div>

            <div class="sp-section" v-if="settings.notifications.streakReminders">
              <div class="sp-label-group sp-mb">
                <div class="sp-ico sp-ico-blue"><i class="fa-solid fa-clock"></i></div>
                <div><strong>Reminder Time</strong><p>When to send your daily streak reminder.</p></div>
              </div>
              <input type="time" class="sp-time-input" v-model="settings.notifications.reminderTime" />
            </div>

            <div class="sp-section">
              <div class="sp-row">
                <div class="sp-label-group">
                  <div class="sp-ico sp-ico-blue"><i class="fa-solid fa-book-open"></i></div>
                  <div><strong>New Lessons</strong><p>Alerts when new content is available.</p></div>
                </div>
                <label class="sp-switch">
                  <input type="checkbox" v-model="settings.notifications.newLessons" />
                  <span class="sp-slider"></span>
                </label>
              </div>
            </div>

            <div class="sp-section">
              <div class="sp-row">
                <div class="sp-label-group">
                  <div class="sp-ico sp-ico-yellow"><i class="fa-solid fa-award"></i></div>
                  <div><strong>Achievement Unlocks</strong><p>Get notified when you earn a badge.</p></div>
                </div>
                <label class="sp-switch">
                  <input type="checkbox" v-model="settings.notifications.achievements" />
                  <span class="sp-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- ACCESSIBILITY -->
          <div v-if="activePanel === 'accessibility'">
            <h2 class="sp-drawer-title"><i class="fa-solid fa-universal-access"></i> Accessibility Controls</h2>

            <div class="sp-section">
              <div class="sp-row">
                <div class="sp-label-group">
                  <div class="sp-ico sp-ico-blue"><i class="fa-solid fa-circle-half-stroke"></i></div>
                  <div><strong>High Contrast</strong><p>Increase contrast for better readability.</p></div>
                </div>
                <label class="sp-switch">
                  <input type="checkbox" v-model="settings.accessibility.highContrast" />
                  <span class="sp-slider"></span>
                </label>
              </div>
            </div>

            <div class="sp-section">
              <div class="sp-row">
                <div class="sp-label-group">
                  <div class="sp-ico sp-ico-blue"><i class="fa-solid fa-wind"></i></div>
                  <div><strong>Reduce Motion</strong><p>Minimise animations and transitions.</p></div>
                </div>
                <label class="sp-switch">
                  <input type="checkbox" v-model="settings.accessibility.reducedMotion" />
                  <span class="sp-slider"></span>
                </label>
              </div>
            </div>

            <div class="sp-section">
              <div class="sp-row">
                <div class="sp-label-group">
                  <div class="sp-ico sp-ico-blue"><i class="fa-solid fa-align-left"></i></div>
                  <div><strong>Increased Text Spacing</strong><p>More breathing room between lines and letters.</p></div>
                </div>
                <label class="sp-switch">
                  <input type="checkbox" v-model="settings.accessibility.textSpacing" />
                  <span class="sp-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- SYSTEM -->
          <div v-if="activePanel === 'system'">
            <h2 class="sp-drawer-title"><i class="fa-solid fa-sliders"></i> System Controls</h2>

            <div class="sp-section">
              <div class="sp-label-group sp-mb">
                <div class="sp-ico sp-ico-blue"><i class="fa-solid fa-globe"></i></div>
                <div><strong>Language</strong><p>Choose your preferred interface language.</p></div>
              </div>
              <select class="sp-select" v-model="settings.system.language">
                <option value="en">🇬🇧 English</option>
                <option value="fr">🇫🇷 French</option>
                <option value="de">🇩🇪 German</option>
                <option value="es">🇪🇸 Spanish</option>
              </select>
            </div>

            <div class="sp-section sp-danger-section">
              <div class="sp-label-group sp-mb">
                <div class="sp-ico sp-ico-red"><i class="fa-solid fa-triangle-exclamation"></i></div>
                <div><strong>Reset Account Data</strong><p>Clear all progress and restore defaults. This cannot be undone.</p></div>
              </div>
              <button class="sp-btn-danger" @click="requestReset">
                <i class="fa-solid fa-trash"></i> Reset All Data
              </button>
            </div>
          </div>

          <!-- LEARNING -->
          <div v-if="activePanel === 'learning'">
            <h2 class="sp-drawer-title"><i class="fa-solid fa-graduation-cap"></i> Learning Preferences</h2>

            <div class="sp-section">
              <div class="sp-label-group sp-mb">
                <div class="sp-ico sp-ico-blue"><i class="fa-solid fa-chart-line"></i></div>
                <div><strong>Difficulty Level</strong><p>How questions are selected for you.</p></div>
              </div>
              <div class="sp-seg">
                <button v-for="o in [{v:'easy',l:'Easy'},{v:'adaptive',l:'Adaptive'},{v:'hard',l:'Hard'}]" :key="o.v"
                  :class="['sp-seg-btn', { active: settings.learning.difficulty === o.v }]"
                  @click="settings.learning.difficulty = o.v">{{ o.l }}</button>
              </div>
            </div>

            <div class="sp-section">
              <div class="sp-label-group sp-mb">
                <div class="sp-ico sp-ico-orange"><i class="fa-solid fa-bullseye"></i></div>
                <div>
                  <strong>Daily Question Target</strong>
                  <p>Currently set to <strong>{{ settings.learning.dailyTarget }}</strong> questions per day.</p>
                </div>
              </div>
              <div class="sp-range-row">
                <span class="sp-range-label">5</span>
                <input type="range" min="5" max="50" step="5" v-model.number="settings.learning.dailyTarget" class="sp-range" />
                <span class="sp-range-label">50</span>
              </div>
              <div class="sp-ticks">
                <span v-for="n in [5,10,15,20,25,30,35,40,45,50]" :key="n"
                  :class="['sp-tick', { active: settings.learning.dailyTarget === n }]">{{ n }}</span>
              </div>
            </div>

            <div class="sp-section">
              <div class="sp-row">
                <div class="sp-label-group">
                  <div class="sp-ico sp-ico-yellow"><i class="fa-solid fa-lightbulb"></i></div>
                  <div><strong>Show Hints</strong><p>Display hint buttons during questions.</p></div>
                </div>
                <label class="sp-switch">
                  <input type="checkbox" v-model="settings.learning.showHints" />
                  <span class="sp-slider"></span>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Transition>

    <!-- RESET CONFIRM DIALOG -->
    <Transition name="sp-fade">
      <div v-if="resetConfirmVisible" class="sp-dialog-overlay" @click.self="cancelReset">
        <div class="sp-dialog">
          <div class="sp-dialog-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
          <h3>Reset all data?</h3>
          <p>This will clear all your progress and restore default settings. This cannot be undone.</p>
          <div class="sp-dialog-actions">
            <button class="sp-btn-ghost" @click="cancelReset">Cancel</button>
            <button class="sp-btn-danger" @click="confirmReset">Yes, reset everything</button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- SAVED TOAST  -->
    <Transition name="sp-toast">
      <div v-if="toastVisible" class="sp-toast">
        <i class="fa-solid fa-check"></i> Settings saved
      </div>
    </Transition>

  </section>
</template>

<style scoped>
/* ── PAGE ───────────────────────────────────────────────────── */
.sp-page {
  padding: 32px;
  min-height: 100%;
}

.sp-header { margin-bottom: 28px; }
.sp-title-row {
  display: flex; align-items: center; gap: 14px; margin-bottom: 8px;
}
.sp-title-row i { font-size: 2rem; color: #2563eb; }
.sp-title-row h1 { margin: 0; font-size: 2.2rem; font-weight: 800; color: var(--text-dark); }
.sp-header > p  { margin: 0; color: var(--text-primary); font-size: 1rem; font-weight: 500; }

/* ── LAYOUT ─────────────────────────────────────────────────── */
.sp-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: start;
}

/* ── PILL ───────────────────────────────────────────────────── */
.sp-pill {
  display: inline-flex; align-items: center; gap: 10px;
  margin-bottom: 18px; padding: 10px 18px;
  border: 2px solid #bcd3ff; border-radius: 999px;
  color: #2563eb; background: #f0f5ff; font-weight: 700;
}

/* ── CARD GRID ──────────────────────────────────────────────── */
.sp-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.sp-full { grid-column: 1 / -1; }

.sp-card {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 20px;
  display: flex; align-items: center; gap: 14px;
  text-align: left; cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  font-family: "Poppins", sans-serif;
}
.sp-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);
  border-color: #2563eb;
}

.sp-icon {
  width: 54px; height: 54px; flex-shrink: 0;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
}
.sp-blue   { background: #dbeafe; color: #2563eb; }
.sp-orange { background: #ffedd5; color: #ea580c; }
.sp-green  { background: #dcfce7; color: #16a34a; }
.sp-purple { background: #ede9fe; color: #7c3aed; }
.sp-yellow { background: #fef3c7; color: #d97706; }

.sp-copy h3 { margin: 0 0 5px; font-size: 1.05rem; font-weight: 700; color: var(--text-dark); }
.sp-copy p  { margin: 0; font-size: 0.88rem; color: var(--text-primary); line-height: 1.5; }
.sp-arrow   { margin-left: auto; color: var(--text-primary); opacity: 0.5; }

/* ── PROFILE CARD ───────────────────────────────────────────── */
.sp-profile-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 3px 12px rgba(15, 23, 42, 0.05);
}
.sp-profile-top {
  display: flex; flex-direction: column; align-items: center; margin-bottom: 18px;
}
.sp-avatar-wrap { position: relative; margin-bottom: 14px; }
.sp-avatar {
  width: 110px; height: 110px; border-radius: 50%;
  background: #dbeafe; color: #2563eb;
  display: flex; align-items: center; justify-content: center;
  font-size: 3.8rem;
  border: 5px solid var(--bg-card);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);
}
.sp-badge {
  display: inline-flex; align-items: center; gap: 7px;
  background: #eff6ff; color: #2563eb;
  border: 1px solid #bfdbfe; border-radius: 999px;
  padding: 7px 14px; font-size: 0.88rem; font-weight: 700;
}
.sp-profile-block { margin-bottom: 14px; }
.sp-profile-label { margin-bottom: 6px; font-size: 0.85rem; font-weight: 700; color: var(--text-primary); }
.sp-profile-field {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  background: var(--bg-page); border: 1px solid var(--border-color);
  border-radius: 14px; padding: 12px 14px;
}
.sp-profile-text { color: var(--text-dark); font-weight: 700; font-size: 0.95rem; }
.sp-muted { color: var(--text-primary); font-weight: 500; }
.sp-edit-btn {
  width: 34px; height: 34px; flex-shrink: 0;
  border: none; border-radius: 10px;
  background: #dbeafe; color: #2563eb;
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 0.9rem;
}
.sp-avatar-edit { position: absolute; right: 0; bottom: 2px; }
.sp-stats { display: flex; flex-direction: column; gap: 10px; margin-top: 6px; }
.sp-stat {
  display: flex; align-items: center; gap: 10px;
  background: var(--bg-page); border: 1px solid var(--border-color);
  border-radius: 12px; padding: 10px 14px;
  color: var(--text-dark); font-weight: 700; font-size: 0.92rem;
}
.sp-stat .fa-fire  { color: #f97316; }
.sp-stat .fa-award { color: #d97706; }

/* ── DRAWER OVERLAY ─────────────────────────────────────────── */
.sp-overlay {
  position: fixed;
  top: var(--topbar-height); /* sit flush below topbar */
  left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.35);
  display: flex; justify-content: flex-end;
  z-index: 999; /* above sidebar, below topbar (1000) */
}

.sp-drawer {
  width: min(460px, 100%);
  height: 100%;
  background: var(--panel-bg);
  padding: 28px 22px;
  position: relative;
  box-shadow: -6px 0 24px rgba(15, 23, 42, 0.15);
  overflow-y: auto;
}

.sp-close {
  position: absolute; top: 16px; right: 16px;
  width: 38px; height: 38px;
  border: none; border-radius: 10px;
  background: var(--bg-hover); color: var(--text-primary);
  cursor: pointer; font-size: 1rem;
  display: flex; align-items: center; justify-content: center;
}
.sp-close:hover { color: #dc2626; }

.sp-drawer-title {
  display: flex; align-items: center; gap: 10px;
  margin: 0 0 22px; color: var(--text-dark); font-size: 1.35rem; font-weight: 800;
}
.sp-drawer-title i { color: #2563eb; }

/* ── DRAWER SECTIONS ────────────────────────────────────────── */
.sp-section {
  background: var(--panel-row-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 12px;
}

.sp-row {
  display: flex; align-items: center;
  justify-content: space-between; gap: 14px;
}

.sp-label-group {
  display: flex; align-items: center; gap: 12px;
  color: var(--text-dark);
}
.sp-label-group strong { display: block; font-size: 0.95rem; }
.sp-label-group p { margin: 3px 0 0; color: var(--text-primary); font-size: 0.85rem; line-height: 1.4; }
.sp-mb { margin-bottom: 12px; }

.sp-ico {
  width: 40px; height: 40px; flex-shrink: 0;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
}
.sp-ico-blue   { background: #dbeafe; color: #2563eb; }
.sp-ico-orange { background: #ffedd5; color: #ea580c; }
.sp-ico-yellow { background: #fef3c7; color: #d97706; }
.sp-ico-green  { background: #dcfce7; color: #16a34a; }
.sp-ico-red    { background: #fee2e2; color: #dc2626; }

/* Toggle switch — uses sp- prefix to avoid clashing with global .switch/.slider */
.sp-switch {
  position: relative; display: inline-block;
  width: 52px; height: 28px; flex-shrink: 0;
}
.sp-switch input { display: none; }
.sp-slider {
  position: absolute; inset: 0;
  background: #cbd5e1; border-radius: 999px; transition: 0.25s;
  cursor: pointer;
}
.sp-slider::before {
  content: ""; position: absolute;
  width: 20px; height: 20px; left: 4px; top: 4px;
  background: #fff; border-radius: 50%;
  transition: 0.25s; box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}
.sp-switch input:checked + .sp-slider { background: #2563eb; }
.sp-switch input:checked + .sp-slider::before { transform: translateX(24px); }

/* Segmented control */
.sp-seg {
  display: flex; gap: 5px;
  background: var(--bg-hover); border-radius: 12px; padding: 4px;
}
.sp-seg-btn {
  flex: 1; padding: 9px 0;
  border: none; border-radius: 9px;
  background: transparent; color: var(--text-primary);
  font-family: "Poppins", sans-serif; font-weight: 600; font-size: 0.88rem;
  cursor: pointer; transition: all 0.15s;
}
.sp-seg-btn.active {
  background: var(--bg-card); color: #2563eb;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.1);
}

/* Time input */
.sp-time-input {
  width: 100%; padding: 11px 14px;
  border: 1px solid var(--border-color); border-radius: 12px;
  background: var(--bg-card); color: var(--text-dark);
  font-family: "Poppins", sans-serif; font-size: 0.95rem; font-weight: 600;
  outline: none; cursor: pointer;
}
.sp-time-input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }

/* Select */
.sp-select {
  width: 100%; padding: 11px 38px 11px 14px;
  border: 1px solid var(--border-color); border-radius: 12px;
  background: var(--bg-card); color: var(--text-dark);
  font-family: "Poppins", sans-serif; font-size: 0.95rem; font-weight: 600;
  outline: none; cursor: pointer; appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238ca0bb' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center;
}
.sp-select:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }

/* Range */
.sp-range-row { display: flex; align-items: center; gap: 10px; }
.sp-range-label { font-size: 0.82rem; color: var(--text-primary); font-weight: 700; min-width: 18px; }
.sp-range {
  flex: 1; -webkit-appearance: none; appearance: none;
  height: 5px; border-radius: 999px;
  background: var(--border-color); outline: none; cursor: pointer;
}
.sp-range::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 20px; height: 20px; border-radius: 50%;
  background: #2563eb; border: 3px solid var(--bg-card);
  box-shadow: 0 2px 6px rgba(37,99,235,0.4); cursor: pointer;
}
.sp-ticks {
  display: flex; justify-content: space-between; margin-top: 6px;
}
.sp-tick { font-size: 0.72rem; color: var(--text-primary); opacity: 0.5; font-weight: 600; transition: 0.15s; }
.sp-tick.active { opacity: 1; color: #2563eb; }

/* Danger */
.sp-danger-section { border-color: #fca5a5 !important; background: #fff5f5 !important; }
.sp-btn-danger {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 18px; border: none; border-radius: 12px;
  background: #dc2626; color: #fff;
  font-family: "Poppins", sans-serif; font-size: 0.9rem; font-weight: 700;
  cursor: pointer; transition: background 0.15s;
}
.sp-btn-danger:hover { background: #b91c1c; }

/* ── RESET DIALOG ────────────────────────────────────────────── */
.sp-dialog-overlay {
  position: fixed; inset: 0;
  background: rgba(15, 23, 42, 0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000;
}
.sp-dialog {
  background: var(--bg-card); border-radius: 22px;
  padding: 30px; max-width: 360px; width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.25);
}
.sp-dialog-icon {
  width: 60px; height: 60px; border-radius: 50%;
  background: #fee2e2; color: #dc2626;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem; margin: 0 auto 14px;
}
.sp-dialog h3 { margin: 0 0 8px; color: var(--text-dark); font-size: 1.2rem; }
.sp-dialog p  { color: var(--text-primary); margin: 0 0 22px; line-height: 1.6; font-size: 0.9rem; }
.sp-dialog-actions { display: flex; gap: 10px; justify-content: center; }
.sp-btn-ghost {
  padding: 11px 18px; border: 1px solid var(--border-color); border-radius: 12px;
  background: var(--bg-page); color: var(--text-primary);
  font-family: "Poppins", sans-serif; font-size: 0.9rem; font-weight: 700; cursor: pointer;
  transition: background 0.15s;
}
.sp-btn-ghost:hover { background: var(--bg-hover); }

/* ── TOAST ───────────────────────────────────────────────────── */
.sp-toast {
  position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
  background: #0f172a; color: #fff;
  padding: 11px 20px; border-radius: 999px;
  font-family: "Poppins", sans-serif; font-weight: 700; font-size: 0.9rem;
  display: flex; align-items: center; gap: 9px;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.3);
  z-index: 3000; white-space: nowrap;
}
.sp-toast .fa-check { color: #4ade80; }

/* ── TRANSITIONS ─────────────────────────────────────────────── */
.sp-slide-enter-active,
.sp-slide-leave-active { transition: opacity 0.22s ease; }
.sp-slide-enter-active .sp-drawer,
.sp-slide-leave-active .sp-drawer { transition: transform 0.22s ease; }
.sp-slide-enter-from,
.sp-slide-leave-to { opacity: 0; }
.sp-slide-enter-from .sp-drawer,
.sp-slide-leave-to .sp-drawer { transform: translateX(100%); }

.sp-fade-enter-active, .sp-fade-leave-active { transition: opacity 0.18s ease; }
.sp-fade-enter-from, .sp-fade-leave-to { opacity: 0; }

.sp-toast-enter-active, .sp-toast-leave-active { transition: opacity 0.22s ease, transform 0.22s ease; }
.sp-toast-enter-from, .sp-toast-leave-to { opacity: 0; transform: translateX(-50%) translateY(10px); }

/* ── RESPONSIVE ─────────────────────────────────────────────── */
@media (max-width: 1000px) { .sp-layout { grid-template-columns: 1fr; } }
@media (max-width: 768px) {
  .sp-page { padding: 16px; }
  .sp-title-row h1 { font-size: 1.8rem; }
  .sp-grid { grid-template-columns: 1fr; }
}
</style>
