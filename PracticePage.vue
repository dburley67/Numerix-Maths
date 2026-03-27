<template>
   <div>
    <!-- Show runner when a set is active, otherwise show the main page -->
    <ExerciseRunner
      v-if="activeSet"
      :set="activeSet"
      @back="activeSet = null"
    />

  <div v-else class="exercises-page">

    <!-- ── Page Header ── -->
    <div class="exercises-header">
      <h1 class="exercises-title">
        <i class="fa-solid fa-dumbbell"></i> Exercises
      </h1>
      <p class="exercises-sub">
        <i class="fa-solid fa-circle-info"></i>
        Practice what you've learned — pick a topic and difficulty
        <span class="dash-sep">|</span>
        <i class="fa-solid fa-bolt"></i>
        {{ totalQuestions }} questions available
      </p>
    </div>

    <!-- ── Stats Strip ── -->
    <div class="ex-stats-strip">
      <div class="ex-stat">
        <div class="ex-stat-icon" style="background:#eff6ff;color:#2563eb">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="ex-stat-body">
          <div class="ex-stat-val">{{ completedCount }}</div>
          <div class="ex-stat-label">Completed</div>
        </div>
      </div>
      <div class="ex-stat-div"></div>
      <div class="ex-stat">
        <div class="ex-stat-icon" style="background:#fef9c3;color:#ca8a04">
          <i class="fa-solid fa-fire"></i>
        </div>
        <div class="ex-stat-body">
          <div class="ex-stat-val">{{ streak }}</div>
          <div class="ex-stat-label">Day Streak</div>
        </div>
      </div>
      <div class="ex-stat-div"></div>
      <div class="ex-stat">
        <div class="ex-stat-icon" style="background:#f0fdf4;color:#16a34a">
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="ex-stat-body">
          <div class="ex-stat-val">{{ xp }} XP</div>
          <div class="ex-stat-label">Earned</div>
        </div>
      </div>
      <div class="ex-stat-div"></div>
      <div class="ex-stat">
        <div class="ex-stat-icon" style="background:#fdf4ff;color:#9333ea">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <div class="ex-stat-body">
          <div class="ex-stat-val">{{ accuracy }}%</div>
          <div class="ex-stat-label">Accuracy</div>
        </div>
      </div>
    </div>

    <!-- ── Filter Bar ── -->
    <div class="ex-filter-bar">
      <div class="ex-filter-group">
        <span class="ex-filter-label"><i class="fa-solid fa-layer-group"></i> Topic</span>
        <div class="ex-filter-pills">
          <button
            v-for="t in topicFilters"
            :key="t.value"
            class="ex-pill"
            :class="{ 'ex-pill-active': activeTopicFilter === t.value }"
            @click="activeTopicFilter = t.value"
          >{{ t.label }}</button>
        </div>
      </div>
      <div class="ex-filter-group">
        <span class="ex-filter-label"><i class="fa-solid fa-signal"></i> Difficulty</span>
        <div class="ex-filter-pills">
          <button
            v-for="d in difficultyFilters"
            :key="d.value"
            class="ex-pill"
            :class="['ex-pill-diff-' + d.value, { 'ex-pill-active': activeDiffFilter === d.value }]"
            @click="activeDiffFilter = d.value"
          >{{ d.label }}</button>
        </div>
      </div>
    </div>

    <!-- ── Exercise Sets Grid ── -->
    <div class="ex-grid">
      <div
        v-for="set in filteredSets"
        :key="set.id"
        class="ex-card"
        :class="'ex-card-' + set.topic"
        @click="openSet(set)"
      >
        <!-- Top colour band -->
        <div class="ex-card-band" :class="'band-' + set.topic"></div>

        <div class="ex-card-body">
          <!-- Header row -->
          <div class="ex-card-top">
            <div class="ex-card-icon" :class="'icon-' + set.topic">
              <i :class="set.icon"></i>
            </div>
            <div class="ex-diff-badge" :class="'diff-' + set.difficulty">
              {{ set.difficultyLabel }}
            </div>
          </div>

          <!-- Title & desc -->
          <h3 class="ex-card-title">{{ set.title }}</h3>
          <p class="ex-card-desc">{{ set.description }}</p>

          <!-- Tags -->
          <div class="ex-tags">
            <span v-for="tag in set.tags" :key="tag" class="ex-tag">{{ tag }}</span>
          </div>

          <!-- Footer -->
          <div class="ex-card-footer">
            <div class="ex-card-meta">
              <span><i class="fa-solid fa-circle-question"></i> {{ set.questions }}Q</span>
              <span><i class="fa-regular fa-clock"></i> {{ set.time }}</span>
              <span><i class="fa-solid fa-star"></i> +{{ set.xp }} XP</span>
            </div>

            <!-- Progress bar -->
            <div class="ex-card-progress-wrap" v-if="set.progress > 0">
              <div class="ex-card-progress-bar">
                <div class="ex-card-progress-fill" :class="'fill-' + set.topic" :style="{ width: set.progress + '%' }"></div>
              </div>
              <span class="ex-card-progress-pct">{{ set.progress }}%</span>
            </div>

            <button class="ex-start-btn" :class="'btn-' + set.topic">
              <span>{{ set.progress > 0 ? 'Continue' : 'Start' }}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="filteredSets.length === 0" class="ex-empty">
      <i class="fa-solid fa-magnifying-glass"></i>
      <p>No exercises match your filters.</p>
      <button class="ex-clear-btn" @click="clearFilters">Clear filters</button>
    </div>

    <!-- ── Daily Challenge Banner ── -->
    <div class="ex-challenge-banner">
      <div class="ex-challenge-left">
        <div class="ex-challenge-badge">
          <i class="fa-solid fa-fire-flame-curved"></i> Daily Challenge
        </div>
        <h3 class="ex-challenge-title">Mixed Topic Sprint</h3>
        <p class="ex-challenge-sub">
          10 random questions across all 3 topics. Beat your best score!
        </p>
        <div class="ex-challenge-meta">
          <span><i class="fa-solid fa-circle-question"></i> 10 questions</span>
          <span><i class="fa-regular fa-clock"></i> ~12 min</span>
          <span><i class="fa-solid fa-star"></i> +50 XP bonus</span>
        </div>
      </div>
      <div class="ex-challenge-right">
        <div class="ex-challenge-timer">
          <div class="ex-timer-label">Resets in</div>
          <div class="ex-timer-val">{{ timeUntilReset }}</div>
        </div>
        <button class="ex-challenge-btn">
          <i class="fa-solid fa-bolt"></i> Start Challenge
        </button>
      </div>
    </div>

  </div>
   </div>
