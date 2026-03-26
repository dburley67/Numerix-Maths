<template>
  <div class="lesson-page">

    <!-- ── Lesson Header ── -->
    <div class="lesson-hero">
      <div class="lesson-hero-label">
        <i class="fa-solid fa-book-open"></i> Lesson 2
      </div>
      <h1 class="lesson-hero-title">Bidmas</h1>
      <p class="lesson-hero-sub">
        Learn to perform the 4 basic numerical operations
      </p>
      <div class="lesson-hero-chips">
        <span class="hero-chip"><i class="fa-solid fa-circle-question"></i> 12 questions</span>
        <span class="hero-chip"><i class="fa-regular fa-clock"></i> ~20 min</span>
        <span class="hero-chip hero-chip-blue"><i class="fa-solid fa-signal"></i> Foundation</span>
      </div>
    </div>

    <!-- ── Progress Bar ── -->
    <div class="lesson-progress-wrap">
      <div class="lesson-progress-label">
        <span>Lesson Progress</span>
        <span class="lesson-progress-pct">{{ Math.round(progress) }}%</span>
      </div>
      <div class="lesson-progress-track">
        <div class="lesson-progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>

    <!-- ── SECTION 1: What are the 4 operations? ── -->
    <div class="lesson-section" ref="sec1" :class="{ visible: sec1Visible }">
      <div class="section-header">
        <div class="section-num">1</div>
        <h2 class="section-title">What is BIDMAS?</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          BIDMAS is an acronym that stands for Brackets, Indices, Division, Multiplication, Addition, and Subtraction. It is the order in which calculations are carried out.
        </p>

        <!-- Range rule card -->
        <div class="rule-cards">
          <div class="rule-card rule-card-Brack">
            <div class="rule-range">Brackets</div>
            <div class="rule-arrow">
              <i class="rule-label">()</i>
            </div>
            <div class="rule-label">Brackets are used to group parts of an expression together</div>
            <div class="rule-desc">for example (5+5) <strong>INCREASES</strong> to 10</div>
          </div>
          <div class="rule-card rule-card-ind">
            <div class="rule-range">Indices</div>
            <div class="rule-arrow">
              <i class="rule-label">n²</i>
            </div>
            <div class="rule-label">Indices represent repeated multiplication</div>
            <div class="rule-desc">for example 5² = 25</div>
          </div>
          <div class="rule-card rule-card-Div">
            <div class="rule-range">Division</div>
            <div class="rule-arrow">
              <i class="fa-solid fa-divide"></i>
            </div>
            <div class="rule-label">Division is <strong>DECREASING</strong> a value by finding how many times a value fits into it</div>
            <div class="rule-desc">for example, 12÷4, 4 fits into 12 three times, DECREASING the value to 3</div>
          </div>
          <div class="rule-card rule-card-Mult">
            <div class="rule-range">Multiplication</div>
            <div class="rule-arrow">
              <i class="fa-solid fa-times"></i>
            </div>
            <div class="rule-label">Multiplication is <strong>INCREASING</strong> by itself a number of times</div>
            <div class="rule-desc">for example in 5x4, 5 is INCREASED by itself 3 times to get 20</div>
          </div>
          <div class="rule-card rule-card-Plus">
            <div class="rule-range">Addition</div>
            <div class="rule-arrow">
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="rule-label">Addition is combining 2 numbers and <strong>INCREASING</strong> the value</div>
            <div class="rule-desc">for example 5+5 <strong>INCREASES</strong> to 10</div>
          </div>
          <div class="rule-card rule-card-Minus">
            <div class="rule-range">Subtraction</div>
            <div class="rule-arrow">
              <i class="fa-solid fa-minus"></i>
            </div>
            <div class="rule-label">Subtraction is removing a number from another and <strong>DECREASING</strong> the value</div>
            <div class="rule-desc">for example 10-5 is DECREASED to 5</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 2: The Diagram ── -->
    <div class="lesson-section" ref="sec2" :class="{ visible: sec2Visible }">
      <div class="section-header">
        <div class="section-num">2</div>
        <h2 class="section-title">The order of BIDMAS</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Let's add 5 to <strong>20</strong> .
          We look at the bigger number of <strong class="text-red">20</strong> and add
          <strong>5</strong>from there to get <span class="text-up">25</span>.
        </p>

        <!-- Whiteboard Diagram -->
        <!-- Step-by-step breakdown -->
          <div class="steps-panel">
            <div class="step-item">
              <div class="step-dot step-dot-1">1</div>
              <div class="step-text">
                <strong>Brackets</strong> - content contained inside of brackets is always done <strong>FIRST</strong>.<br />
                <span class="step-ex">5+4(<strong><em>5+6</em></strong>)</span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-2">2</div>
              <div class="step-text">
                <strong>Indices</strong> - powers and roots are always done <strong>SECOND</strong>.<br />
                <span class="step-ex">3² = 9</span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-3">3</div>
              <div class="step-text">
                <strong>Division</strong> - division is always done <strong>THIRD</strong>.<br />
                <span class="step-ex">12 ÷ 4 = 3</span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-4">4</div>
              <div class="step-text">
                <strong>Multiplication</strong> - multiplication is always done <strong>FOURTH</strong>.<br />
                <span class="step-ex">6 x 4 = 24</span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-5">5</div>
              <div class="step-text">
                <strong>Addition</strong> - addition is always done <strong>FIFTH</strong>.<br />
                <span class="step-ex">20 + 5 = 25</span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-6">6</div>
              <div class="step-text">
                <strong>Subtraction</strong> - subtraction is always done <strong>LAST</strong>.<br />
                <span class="step-ex">10 - 5 = 5</span>
              </div>
            </div>
            <div class="step-result">
              <span class="step-result-label">BIDMAS:</span>
              <span class="step-result-val">Bracket, Indices, Division, Multiplication, Addition, Subtraction</span>
            </div>
          </div>
      </div>
    </div>

    <!-- ── SECTION 3: Try It Yourself ── -->
    <div class="lesson-section" ref="sec3" :class="{ visible: sec3Visible }">
      <div class="section-header">
        <div class="section-num">3</div>
        <h2 class="section-title">Try It Yourself</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Round each number to the nearest whole number. Select your answer:
        </p>

        <div class="quiz-grid">
          <div
            v-for="(q, i) in quizQuestions"
            :key="i"
            class="quiz-card"
            :class="{ answered: q.selected !== null }"
          >
            <div class="quiz-q"> <strong>{{ q.number }}</strong></div>
            <div class="quiz-opts">
              <button
                v-for="opt in q.options"
                :key="opt"
                class="quiz-opt"
                :class="{
                  'opt-correct': q.selected !== null && opt === q.answer,
                  'opt-wrong':   q.selected === opt && opt !== q.answer,
                  'opt-neutral': q.selected !== null && opt !== q.answer && opt !== q.selected
                }"
                @click="selectAnswer(i, opt)"
                :disabled="q.selected !== null"
              >
                {{ opt }}
              </button>
            </div>
            <div v-if="q.selected !== null" class="quiz-feedback">
              <template v-if="q.selected === q.answer">
                <i class="fa-solid fa-circle-check" style="color:#16a34a"></i>
                <span class="feedback-correct">Correct! {{ q.explanation }}</span>
              </template>
              <template v-else>
                <i class="fa-solid fa-circle-xmark" style="color:#dc2626"></i>
                <span class="feedback-wrong">Not quite. {{ q.explanation }}</span>
              </template>
            </div>
          </div>
        </div>

        <!-- Score panel -->
        <div v-if="allAnswered" class="score-panel">
          <div class="score-icon">
            <i class="fa-solid fa-star" v-for="n in scoreStars" :key="n"></i>
          </div>
          <div class="score-text">
            You got <strong>{{ correctCount }} / {{ quizQuestions.length }}</strong> correct!
          </div>
          <button class="score-retry" @click="resetQuiz">
            <i class="fa-solid fa-rotate-left"></i> Try Again
          </button>
        </div>
      </div>
    </div>

    <!-- ── Summary ── -->
    <div class="lesson-summary" ref="sec4" :class="{ visible: sec4Visible }">
      <h3 class="summary-title"><i class="fa-solid fa-circle-check"></i> Lesson Summary</h3>
      <ul class="summary-list">
        <li><i class="fa-solid fa-check"></i> The order <em>MATTERS</em> remember what comes after each operation</li>
        <li><i class="fa-solid fa-check"></i> <strong>Brackets</strong> → Perform operations inside brackets first</li>
        <li><i class="fa-solid fa-check"></i> <strong>Indices</strong> → Evaluate powers and roots</li>
        <li><i class="fa-solid fa-check"></i> <strong>Division and multiplication</strong> → Perform these operations from left to right</li>
        <li><i class="fa-solid fa-check"></i> <strong>Addition and subtraction</strong> → Perform these operations from left to right</li>
      </ul>
      <div class="summary-actions">
        <button class="btn-next" @click="router.push('/Lesson8')">
          Next Lesson: Order of operations.
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

