<template>
  <div class="lesson-page">

    <!-- ── Lesson Hero ── -->
    <div class="lesson-hero">
      <div class="lesson-hero-label">
        <i class="fa-solid fa-book-open"></i> Lesson 5
      </div>
      <h1 class="lesson-hero-title">Finance</h1>
      <p class="lesson-hero-sub">
        Learn how money grows, how interest works, and how to make smart financial decisions in real life.
      </p>
      <div class="lesson-hero-chips">
        <span class="hero-chip"><i class="fa-solid fa-circle-question"></i> 10 questions</span>
        <span class="hero-chip"><i class="fa-regular fa-clock"></i> ~25 min</span>
        <span class="hero-chip hero-chip-indigo"><i class="fa-solid fa-signal"></i> Foundation</span>
      </div>
    </div>

    <!-- ── Progress ── -->
    <div class="lesson-progress-wrap">
      <div class="lesson-progress-label">
        <span>Lesson Progress</span>
        <span class="lesson-progress-pct">{{ Math.round(progress) }}%</span>
      </div>
      <div class="lesson-progress-track">
        <div class="lesson-progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>

    <!-- ── SECTION: Finance Basics ── -->
    <div class="lesson-section" ref="sec1" :class="{ visible: sec1Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">1</div>
        <h2 class="section-title">What is Finance?</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Finance is about managing money — saving, investing, borrowing, and planning for the future.
        </p>

        <div class="callout callout-indigo">
          <div>
            Good financial decisions help your money grow over time.
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION: Simple Interest ── -->
    <div class="lesson-section" ref="sec2" :class="{ visible: sec2Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">2</div>
        <h2 class="section-title">Simple Interest</h2>
      </div>
      <div class="section-body">

        <p class="lesson-text">
          Simple interest is calculated on the original amount only.
        </p>

        <div class="callout callout-indigo">
          <div><strong>Formula:</strong> Interest = (P × R × T) ÷ 100</div>
        </div>

      </div>
    </div>

    <!-- ── SECTION: Compound Interest ── -->
    <div class="lesson-section" ref="sec3" :class="{ visible: sec3Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">3</div>
        <h2 class="section-title">Compound Interest</h2>
      </div>
      <div class="section-body">

        <p class="lesson-text">
          Compound interest means you earn interest on both your original money AND previous interest.
        </p>

        <div class="callout callout-indigo">
          <div><strong>Formula:</strong> A = P(1 + r)<sup>t</sup></div>
        </div>

        <p class="lesson-text" style="margin-top:16px">
          This is how savings accounts and investments grow faster over time.
        </p>

      </div>
    </div>

    <!-- ── SECTION: Real Life Finance ── -->
    <div class="lesson-section" ref="sec4" :class="{ visible: sec4Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">4</div>
        <h2 class="section-title">Real Life Finance</h2>
      </div>
      <div class="section-body">

        <p class="lesson-text">
          Finance is used in everyday life:
        </p>

        <div class="callout callout-indigo">
          <div>
            <li>Saving money in a bank</li>
            <li>Taking out loans or mortgages</li>
            <li>Investing in stocks</li>
            <li>Budgeting and spending wisely</li>
            <li>Buying groceries</li>
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION: Inflation & Investing ── -->
    <div class="lesson-section" ref="sec5" :class="{ visible: sec5Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">5</div>
        <h2 class="section-title">Inflation & Investing</h2>
      </div>
      <div class="section-body">

        <p class="lesson-text">
          Inflation means prices increase over time, reducing the value of money.
        </p>

        <div class="callout callout-indigo">
          <div>
            Investing helps your money grow faster than inflation.
          </div>
        </div>

      </div>
    </div>

    <!-- ── QUIZ ── -->
    <div class="lesson-section" ref="sec6" :class="{ visible: sec6Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">6</div>
        <h2 class="section-title">Test Yourself</h2>
      </div>

      <div class="section-body">
        <div class="quiz-grid">
          <div v-for="(q,i) in quizQuestions" :key="i" class="quiz-card">

            <div class="quiz-q">{{ q.q }}</div>

            <div class="quiz-opts">
              <button
                v-for="opt in q.options"
                :key="opt"
                class="quiz-opt"
                :class="{
                  'opt-correct': q.selected && opt === q.answer,
                  'opt-wrong': q.selected === opt && opt !== q.answer,
                  'opt-neutral': q.selected && opt !== q.answer && opt !== q.selected
                }"
                @click="selectAnswer(i,opt)"
                :disabled="q.selected !== null"
              >
                {{ opt }}
              </button>
            </div>

    <!-- Explanation -->
    <div v-if="q.selected !== null" 
         class="quiz-feedback"
         :class="q.selected === q.answer ? 'feedback-correct' : 'feedback-wrong'">

        <div>
            {{ q.selected === q.answer ? 'Correct!' : 'Incorrect!' }}
            </div>
                <div>
                    {{ q.explanation }}
                </div>
            </div>

          </div>
        </div>

        <div v-if="allAnswered" class="score-panel">
          <div class="score-text">
            You got {{ correctCount }} / {{ quizQuestions.length }} correct!
          </div>

          <button class="score-retry" @click="resetQuiz">
            Retry
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";