</template>

<script setup>

import { ref, computed, onMounted, onUnmounted } from "vue";
import ExerciseRunner from "./ExerciseRunner.vue";
import { exerciseSets } from "./exerciseData.js";

const activeSet = ref(null);

// Map card IDs from ExercisesPage to exerciseData keys:
const setKeyMap = {
  1: 'decimals_foundation',
  2: 'decimals_higher',
  3: 'decimals_challenge',
  4: 'factors_foundation',
  5: 'factors_higher',
  6: 'factors_challenge',
  7: 'standard_foundation',
  8: 'standard_higher',
  9: 'standard_challenge',
};

function openSet(card) {
  const key = setKeyMap[card.id];
  if (key) activeSet.value = exerciseSets[key];
}

/* ── Stats (placeholder — wire to your store) ── */
const completedCount = ref(0);
const streak         = ref(0);
const xp             = ref(0);
const accuracy       = ref(0);


/* ── Filters ── */
const topicFilters = [
  { value: 'all',      label: 'All Topics' },
  { value: 'decimals', label: 'Decimals & Rounding' },
  { value: 'factors',  label: 'Factors & HCF' },
  { value: 'standard', label: 'Standard Form' },
];

const difficultyFilters = [
  { value: 'all',    label: 'All' },
  { value: 'foundation', label: 'Foundation' },
  { value: 'higher',    label: 'Higher' },
  { value: 'challenge', label: 'Challenge' },
];

const activeTopicFilter = ref('all');
const activeDiffFilter  = ref('all');