/* ── Scroll visibility ── */
const sec1 = ref(null); const sec1Visible = ref(false);
const sec2 = ref(null); const sec2Visible = ref(false);
const sec3 = ref(null); const sec3Visible = ref(false);
const sec4 = ref(null); const sec4Visible = ref(false);

const observers = [];

function observe(el, flag) {
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) flag.value = true;
    },
    { threshold: 0.12 }
  );
  if (el.value) obs.observe(el.value);
  observers.push(obs);
}

onMounted(() => {
  observe(sec1, sec1Visible);
  observe(sec2, sec2Visible);
  observe(sec3, sec3Visible);
  observe(sec4, sec4Visible);
  // trigger first section immediately
  sec1Visible.value = true;
});

onUnmounted(() => observers.forEach(o => o.disconnect()));

/* ── Progress (rough: sections visible) ── */
const progress = computed(() => {
  const flags = [sec1Visible.value, sec2Visible.value, sec3Visible.value, sec4Visible.value];
  return (flags.filter(Boolean).length / flags.length) * 100;
});

/* ── Quiz ── */
const quizQuestions = ref([
  {
    number: "2 + 3 × 4",
    options: [14, 20, 12],
    answer: 14,
    selected: null,
    explanation: "Multiply first: 3 × 4 = 12, then add: 2 + 12 = 14"
  },
  {
    number: "10 - 2 × 3",
    options: [4, 24, 12],
    answer: 4,
    selected: null,
    explanation: "Multiply first: 2 × 3 = 6, then subtract: 10 - 6 = 4"
  },
  {
    number: "(5 + 3) × 2",
    options: [11, 16, 13],
    answer: 16,
    selected: null,
    explanation: "Brackets first: 5 + 3 = 8, then multiply: 8 × 2 = 16"
  },
  {
    number: "12 ÷ 2 + 4",
    options: [10, 4, 8],
    answer: 10,
    selected: null,
    explanation: "Divide first: 12 ÷ 2 = 6, then add: 6 + 4 = 10"
  }
]);

