<template>
  <div class="ex-runner">

    <!-- ── Header ── -->
    <div class="er-header" :class="'er-header-' + set.topic">
      <div class="er-header-left">
        <button class="er-back-btn" @click="$emit('back')">
          <i class="fa-solid fa-arrow-left"></i> Back
        </button>
        <div class="er-title-wrap">
          <div class="er-topic-badge">
            <i :class="set.icon"></i> {{ topicLabel }}
          </div>
          <h1 class="er-title">{{ set.title }}</h1>
        </div>
      </div>
      <div class="er-header-right">
        <div class="er-hstat">
          <i class="fa-solid fa-star"></i>
          <span>{{ xpEarned }} XP</span>
        </div>
        <div class="er-hstat">
          <i class="fa-solid fa-circle-check"></i>
          <span>{{ answeredCount }}/{{ set.questions.length }}</span>
        </div>
        <div class="er-diff-badge" :class="'diff-' + set.difficulty">
          {{ set.difficultyLabel }}
        </div>
      </div>
    </div>

    <!-- ── Progress Bar ── -->
    <div class="er-progress-outer">
      <div
        class="er-progress-inner"
        :class="'er-prog-' + set.topic"
        :style="{ width: (answeredCount / set.questions.length * 100) + '%' }"
      ></div>
    </div>

    <!-- ── Completed Screen ── -->
    <div v-if="showResults" class="er-results">
      <div class="er-results-icon">
        <i :class="scoreIcon"></i>
      </div>
      <h2 class="er-results-title">{{ scoreTitle }}</h2>
      <p class="er-results-sub">You answered {{ correctCount }} out of {{ set.questions.length }} correctly.</p>

      <div class="er-results-stats">
        <div class="er-res-stat">
          <div class="er-res-val er-res-correct">{{ correctCount }}</div>
          <div class="er-res-label">Correct</div>
        </div>
        <div class="er-res-stat">
          <div class="er-res-val er-res-wrong">{{ set.questions.length - correctCount }}</div>
          <div class="er-res-label">Incorrect</div>
        </div>
        <div class="er-res-stat">
          <div class="er-res-val er-res-xp">+{{ xpEarned }}</div>
          <div class="er-res-label">XP Earned</div>
        </div>
        <div class="er-res-stat">
          <div class="er-res-val er-res-pct">{{ Math.round(correctCount / set.questions.length * 100) }}%</div>
          <div class="er-res-label">Accuracy</div>
        </div>
      </div>

      <!-- Review answers -->
      <div class="er-review">
        <h3 class="er-review-title">Review Answers</h3>
        <div class="er-review-list">
          <div
            v-for="(q, i) in set.questions"
            :key="q.id"
            class="er-review-row"
            :class="userAnswers[i] === q.answer ? 'review-correct' : 'review-wrong'"
          >
            <div class="er-review-num">
              <i :class="userAnswers[i] === q.answer ? 'fa-solid fa-check' : 'fa-solid fa-xmark'"></i>
            </div>
            <div class="er-review-body">
              <div class="er-review-q">Q{{ i + 1 }}: {{ q.text }}</div>
              <div class="er-review-ans">
                <span class="er-review-yours">Your answer: <strong>{{ userAnswers[i] || '—' }}</strong></span>
                <span v-if="userAnswers[i] !== q.answer" class="er-review-correct-ans">
                  Correct: <strong>{{ q.answer }}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="er-results-actions">
        <button class="er-action-retry" @click="resetExercise">
          <i class="fa-solid fa-rotate-left"></i> Try Again
        </button>
        <button class="er-action-back" @click="$emit('back')">
          <i class="fa-solid fa-grid-2"></i> All Exercises
        </button>
      </div>
    </div>

    <!-- ── Question View ── -->
    <div v-else class="er-body">

      <!-- Question nav dots -->
      <div class="er-q-dots">
        <button
          v-for="(q, i) in set.questions"
          :key="i"
          class="er-dot"
          :class="{
            'dot-current':   i === currentIdx,
            'dot-correct':   userAnswers[i] === q.answer && userAnswers[i] !== undefined,
            'dot-wrong':     userAnswers[i] !== q.answer && userAnswers[i] !== undefined,
            'dot-unanswered': userAnswers[i] === undefined,
          }"
          @click="goToQuestion(i)"
        >{{ i + 1 }}</button>
      </div>

      <!-- Question Card -->
      <div class="er-q-card" :class="'er-q-card-' + set.topic">
        <div class="er-q-number">Question {{ currentIdx + 1 }} of {{ set.questions.length }}</div>
        <div class="er-q-text">{{ currentQuestion.text }}</div>

        <!-- Hint toggle -->
        <button class="er-hint-btn" @click="showHint = !showHint">
          <i class="fa-solid fa-circle-question"></i>
          {{ showHint ? 'Hide hint' : 'Show hint' }}
        </button>

        <div v-if="showHint" class="er-hint">
          <i class="fa-solid fa-lightbulb"></i>
          {{ currentQuestion.hint }}
        </div>
      </div>

      <!-- Options -->
      <div class="er-options">
        <button
          v-for="opt in currentQuestion.options"
          :key="opt"
          class="er-opt"
          :class="optClass(opt)"
          @click="selectAnswer(opt)"
          :disabled="userAnswers[currentIdx] !== undefined"
        >
          <span class="er-opt-letter">{{ optLabel(opt) }}</span>
          <span class="er-opt-text">{{ opt }}</span>
          <span class="er-opt-icon">
            <i v-if="userAnswers[currentIdx] !== undefined && opt === currentQuestion.answer" class="fa-solid fa-check"></i>
            <i v-else-if="userAnswers[currentIdx] === opt && opt !== currentQuestion.answer" class="fa-solid fa-xmark"></i>
          </span>
        </button>
      </div>

      <!-- Feedback -->
      <transition name="slide-up">
        <div v-if="userAnswers[currentIdx] !== undefined" class="er-feedback"
          :class="userAnswers[currentIdx] === currentQuestion.answer ? 'fb-correct' : 'fb-wrong'"
        >
          <div class="fb-icon">
            <i :class="userAnswers[currentIdx] === currentQuestion.answer ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark'"></i>
          </div>
          <div class="fb-body">
            <div class="fb-title">{{ userAnswers[currentIdx] === currentQuestion.answer ? 'Correct!' : 'Not quite!' }}</div>
            <div class="fb-exp">{{ currentQuestion.hint }}</div>
          </div>
          <div v-if="userAnswers[currentIdx] === currentQuestion.answer" class="fb-xp">
            +{{ set.xpPerQ }} XP
          </div>
        </div>
      </transition>

      <!-- Nav buttons -->
      <div class="er-nav">
        <button class="er-nav-btn er-nav-prev" @click="prevQuestion" :disabled="currentIdx === 0">
          <i class="fa-solid fa-arrow-left"></i> Previous
        </button>

        <button
          v-if="currentIdx < set.questions.length - 1"
          class="er-nav-btn er-nav-next"
          :class="'er-next-' + set.topic"
          @click="nextQuestion"
          :disabled="userAnswers[currentIdx] === undefined"
        >
          Next <i class="fa-solid fa-arrow-right"></i>
        </button>

        <button
          v-else
          class="er-nav-btn er-nav-finish"
          :class="'er-next-' + set.topic"
          @click="finishExercise"
          :disabled="userAnswers[currentIdx] === undefined"
        >
          Finish <i class="fa-solid fa-flag-checkered"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  set: { type: Object, required: true }
});