function clearFilters() {
  activeTopicFilter.value = 'all';
  activeDiffFilter.value  = 'all';
}

// PraticePage script//
/* ── Exercise Sets ── */
const exerciseSets2 = ref([
  {
    id: 1,
    topic: 'decimals',
    icon: 'fa-solid fa-percentage',
    title: 'Rounding to Decimal Places',
    description: 'Round numbers to 1, 2 and 3 decimal places using the standard rounding rule.',
    tags: ['Rounding', 'Decimal Places'],
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    questions: 10,
    time: '~10 min',
    xp: 20,
    progress: 0,
  },
  {
    id: 2,
    topic: 'decimals',
    icon: 'fa-solid fa-percentage',
    title: 'Significant Figures',
    description: 'Round numbers to a given number of significant figures, including decimals and large numbers.',
    tags: ['Sig. Figures', 'Rounding'],
    difficulty: 'higher',
    difficultyLabel: 'Higher',
    questions: 12,
    time: '~14 min',
    xp: 30,
    progress: 0,
  },
  {
    id: 3,
    topic: 'decimals',
    icon: 'fa-solid fa-percentage',
    title: 'Chain Rounding',
    description: 'Multi-step rounding where each step affects the next — the tricky type!',
    tags: ['Chain Rounding', 'Problem Solving'],
    difficulty: 'challenge',
    difficultyLabel: 'Challenge',
    questions: 8,
    time: '~12 min',
    xp: 40,
    progress: 0,
  },
  {
    id: 4,
    topic: 'factors',
    icon: 'fa-solid fa-cubes',
    title: 'Finding All Factors',
    description: 'List all factors of a given number using the pair method, working from 1 upwards.',
    tags: ['Factors', 'Factor Pairs'],
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    questions: 10,
    time: '~10 min',
    xp: 20,
    progress: 0,
  },
  {
    id: 5,
    topic: 'factors',
    icon: 'fa-solid fa-cubes',
    title: 'Highest Common Factor',
    description: 'Find the HCF of two numbers by listing and comparing their factor sets.',
    tags: ['HCF', 'Common Factors'],
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    questions: 10,
    time: '~12 min',
    xp: 25,
    progress: 0,
  },
  {
    id: 6,
    topic: 'factors',
    icon: 'fa-solid fa-cubes',
    title: 'HCF with Larger Numbers',
    description: 'Apply the HCF method to larger numbers where the factor lists are longer.',
    tags: ['HCF', 'Higher Numbers'],
    difficulty: 'higher',
    difficultyLabel: 'Higher',
    questions: 12,
    time: '~15 min',
    xp: 35,
    progress: 0,
  },
  {
    id: 7,
    topic: 'standard',
    icon: 'fa-solid fa-superscript',
    title: 'Standard Form: Basics',
    description: 'Convert between standard form and ordinary numbers using positive powers of 10.',
    tags: ['Standard Form', 'Powers of 10'],
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    questions: 10,
    time: '~10 min',
    xp: 20,
    progress: 0,
  },
  {
    id: 8,
    topic: 'standard',
    icon: 'fa-solid fa-superscript',
    title: 'Standard Form Calculations',
    description: 'Multiply and divide numbers written in standard form, expressing results correctly.',
    tags: ['Calculations', 'Multiplication'],
    difficulty: 'higher',
    difficultyLabel: 'Higher',
    questions: 10,
    time: '~14 min',
    xp: 35,
    progress: 0,
  },
  {
    id: 9,
    topic: 'standard',
    icon: 'fa-solid fa-superscript',
    title: 'Mixed Standard Form',
    description: 'A mixed set covering conversions, calculations and comparing numbers in standard form.',
    tags: ['Mixed', 'Problem Solving'],
    difficulty: 'challenge',
    difficultyLabel: 'Challenge',
    questions: 15,
    time: '~20 min',
    xp: 50,
    progress: 0,
  },
]);