// Fix the 2.45 question


function selectAnswer(i, opt) {
  if (quizQuestions.value[i].selected !== null) return;
  quizQuestions.value[i].selected = opt;
}

const correctCount = computed(() =>
  quizQuestions.value.filter(q => q.selected === q.answer).length
);

const allAnswered = computed(() =>
  quizQuestions.value.every(q => q.selected !== null)
);

const scoreStars = computed(() => {
  const pct = correctCount.value / quizQuestions.value.length;
  if (pct === 1) return 3;
  if (pct >= 0.5) return 2;
  return 1;
});

function resetQuiz() {
  quizQuestions.value.forEach(q => (q.selected = null));
}
</script>

<style scoped>
/* =========================================================
   LESSON PAGE — Decimals & Rounding
   ========================================================= */

.lesson-page {
  padding: 40px;
  max-width: 900px;
  font-family: "Poppins", sans-serif;
}

/* ── Hero ─────────────────────────────────────────────── */
.lesson-hero {
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%);
  border-radius: 20px;
  padding: 36px 40px;
  color: #fff;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.lesson-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%);
  pointer-events: none;
}

.lesson-hero-label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.3);
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.lesson-hero-title {
  font-size: 36px;
  font-weight: 800;
  margin: 0 0 8px;
  line-height: 1.2;
}