defineEmits(['back']);

/* ── State ── */
const currentIdx  = ref(0);
const userAnswers = ref({});
const showHint    = ref(false);
const showResults = ref(false);

const currentQuestion = computed(() => props.set.questions[currentIdx.value]);

/* ── Clear hint on question change ── */
watch(currentIdx, () => { showHint.value = false; });

/* ── Answer selection ── */
function selectAnswer(opt) {
  if (userAnswers.value[currentIdx.value] !== undefined) return;
  userAnswers.value = { ...userAnswers.value, [currentIdx.value]: opt };
}

/* ── Navigation ── */
function nextQuestion() {
  if (currentIdx.value < props.set.questions.length - 1) currentIdx.value++;
}

function prevQuestion() {
  if (currentIdx.value > 0) currentIdx.value--;
}

function goToQuestion(i) {
  currentIdx.value = i;
}

function finishExercise() {
  showResults.value = true;
}

function resetExercise() {
  currentIdx.value  = 0;
  userAnswers.value = {};
  showHint.value    = false;
  showResults.value = false;
}

/* ── Computed stats ── */
const answeredCount = computed(() => Object.keys(userAnswers.value).length);

const correctCount = computed(() =>
  props.set.questions.filter((q, i) => userAnswers.value[i] === q.answer).length
);