const filteredSets = computed(() => {
  return exerciseSets2.value.filter(s => {
    const topicOk = activeTopicFilter.value === 'all' || s.topic === activeTopicFilter.value;
    const diffOk  = activeDiffFilter.value  === 'all' || s.difficulty === activeDiffFilter.value;
    return topicOk && diffOk;
  });
});

const totalQuestions = computed(() => exerciseSets2.value.reduce((a, s) => a + s.questions, 0));



/* ── Daily challenge timer ── */
const timeUntilReset = ref('');

function updateTimer() {
  const now  = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;
  const h = String(Math.floor(diff / 3_600_000)).padStart(2,'0');
  const m = String(Math.floor((diff % 3_600_000) / 60_000)).padStart(2,'0');
  const s = String(Math.floor((diff % 60_000) / 1000)).padStart(2,'0');
  timeUntilReset.value = `${h}:${m}:${s}`;
}

let timerInterval;
onMounted(() => { updateTimer(); timerInterval = setInterval(updateTimer, 1000); });
onUnmounted(() => clearInterval(timerInterval));
</script>

<style scoped>
/* =========================================================
   EXERCISES PAGE
   ========================================================= */

.exercises-page {
  padding: 40px;
  max-width: 1200px;
  font-family: "Poppins", sans-serif;
}

/* ── Header ─────────────────────────────────────────── */
.exercises-header { margin-bottom: 22px; }

.exercises-title {
  font-size: 40px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.exercises-title i { color: #f97316; }

.exercises-sub {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 15px;
  margin: 0;
  flex-wrap: wrap;
}

.dash-sep { opacity: 0.4; }

/* ── Stats Strip ─────────────────────────────────────── */
.ex-stats-strip {
  display: flex;
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 16px 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(15,23,42,0.05);
  flex-wrap: wrap;
  gap: 12px;
}

.ex-stat {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 100px;
}

.ex-stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.ex-stat-val {
  font-size: 20px;
  font-weight: 900;
  color: var(--text-dark);
  line-height: 1;
}

.ex-stat-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  opacity: 0.7;
}

.ex-stat-div {
  width: 1px;
  height: 36px;
  background: var(--border-color);
  flex-shrink: 0;
}

/* ── Filter Bar ──────────────────────────────────────── */
.ex-filter-bar {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 16px 20px;
  margin-bottom: 24px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
}

.ex-filter-group {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.ex-filter-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-primary);
  opacity: 0.6;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 5px;
}