.lesson-hero-sub {
  font-size: 15px;
  opacity: 0.88;
  margin: 0 0 18px;
  max-width: 500px;
}

.lesson-hero-chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.hero-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.hero-chip-blue {
  background: rgba(255,255,255,0.25);
}

/* ── Progress ─────────────────────────────────────────── */
.lesson-progress-wrap {
  margin-bottom: 32px;
}

.lesson-progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.lesson-progress-pct {
  color: #2563eb;
}

.lesson-progress-track {
  height: 8px;
  background: var(--border-color);
  border-radius: 999px;
  overflow: hidden;
}

.lesson-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  border-radius: 999px;
  transition: width 0.6s ease;
}

/* ── Sections ─────────────────────────────────────────── */
.lesson-section {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 18px;
  margin-bottom: 24px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.lesson-section.visible {
  opacity: 1;
  transform: translateY(0);
  animation: section-cascade 0.5s ease forwards;
}

.lesson-section:nth-of-type(1).visible { animation-delay: 0s; }
.lesson-section:nth-of-type(2).visible { animation-delay: 0.15s; }
.lesson-section:nth-of-type(3).visible { animation-delay: 0.3s; }

@keyframes section-cascade {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
  border-bottom: 1.5px solid var(--border-color);
  background: var(--bg-page);
}

.section-num {
  width: 34px;
  height: 34px;
  background: #2563eb;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 15px;
  flex-shrink: 0;
}

.section-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0;
}

.section-body {
  padding: 24px;
}

/* ── Text ─────────────────────────────────────────────── */
.lesson-text {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.7;
  margin: 0 0 20px;
}