const sections = ['sec1','sec2','sec3','sec4','sec5','sec6'];
const refs = {};
const visible = {};

sections.forEach(s => {
  refs[s] = ref(null);
  visible[s] = ref(false);
});

const { sec1,sec2,sec3,sec4,sec5,sec6 } = refs;
const { sec1:sec1Visible,sec2:sec2Visible,sec3:sec3Visible,sec4:sec4Visible,sec5:sec5Visible,sec6:sec6Visible } = visible;

function observe(el, flag) {
  const obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) flag.value = true;
  });
  if (el.value) obs.observe(el.value);
}

onMounted(() => {
  sections.forEach(s => observe(refs[s], visible[s]));
  visible.sec1.value = true;
});

const progress = computed(() => {
  return (Object.values(visible).filter(v => v.value).length / sections.length) * 100;
});

/* Quiz */
const quizQuestions = ref([
  // ── EASY ──
  {
    q: "What is 15% of £200?",
    answer: 30,
    options: [20, 30, 40],
    selected: null,
    explanation: "15% of 200 = (200 × 15) ÷ 100 = 30"
  },
  {
    q: "If you save £50 in a 5% interest account for 1 year, how much interest do you earn?",
    answer: 2.5,
    options: [2.5, 5, 10],
    selected: null,
    explanation: "(50 × 5 × 1) ÷ 100 = 2.5"
  },

  // ── INTERMEDIATE ──
  {
    q: "A £100 investment grows by 10% each year. What is its value after 2 years (compound)?",
    answer: 121,
    options: [110, 121, 120],
    selected: null,
    explanation: "Year 1: 100 → 110, Year 2: 110 → 121"
  },
  {
    q: "A laptop is sold for £540 after a 10% discount. What was the original price?",
    answer: 600,
    options: [540, 600, 650],
    selected: null,
    explanation: "540 ÷ 0.9 = 600"
  },
  {
    q: "You deposit £1000 at 5% annual interest. How much do you have after 1 year (simple interest)?",
    answer: 1050,
    options: [1025, 1050, 1100],
    selected: null,
    explanation: "(1000 × 5 × 1) ÷ 100 = 50 → 1000 + 50 = 1050"
  },

  // ── HARD ──
  {
    q: "An item costs £120 after a 20% discount. What was the original price?",
    answer: 150,
    options: [100, 140, 150],
    selected: null,
    explanation: "120 is 80% of the original → 120 ÷ 0.8 = 150"
  },
  {
    q: "A £500 investment grows at 8% compound interest per year. What is its value after 2 years?",
    answer: 583.2,
    options: [540, 583.2, 600],
    selected: null,
    explanation: "Year 1: 540, Year 2: 583.2"
  },
  {
    q: "Inflation is 3% per year. If something costs £100 today, what will it cost after 2 years?",
    answer: 106.09,
    options: [103, 106.09, 110],
    selected: null,
    explanation: "100 × 1.03 × 1.03 = 106.09"
  },

  // ── VERY HARD (EXAM STYLE) ──
  {
    q: "You invest £2000 at 6% compound interest. How much will you have after 3 years?",
    answer: 2382.12,
    options: [2360, 2382.12, 2400],
    selected: null,
    explanation: "2000 × 1.06³ = 2382.12"
  },
  {
    q: "A loan of £1000 charges 4% simple interest per year. How much interest is paid after 5 years?",
    answer: 200,
    options: [40, 200, 400],
    selected: null,
    explanation: "(1000 × 4 × 5) ÷ 100 = 200"
  }
]);

function selectAnswer(i,opt){
  if (quizQuestions.value[i].selected === null){
    quizQuestions.value[i].selected = opt;
  }
}

const correctCount = computed(() =>
  quizQuestions.value.filter(q => q.selected === q.answer).length
);