.ex-filter-pills {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.ex-pill {
  padding: 5px 14px;
  border: 1.5px solid var(--border-color);
  border-radius: 20px;
  background: var(--bg-page);
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}

.ex-pill:hover { border-color: #f97316; color: #f97316; }

.ex-pill-active {
  background: #f97316 !important;
  border-color: #f97316 !important;
  color: #fff !important;
}

/* difficulty pill variants on hover */
.ex-pill-diff-foundation:hover { border-color: #2563eb; color: #2563eb; }
.ex-pill-diff-higher:hover     { border-color: #9333ea; color: #9333ea; }
.ex-pill-diff-challenge:hover  { border-color: #dc2626; color: #dc2626; }

/* ── Exercise Grid ───────────────────────────────────── */
.ex-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 28px;
}

/* ── Exercise Card ───────────────────────────────────── */
.ex-card {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(15,23,42,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.ex-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 36px rgba(15,23,42,0.11);
}

/* Top colour band */
.ex-card-band {
  height: 5px;
  flex-shrink: 0;
}

.band-decimals { background: linear-gradient(90deg, #2563eb, #3b82f6); }
.band-factors  { background: linear-gradient(90deg, #7c3aed, #a78bfa); }
.band-standard { background: linear-gradient(90deg, #0d9488, #2dd4bf); }

.ex-card-body {
  padding: 18px 18px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* card top row */
.ex-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
}

.ex-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.icon-decimals { background: #eff6ff; color: #2563eb; }
.icon-factors  { background: #f5f3ff; color: #7c3aed; }
.icon-standard { background: #f0fdfa; color: #0d9488; }

body.dark .icon-decimals { background: #172554; color: #60a5fa; }
body.dark .icon-factors  { background: #2e1065; color: #c4b5fd; }
body.dark .icon-standard { background: #022c22; color: #5eead4; }

/* difficulty badge */
.ex-diff-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.3px;
}

.diff-foundation { background: #dbeafe; color: #1d4ed8; border: 1px solid #bfdbfe; }
.diff-higher     { background: #ede9fe; color: #6d28d9; border: 1px solid #c4b5fd; }
.diff-challenge  { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }

body.dark .diff-foundation { background: #172554; color: #93c5fd; border-color: #2563eb; }
body.dark .diff-higher     { background: #2e1065; color: #c4b5fd; border-color: #7c3aed; }
body.dark .diff-challenge  { background: #450a0a; color: #f87171; border-color: #dc2626; }

/* card text */
.ex-card-title {
  font-size: 16px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 6px;
  line-height: 1.3;
}

.ex-card-desc {
  font-size: 13px;
  color: var(--text-primary);
  line-height: 1.55;
  margin: 0 0 12px;
  opacity: 0.8;
}

/* tags */
.ex-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 14px;
}

.ex-tag {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  background: var(--bg-page);
  border: 1px solid var(--border-color);
  padding: 2px 8px;
  border-radius: 20px;
}

/* card footer */
.ex-card-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ex-card-meta {
  display: flex;
  gap: 12px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  opacity: 0.75;
}

.ex-card-meta span {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* progress bar */
.ex-card-progress-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ex-card-progress-bar {
  flex: 1;
  height: 6px;
  background: var(--border-color);
  border-radius: 999px;
  overflow: hidden;
}

.ex-card-progress-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.4s ease;
}

.fill-decimals { background: #2563eb; }
.fill-factors  { background: #7c3aed; }
.fill-standard { background: #0d9488; }

.ex-card-progress-pct {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-primary);
  white-space: nowrap;
}

/* start button */
.ex-start-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
}

.ex-start-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }

.btn-decimals { background: #2563eb; }
.btn-factors  { background: #7c3aed; }
.btn-standard { background: #0d9488; }

/* ── Empty state ─────────────────────────────────────── */
.ex-empty {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 12px;
  color: var(--text-primary);
  opacity: 0.5;
}

.ex-empty i { font-size: 40px; }
.ex-empty p { font-size: 16px; font-weight: 600; margin: 0; }

.ex-clear-btn {
  margin-top: 8px;
  padding: 8px 20px;
  background: #f97316;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  opacity: 1;
}

/* ── Daily Challenge Banner ──────────────────────────── */
.ex-challenge-banner {
  background: linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%);
  border-radius: 20px;
  padding: 28px 32px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}

.ex-challenge-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 90% 10%, rgba(255,255,255,0.1) 0%, transparent 55%);
  pointer-events: none;
}

.ex-challenge-left { flex: 1; min-width: 200px; }

.ex-challenge-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.3);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.ex-challenge-title {
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 6px;
}

.ex-challenge-sub {
  font-size: 14px;
  opacity: 0.88;
  margin: 0 0 14px;
  max-width: 380px;
}

.ex-challenge-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 13px;
  font-weight: 600;
  opacity: 0.9;
}

.ex-challenge-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.ex-challenge-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.ex-challenge-timer {
  text-align: center;
}

.ex-timer-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.8;
  margin-bottom: 4px;
}

.ex-timer-val {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 2px;
  font-variant-numeric: tabular-nums;
}

.ex-challenge-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #ea580c;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.15s, box-shadow 0.15s;
}

.ex-challenge-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

/* ── Responsive ──────────────────────────────────────── */
@media (max-width: 1050px) {
  .ex-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 680px) {
  .exercises-page { padding: 16px; }
  .exercises-title { font-size: 28px; }
  .ex-grid { grid-template-columns: 1fr; }
  .ex-stats-strip { gap: 16px; }
  .ex-stat-div { display: none; }
  .ex-challenge-banner { flex-direction: column; padding: 22px 20px; }
  .ex-challenge-right { flex-direction: row; justify-content: space-between; width: 100%; }
  .ex-filter-bar { flex-direction: column; align-items: flex-start; gap: 14px; }
}
</style>