.text-up   { color: #16a34a; font-weight: 700; }
.text-down { color: #2563eb; font-weight: 700; }
.text-red  { color: #dc2626; font-weight: 700; }

/* ── Rule Cards ───────────────────────────────────────── */
.rule-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.rule-card {
  border-radius: 14px;
  padding: 24px;
  text-align: center;
  border: 2px solid;
}

.rule-card-Div {
  border-color: #93c5fd;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
}

.rule-card-Plus {
  border-color: #86efac;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
}
.rule-card-Minus {
  border-color:rgb(239, 134, 134);
  background: linear-gradient(135deg,rgb(253, 240, 240) 0%,rgb(252, 220, 220) 100%);
}
.rule-card-Mult {
  border-color:rgb(239, 211, 134);
  background: linear-gradient(135deg,rgb(253, 250, 240) 0%,rgb(252, 246, 220) 100%);
}
.rule-card-Brack {
  border-color:rgb(150, 21, 201);
  background: linear-gradient(135deg,rgb(217, 138, 228) 0%,rgb(184, 121, 209) 100%);
}
.rule-card-ind {
  border-color:rgb(216, 58, 92);
  background: linear-gradient(135deg,rgb(216, 123, 154) 0%,rgb(194, 97, 134) 100%);
}

body.dark .rule-card-down { background: linear-gradient(135deg, #172554, #1e3a5f); border-color: #2563eb; }
body.dark .rule-card-up   { background: linear-gradient(135deg, #052e16, #14532d); border-color: #16a34a; }

.rule-range {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.rule-arrow {
  font-size: 28px;
  margin-bottom: 10px;
}

.rule-card-down .rule-arrow { color: #2563eb; }
.rule-card-up   .rule-arrow { color: #16a34a; }

.rule-label {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.rule-desc {
  font-size: 12px;
  color: var(--text-primary);
  font-weight: 600;
  opacity: 0.8;
}

/* ── Whiteboard Diagram ───────────────────────────────── */
.diagram-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.whiteboard {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 16px;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.04);
}

body.dark .whiteboard {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.diagram-svg {
  width: 100%;
  height: auto;
  display: block;
}

/* SVG text styles */
.svg-num-black {
  font-family: "Poppins", sans-serif;
  font-size: 64px;
  font-weight: 900;
  fill: #0f172a;
}

.svg-num-red {
  font-family: "Poppins", sans-serif;
  font-size: 64px;
  font-weight: 900;
  fill: #dc2626;
}

.svg-num-result {
  font-family: "Poppins", sans-serif;
  font-size: 56px;
  font-weight: 900;
  fill: #dc2626;
}

.svg-label-black {
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 700;
  fill: #0f172a;
}

/* Draw-on animation for SVG strokes */
.oval-draw {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw-stroke 0.7s ease forwards 0.3s;
}

.line-draw {
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  animation: draw-stroke 0.4s ease forwards 0.8s;
}

.line-draw-green {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: draw-stroke 0.35s ease forwards 1.0s;
}

.line-draw-green2 {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: draw-stroke 0.35s ease forwards 1.2s;
}

.svg-fade {
  opacity: 0;
  animation: fade-in 0.3s ease forwards;
}

@keyframes draw-stroke {
  to { stroke-dashoffset: 0; }
}

@keyframes fade-in {
  to { opacity: 1; }
}

.diagram-legend {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.legend-red .legend-dot   { background: #dc2626; }
.legend-green .legend-dot { background: #16a34a; }

/* ── Steps Panel ──────────────────────────────────────── */
.steps-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.step-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.step-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 13px;
  color: #fff;
  flex-shrink: 0;
  margin-top: 2px;
}

.step-dot-1 { background: #dc2626; }
.step-dot-2 { background: #f97316; }
.step-dot-3 { background: #16a34a; }
.step-dot-4 { background: #2563eb; }
.step-dot-5 { background: #9333ea; }
.step-dot-6 { background: #0891b2; }

.step-text {
  font-size: 14px;
  color: var(--text-primary);
  line-height: 1.6;
}

.step-ex {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  background: var(--bg-page);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 5px 10px;
  font-weight: 600;
}

.hl-red   { color: #dc2626; font-weight: 800; }
.hl-green { color: #16a34a; font-weight: 800; }
.hl-black { color: var(--text-dark); font-weight: 800; }

.step-result {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border: 2px solid #86efac;
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}

body.dark .step-result { background: linear-gradient(135deg, #052e16, #14532d); border-color: #16a34a; }

.step-result-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #16a34a;
}

.step-result-val {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-dark);
}

/* ── Chain Rounding ───────────────────────────────────── */
.chain-wrap {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 20px;
}

.chain-number {
  font-size: 44px;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1;
}

.cn-black { color: var(--text-dark); }
.cn-red   { color: #dc2626; }

.chain-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.chain-step {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.chain-step-badge {
  background: #2563eb;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  white-space: nowrap;
  margin-top: 2px;
  flex-shrink: 0;
}

.chain-step-badge-b {
  background: #16a34a;
}

.chain-step-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 600;
}

.chain-focus {
  color: var(--text-dark);
  font-weight: 700;
}

.chain-rule {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  opacity: 0.85;
}

.chain-result-line {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 7px 12px;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
}

.chain-arrow { color: #2563eb; font-size: 13px; }

.chain-connector {
  text-align: center;
  color: #94a3b8;
  padding: 8px 0;
  font-size: 18px;
  padding-left: 56px;
}

.chain-final {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border: 2px solid #93c5fd;
  border-radius: 10px;
  padding: 14px 18px;
}

body.dark .chain-final { background: linear-gradient(135deg, #172554, #1e3a5f); border-color: #2563eb; }

.chain-final-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #2563eb;
}

.chain-final-eq {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-dark);
}

/* ── Callout ──────────────────────────────────────────── */
.callout {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  border-radius: 12px;
  padding: 16px 18px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-primary);
}

.callout-blue {
  background: #eff6ff;
  border: 1.5px solid #bfdbfe;
}

body.dark .callout-blue { background: #172554; border-color: #2563eb; }

.callout-icon {
  font-size: 20px;
  color: #f59e0b;
  margin-top: 1px;
  flex-shrink: 0;
}

/* ── Quiz ─────────────────────────────────────────────── */
.quiz-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.quiz-card {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 18px;
  transition: border-color 0.2s;
}

.quiz-card.answered {
  border-color: #cbd5e1;
}

.quiz-q {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.5;
}

.quiz-opts {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.quiz-opt {
  padding: 8px 18px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-card);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
  cursor: pointer;
  transition: all 0.15s;
  flex: 1;
}

.quiz-opt:not(:disabled):hover {
  border-color: #2563eb;
  background: #eff6ff;
  color: #2563eb;
}

.quiz-opt:disabled { cursor: default; }

.opt-correct { background: #dcfce7 !important; border-color: #16a34a !important; color: #15803d !important; }
.opt-wrong   { background: #fee2e2 !important; border-color: #dc2626 !important; color: #dc2626 !important; }
.opt-neutral { opacity: 0.45; }

body.dark .opt-correct { background: #14532d !important; color: #4ade80 !important; }
body.dark .opt-wrong   { background: #450a0a !important; color: #f87171 !important; }

.quiz-feedback {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  padding-top: 4px;
}

.feedback-correct { color: #15803d; }
.feedback-wrong   { color: #dc2626; }

body.dark .feedback-correct { color: #4ade80; }
body.dark .feedback-wrong   { color: #f87171; }

/* ── Score Panel ──────────────────────────────────────── */
.score-panel {
  background: linear-gradient(135deg, #fefce8, #fef9c3);
  border: 2px solid #fde047;
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

body.dark .score-panel { background: linear-gradient(135deg, #422006, #3b1800); border-color: #ca8a04; }

.score-icon { font-size: 22px; color: #f59e0b; display: flex; gap: 2px; }
.score-text { font-size: 16px; font-weight: 700; color: var(--text-dark); flex: 1; }

.score-retry {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}

.score-retry:hover { background: #1d4ed8; transform: translateY(-1px); }

/* ── Summary ──────────────────────────────────────────── */
.lesson-summary {
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
  border-radius: 18px;
  padding: 28px 32px;
  color: #fff;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.lesson-summary.visible {
  opacity: 1;
  transform: translateY(0);
}

.summary-title {
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.summary-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.summary-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  opacity: 0.95;
}

.summary-list i {
  color: #86efac;
  font-size: 14px;
  flex-shrink: 0;
}

.summary-actions {
  display: flex;
  justify-content: flex-end;
}

.btn-next {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #1d4ed8;
  border: none;
  border-radius: 10px;
  padding: 12px 22px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}

.btn-next:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 750px) {
  .lesson-page { padding: 16px; }
  .lesson-hero { padding: 24px 20px; }
  .lesson-hero-title { font-size: 26px; }
  .rule-cards { grid-template-columns: 1fr; }
  .diagram-wrap { grid-template-columns: 1fr; }
  .quiz-grid { grid-template-columns: 1fr; }
  .chain-final { flex-direction: column; gap: 6px; }
}
</style>