const allAnswered = computed(() =>
  quizQuestions.value.every(q => q.selected !== null)
);

function resetQuiz() {
  quizQuestions.value.forEach(q => q.selected = null);
}
</script>
<style scoped>
/* =========================================
   LESSON 5 PAGE —  Finance
   =========================================*/

.lesson-page {
  padding: 40px;
  max-width: 900px;
  font-family: "Poppins", sans-serif;
}

/* ── Hero ─────────────────────────────────────────────── */
.lesson-hero {
  background: linear-gradient(135deg, #3730a3 0%, #4f46e5 60%, #6366f1 100%);
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
  background: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.07) 0%, transparent 60%);
  pointer-events: none;
}

.lesson-hero-label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.28);
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

.hero-chip-indigo { background: rgba(255,255,255,0.25); }

/* ── Progress ─────────────────────────────────────────── */
.lesson-progress-wrap { margin-bottom: 32px; }

.lesson-progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.lesson-progress-pct { color: #4f46e5; }

.lesson-progress-track {
  height: 8px;
  background: var(--border-color);
  border-radius: 999px;
  overflow: hidden;
}

.lesson-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
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

.lesson-section.visible { opacity: 1; transform: translateY(0); }

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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 15px;
  color: #fff;
  flex-shrink: 0;
}

.s-indigo { background: #4f46e5; }

.section-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0;
}

.section-body { padding: 24px; }

/* ── Text helpers ─────────────────────────────────────── */
.lesson-text {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.7;
  margin: 0 0 20px;
}

.num-highlight {
  color: #4f46e5;
  font-weight: 800;
}