const xpEarned = computed(() =>
  props.set.questions.filter((q, i) => userAnswers.value[i] === q.answer).length * props.set.xpPerQ
);

const scoreIcon = computed(() => {
  const pct = correctCount.value / props.set.questions.length;
  if (pct === 1)    return 'fa-solid fa-trophy';
  if (pct >= 0.7)   return 'fa-solid fa-star';
  if (pct >= 0.4)   return 'fa-solid fa-thumbs-up';
  return 'fa-solid fa-rotate-left';
});

const scoreTitle = computed(() => {
  const pct = correctCount.value / props.set.questions.length;
  if (pct === 1)    return 'Perfect Score! 🎉';
  if (pct >= 0.7)   return 'Great Work!';
  if (pct >= 0.4)   return 'Good Effort!';
  return 'Keep Practising!';
});

const topicLabel = computed(() => ({
  decimals: 'Decimals & Rounding',
  factors:  'Factors & HCF',
  standard: 'Standard Form',
}[props.set.topic] || props.set.topic));

/* ── Option styling ── */
const letters = ['A', 'B', 'C', 'D'];

function optLabel(opt) {
  return letters[currentQuestion.value.options.indexOf(opt)] || '';
}

function optClass(opt) {
  const answered = userAnswers.value[currentIdx.value];
  if (answered === undefined) return '';
  if (opt === currentQuestion.value.answer)    return 'opt-correct';
  if (opt === answered)                         return 'opt-wrong';
  return 'opt-neutral';
}
</script>

<style scoped>
/* =========================================================
   EXERCISE RUNNER
   ========================================================= */

.ex-runner {
  min-height: 100%;
  font-family: "Poppins", sans-serif;
  background: var(--bg-page);
}

/* ── Header ─────────────────────────────────────────── */
.er-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  gap: 16px;
  flex-wrap: wrap;
  border-bottom: 1.5px solid var(--border-color);
  background: var(--bg-card);
}

.er-header-decimals { border-bottom-color: #2563eb; }
.er-header-factors  { border-bottom-color: #7c3aed; }
.er-header-standard { border-bottom-color: #0d9488; }

.er-header-left {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.er-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 10px;
  padding: 8px 14px;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}

.er-back-btn:hover { border-color: #f97316; color: #f97316; }

.er-topic-badge {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-primary);
  opacity: 0.6;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 2px;
}

.er-title {
  font-size: 20px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0;
}

.er-header-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.er-hstat {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
}

.er-hstat i { color: #f59e0b; font-size: 16px; }

.er-diff-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
}

.diff-foundation { background: #dbeafe; color: #1d4ed8; border: 1px solid #bfdbfe; }
.diff-higher     { background: #ede9fe; color: #6d28d9; border: 1px solid #c4b5fd; }
.diff-challenge  { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }
body.dark .diff-foundation { background: #172554; color: #93c5fd; border-color: #2563eb; }
body.dark .diff-higher     { background: #2e1065; color: #c4b5fd; border-color: #7c3aed; }
body.dark .diff-challenge  { background: #450a0a; color: #f87171; border-color: #dc2626; }

/* ── Progress bar ───────────────────────────────────── */
.er-progress-outer {
  height: 5px;
  background: var(--border-color);
}

.er-progress-inner {
  height: 100%;
  transition: width 0.4s ease;
}

.er-prog-decimals { background: linear-gradient(90deg, #2563eb, #3b82f6); }
.er-prog-factors  { background: linear-gradient(90deg, #7c3aed, #a78bfa); }
.er-prog-standard { background: linear-gradient(90deg, #0d9488, #2dd4bf); }

/* ── Body ───────────────────────────────────────────── */
.er-body {
  padding: 32px 40px;
  max-width: 740px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ── Question nav dots ──────────────────────────────── */
.er-q-dots {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.er-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
  background: var(--bg-card);
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot-current   { border-color: #f97316; color: #f97316; box-shadow: 0 0 0 3px rgba(249,115,22,0.15); }
.dot-correct   { background: #16a34a; border-color: #16a34a; color: #fff; }
.dot-wrong     { background: #dc2626; border-color: #dc2626; color: #fff; }
.dot-unanswered:hover { border-color: #f97316; color: #f97316; }

/* ── Question card ──────────────────────────────────── */
.er-q-card {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 18px;
  padding: 28px;
  border-top: 4px solid;
}

.er-q-card-decimals { border-top-color: #2563eb; }
.er-q-card-factors  { border-top-color: #7c3aed; }
.er-q-card-standard { border-top-color: #0d9488; }

.er-q-number {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-primary);
  opacity: 0.5;
  margin-bottom: 12px;
}

.er-q-text {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.4;
  margin-bottom: 18px;
}

/* ── Hint ───────────────────────────────────────────── */
.er-hint-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  padding: 6px 14px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.15s;
}

.er-hint-btn:hover { opacity: 1; border-color: #f59e0b; color: #f59e0b; }

.er-hint {
  margin-top: 12px;
  background: #fffbeb;
  border: 1.5px solid #fde68a;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
  color: #92400e;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  line-height: 1.5;
}

.er-hint i { color: #f59e0b; flex-shrink: 0; margin-top: 1px; }

body.dark .er-hint { background: #422006; border-color: #ca8a04; color: #fbbf24; }

/* ── Options ────────────────────────────────────────── */
.er-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.er-opt {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  background: var(--bg-card);
  border: 2px solid var(--border-color);
  border-radius: 14px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.15s;
  text-align: left;
}

.er-opt:not(:disabled):hover {
  border-color: #f97316;
  background: #fff7ed;
  transform: translateX(4px);
}

body.dark .er-opt:not(:disabled):hover { background: #431407; border-color: #f97316; }

.er-opt:disabled { cursor: default; }

.er-opt-letter {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  color: var(--text-primary);
  flex-shrink: 0;
}

.er-opt-text {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-dark);
  flex: 1;
}

.er-opt-icon { font-size: 18px; width: 20px; text-align: center; }

/* Option states */
.opt-correct {
  background: #f0fdf4 !important;
  border-color: #16a34a !important;
}

.opt-correct .er-opt-letter {
  background: #16a34a;
  border-color: #16a34a;
  color: #fff;
}

.opt-correct .er-opt-icon { color: #16a34a; }

.opt-wrong {
  background: #fef2f2 !important;
  border-color: #dc2626 !important;
}

.opt-wrong .er-opt-letter {
  background: #dc2626;
  border-color: #dc2626;
  color: #fff;
}

.opt-wrong .er-opt-icon { color: #dc2626; }
.opt-neutral { opacity: 0.4; }

body.dark .opt-correct { background: #052e16 !important; border-color: #16a34a !important; }
body.dark .opt-wrong   { background: #450a0a !important; border-color: #dc2626 !important; }

/* ── Feedback ───────────────────────────────────────── */
.er-feedback {
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.fb-correct { background: #f0fdf4; border: 1.5px solid #86efac; }
.fb-wrong   { background: #fef2f2; border: 1.5px solid #fca5a5; }
body.dark .fb-correct { background: #052e16; border-color: #16a34a; }
body.dark .fb-wrong   { background: #450a0a; border-color: #dc2626; }

.fb-icon {
  font-size: 24px;
  flex-shrink: 0;
  margin-top: 1px;
}

.fb-correct .fb-icon { color: #16a34a; }
.fb-wrong   .fb-icon { color: #dc2626; }

.fb-body { flex: 1; }

.fb-title {
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 4px;
}

.fb-correct .fb-title { color: #15803d; }
.fb-wrong   .fb-title { color: #b91c1c; }
body.dark .fb-correct .fb-title { color: #4ade80; }
body.dark .fb-wrong   .fb-title { color: #f87171; }

.fb-exp {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.5;
}

.fb-xp {
  background: #16a34a;
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 20px;
  white-space: nowrap;
  align-self: center;
}

/* Slide-up transition */
.slide-up-enter-active { transition: all 0.3s ease; }
.slide-up-enter-from   { opacity: 0; transform: translateY(10px); }

/* ── Navigation ─────────────────────────────────────── */
.er-nav {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.er-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
  border: none;
}

.er-nav-btn:disabled { opacity: 0.35; cursor: default; }

.er-nav-prev {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  color: var(--text-primary);
}

.er-nav-prev:not(:disabled):hover { border-color: #f97316; color: #f97316; }

.er-nav-next,
.er-nav-finish {
  color: #fff;
  margin-left: auto;
}

.er-next-decimals { background: #2563eb; }
.er-next-factors  { background: #7c3aed; }
.er-next-standard { background: #0d9488; }

.er-nav-next:not(:disabled):hover,
.er-nav-finish:not(:disabled):hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.18);
}

/* ── Results ────────────────────────────────────────── */
.er-results {
  padding: 40px;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.er-results-icon {
  font-size: 64px;
  color: #f59e0b;
  animation: pop-in 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
}

@keyframes pop-in {
  from { transform: scale(0); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

.er-results-title {
  font-size: 30px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0;
  text-align: center;
}

.er-results-sub {
  font-size: 16px;
  color: var(--text-primary);
  margin: 0;
  text-align: center;
}

.er-results-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  width: 100%;
}

.er-res-stat {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 18px;
  text-align: center;
}

.er-res-val {
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 6px;
}

.er-res-correct { color: #16a34a; }
.er-res-wrong   { color: #dc2626; }
.er-res-xp      { color: #f59e0b; }
.er-res-pct     { color: #2563eb; }

.er-res-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  opacity: 0.7;
}

/* Review */
.er-review {
  width: 100%;
}

.er-review-title {
  font-size: 16px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 14px;
}

.er-review-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.er-review-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1.5px solid;
}

.review-correct { background: #f0fdf4; border-color: #86efac; }
.review-wrong   { background: #fef2f2; border-color: #fca5a5; }
body.dark .review-correct { background: #052e16; border-color: #16a34a; }
body.dark .review-wrong   { background: #450a0a; border-color: #dc2626; }

.er-review-num {
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 1px;
}

.review-correct .er-review-num { color: #16a34a; }
.review-wrong   .er-review-num { color: #dc2626; }

.er-review-q {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
  line-height: 1.4;
}

.er-review-ans {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
}

.er-review-correct-ans { color: #16a34a; }
body.dark .er-review-correct-ans { color: #4ade80; }

/* Results actions */
.er-results-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.er-action-retry {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: #f97316;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 13px 24px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}

.er-action-retry:hover { background: #ea580c; transform: translateY(-2px); }

.er-action-back {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1.5px solid var(--border-color);
  border-radius: 12px;
  padding: 13px 24px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}

.er-action-back:hover { border-color: #f97316; color: #f97316; }

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 680px) {
  .er-header { padding: 16px 20px; }
  .er-body   { padding: 20px 16px; }
  .er-results { padding: 20px 16px; }
  .er-title  { font-size: 16px; }
  .er-q-text { font-size: 18px; }
  .er-results-stats { grid-template-columns: repeat(2, 1fr); }
}
</style>