.hl-blue { color: #2563eb; font-weight: 800; }

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

.callout-indigo {
  background: #eef2ff;
  border: 1.5px solid #c7d2fe;
}

body.dark .callout-indigo { background: #1e1b4b; border-color: #4f46e5; }

.callout-icon {
  font-size: 20px;
  color: #f59e0b;
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── Factor Pairs ─────────────────────────────────────── */
.factor-pairs-wrap {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 20px;
}

.fp-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.fp-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.fp-pair {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 8px 14px;
}

.fp-times { color: #94a3b8; font-size: 12px; }
.fp-eq    { color: #4f46e5; font-size: 14px; margin-left: auto; font-weight: 600; }

.fp-result {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  border-top: 1px solid var(--border-color);
  padding-top: 14px;
}

.fp-all {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}

.fp-factor { font-weight: 700; color: var(--text-dark); }
.fp-factor-common { color: #2563eb; font-weight: 800; }

/* ── Method Steps ─────────────────────────────────────── */
.method-wrap {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 20px;
}

.method-number {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.method-steps {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.method-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1.5px solid;
  font-size: 14px;
  font-weight: 600;
}

.method-row-yes  { background: #f0fdf4; border-color: #86efac; color: #15803d; }
.method-row-no   { background: #fef2f2; border-color: #fca5a5; color: #dc2626; opacity: 0.7; }
.method-row-stop { background: #fffbeb; border-color: #fde68a; color: #92400e; opacity: 0.85; }

body.dark .method-row-yes  { background: #052e16; border-color: #16a34a; color: #4ade80; }
body.dark .method-row-no   { background: #450a0a; border-color: #dc2626; color: #f87171; }
body.dark .method-row-stop { background: #422006; border-color: #ca8a04; color: #fbbf24; }

.mr-check { font-size: 16px; width: 20px; flex-shrink: 0; }
.mr-eq    { flex: 1; }
.mr-remainder { font-size: 12px; opacity: 0.7; margin-left: 6px; }
.mr-tag   { display: flex; gap: 6px; }

.factor-tag {
  background: #4f46e5;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
}

.mr-stop-tag {
  font-size: 12px;
  font-weight: 700;
  color: #92400e;
  display: flex;
  align-items: center;
  gap: 5px;
}

body.dark .mr-stop-tag { color: #fbbf24; }

/* ── Whiteboard Diagram ───────────────────────────────── */
.diagram-wrap {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  align-items: start;
}

.whiteboard {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 12px;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.03);
}

body.dark .whiteboard { background: #f8fafc; border-color: #cbd5e1; }

.diagram-svg { width: 100%; height: auto; display: block; }

/* SVG text classes */
.svg-num-center {
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 900;
  fill: #0f172a;
}

.svg-factors-center {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  fill: #0f172a;
}

.svg-factor-circled {
  fill: #0f172a;
}

.svg-big-num {
  font-family: "Poppins", sans-serif;
  font-size: 38px;
  font-weight: 900;
  fill: #0f172a;
}

/* SVG draw animations */
.oval-draw-1 {
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  animation: draw-stroke 0.6s ease forwards 0.3s;
}
.oval-draw-2 {
  stroke-dasharray: 165;
  stroke-dashoffset: 165;
  animation: draw-stroke 0.7s ease forwards 1.2s;
}
.oval-draw-3 {
  stroke-dasharray: 125;
  stroke-dashoffset: 125;
  animation: draw-stroke 0.6s ease forwards 2.0s;
}
.path-draw-1 {
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  animation: draw-stroke 0.7s ease forwards 0.8s;
}
.path-draw-2 {
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  animation: draw-stroke 0.7s ease forwards 1.8s;
}

@keyframes draw-stroke { to { stroke-dashoffset: 0; } }

.diagram-legend {
  display: flex;
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

/* ── Steps panel (HCF) ────────────────────────────────── */
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

.step-dot-a { background: #4f46e5; }
.step-dot-b { background: #7c3aed; }
.step-dot-c { background: #2563eb; }
.step-dot-d { background: #16a34a; }

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

.step-result {
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}

.step-result-blue {
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  border: 2px solid #a5b4fc;
}

body.dark .step-result-blue { background: linear-gradient(135deg, #1e1b4b, #312e81); border-color: #4f46e5; }

.step-result-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #4f46e5;
}

.step-result-val {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-dark);
}

/* ── Explorer ─────────────────────────────────────────── */
.explorer-wrap {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 20px;
}

.explorer-inputs {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.exp-input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.exp-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.exp-input {
  width: 100px;
  padding: 10px 12px;
  border: 2px solid var(--border-color);
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: var(--text-dark);
  background: var(--bg-card);
  text-align: center;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.exp-input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79,70,229,0.12);
}

.exp-and {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  padding-bottom: 10px;
  opacity: 0.6;
}

.explorer-result {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.exp-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.exp-row-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  min-width: 130px;
}

.exp-factor-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.exp-chip {
  padding: 3px 10px;
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  color: var(--text-dark);
}

.exp-chip-common {
  background: #eef2ff;
  border-color: #a5b4fc;
  color: #3730a3;
}

body.dark .exp-chip-common { background: #1e1b4b; border-color: #4f46e5; color: #a5b4fc; }

.exp-hcf-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  border: 2px solid #a5b4fc;
  border-radius: 12px;
  padding: 14px 20px;
}

body.dark .exp-hcf-banner { background: linear-gradient(135deg, #1e1b4b, #312e81); border-color: #4f46e5; }

.exp-hcf-label {
  font-size: 14px;
  font-weight: 700;
  color: #4f46e5;
}

.exp-hcf-eq { font-size: 18px; color: var(--text-primary); opacity: 0.5; }

.exp-hcf-val {
  font-size: 32px;
  font-weight: 900;
  color: #4f46e5;
}

.explorer-placeholder {
  text-align: center;
  padding: 20px;
  color: var(--text-primary);
  opacity: 0.4;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
  border-color: #4f46e5;
  background: #eef2ff;
  color: #4f46e5;
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

/* ── Score panel ──────────────────────────────────────── */
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

.score-next {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #16a34a;
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

.score-next:hover {
  background: #15803d;
  transform: translateY(-1px);
}

.score-retry {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #4f46e5;
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

.score-retry:hover { background: #3730a3; transform: translateY(-1px); }

/* ── Summary ──────────────────────────────────────────── */
.lesson-summary {
  background: linear-gradient(135deg, #3730a3 0%, #4f46e5 100%);
  border-radius: 18px;
  padding: 28px 32px;
  color: #fff;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.lesson-summary.visible { opacity: 1; transform: translateY(0); }

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

.summary-list i { color: #a5b4fc; font-size: 14px; flex-shrink: 0; }

.summary-actions { display: flex; justify-content: flex-end; }

.btn-next {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #3730a3;
  border: none;
  border-radius: 10px;
  padding: 12px 22px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}

.btn-next:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 800px) {
  .lesson-page { padding: 16px; }
  .lesson-hero { padding: 24px 20px; }
  .lesson-hero-title { font-size: 26px; }
  .diagram-wrap { grid-template-columns: 1fr; }
  .quiz-grid { grid-template-columns: 1fr; }
  .exp-input { width: 80px; }
}
</style>