<template>
  <div class="lesson-page">

    <!-- ── Lesson Hero ── -->
    <div class="lesson-hero">
      <div class="lesson-hero-label">
        <i class="fa-solid fa-book-open"></i> Lesson 3
      </div>
      <h1 class="lesson-hero-title">Standard Form</h1>
      <p class="lesson-hero-sub">
        Learn how to read and calculate numbers written in standard form using powers of 10.
      </p>
      <div class="lesson-hero-chips">
        <span class="hero-chip"><i class="fa-solid fa-circle-question"></i> 10 questions</span>
        <span class="hero-chip"><i class="fa-regular fa-clock"></i> ~18 min</span>
        <span class="hero-chip hero-chip-teal"><i class="fa-solid fa-signal"></i> Foundation</span>
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

    <!-- ── SECTION 1: What is Standard Form? ── -->
    <div class="lesson-section" ref="sec1" :class="{ visible: sec1Visible }">
      <div class="section-header">
        <div class="section-num s-teal">1</div>
        <h2 class="section-title">What is Standard Form?</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Standard form is a way of writing very large (or very small) numbers more neatly.
          It always looks like this:
        </p>

        <div class="sf-anatomy">
          <div class="sf-expression">
            <span class="sf-a">A</span>
            <span class="sf-op">×</span>
            <span class="sf-base">10</span>
            <span class="sf-exp">n</span>
          </div>
          <div class="sf-labels">
            <div class="sf-label-item sf-label-a">
              <div class="sf-label-line"></div>
              <span><strong>A</strong> — a number between 1 and 10</span>
            </div>
            <div class="sf-label-item sf-label-n">
              <div class="sf-label-line"></div>
              <span><strong>n</strong> — how many places to move the digit</span>
            </div>
          </div>
        </div>

        <div class="callout callout-teal">
          <i class="fa-solid fa-lightbulb callout-icon"></i>
          <div>
            Think of the power (<strong>n</strong>) as an instruction:
            <em>"move the digit left by n places, filling each gap with a zero."</em>
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 2: The Diagram ── -->
    <div class="lesson-section" ref="sec2" :class="{ visible: sec2Visible }">
      <div class="section-header">
        <div class="section-num s-teal">2</div>
        <h2 class="section-title">Worked Example: 5 × 10⁴ = 50,000</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Take <strong>5 × 10⁴</strong>. The power is <strong class="hl-teal">4</strong>, so we
          move the 5 four places to the left, placing a zero in every gap it leaves behind.
        </p>

        <!-- Whiteboard SVG diagram matching the image -->
        <div class="diagram-wrap">
          <div class="whiteboard">
            <svg class="diagram-svg" viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg">

              <!-- 5 * 10^4  top expression -->
              <text x="60" y="55" class="svg-expr">5 * 10</text>
              <!-- Circled exponent 4 -->
              <ellipse cx="195" cy="28" rx="16" ry="16"
                fill="none" stroke="#2563eb" stroke-width="3"
                class="oval-draw-1"/>
              <text x="195" y="34" class="svg-exp-num" text-anchor="middle">4</text>

              <!-- Expansion line: 5 * 10*10*10*10 -->
              <text x="30" y="110" class="svg-expr-sm">5 *</text>
              <!-- Big oval around 10*10*10*10 -->
              <ellipse cx="218" cy="105" rx="118" ry="24"
                fill="none" stroke="#2563eb" stroke-width="3.5"
                class="oval-draw-2"/>
              <text x="75" y="115" class="svg-expr-sm">10*10*10*10</text>

              <!-- Result -->
              <text x="170" y="185" class="svg-result" text-anchor="middle">50,000</text>

            </svg>
            <div class="diagram-legend">
              <span class="legend-item">
                <span class="legend-dot" style="background:#2563eb"></span>
                Power circled = times to multiply by 10
              </span>
            </div>
          </div>

          <!-- Step panel -->
          <div class="steps-panel">
            <div class="step-item">
              <div class="step-dot step-dot-1">1</div>
              <div class="step-text">
                <strong>Read the power</strong><br/>
                <span class="step-ex">5 × 10<sup>4</sup> — power is <span class="hl-teal">4</span></span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-2">2</div>
              <div class="step-text">
                <strong>Expand what 10⁴ means</strong><br/>
                <span class="step-ex">10 × 10 × 10 × 10 = <span class="hl-teal">10,000</span></span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-3">3</div>
              <div class="step-text">
                <strong>Multiply</strong><br/>
                <span class="step-ex">5 × 10,000 = <span class="hl-teal">50,000</span></span>
              </div>
            </div>
            <div class="step-result step-result-teal">
              <span class="step-result-label">Answer</span>
              <span class="step-result-val">5 × 10⁴ = <strong>50,000</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 3: Place Value Shift ── -->
    <div class="lesson-section" ref="sec3" :class="{ visible: sec3Visible }">
      <div class="section-header">
        <div class="section-num s-teal">3</div>
        <h2 class="section-title">The Digit-Shift Method</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Another way to think about it: each power of 10 <strong>shifts the digit one place to the left</strong>,
          and a zero fills the empty space. Watch how the 5 moves with each step:
        </p>

        <!-- Animated power ladder -->
        <div class="power-ladder">
          <div
            v-for="row in powerRows"
            :key="row.power"
            class="pl-row"
            :class="{ 'pl-row-active': activePower === row.power }"
            @click="activePower = row.power"
          >
            <div class="pl-expr">
              5 × 10<sup>{{ row.power }}</sup>
            </div>
            <div class="pl-arrow"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="pl-number">
              <span
                v-for="(digit, i) in row.digits"
                :key="i"
                class="pl-digit"
                :class="{
                  'pl-digit-five':  digit === '5',
                  'pl-digit-zero':  digit === '0',
                  'pl-digit-comma': digit === ','
                }"
              >{{ digit }}</span>
            </div>
            <div class="pl-zeros">
              <span class="pl-zero-tag">{{ row.power }} zero{{ row.power !== 1 ? 's' : '' }}</span>
            </div>
          </div>
        </div>

        <div class="callout callout-teal" style="margin-top:16px">
          <i class="fa-solid fa-circle-info callout-icon"></i>
          <div>
            Click any row to highlight it. Notice the digit <strong>5</strong> always moves
            left by the number of places equal to the power — zeros fill in from the right.
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 4: Interactive Explorer ── -->
    <div class="lesson-section" ref="sec4" :class="{ visible: sec4Visible }">
      <div class="section-header">
        <div class="section-num s-teal">4</div>
        <h2 class="section-title">Interactive Standard Form Calculator</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Choose your coefficient and power, then see the full expansion and result.
        </p>

        <div class="calc-wrap">
          <div class="calc-inputs">
            <div class="calc-input-group">
              <label class="calc-label">Coefficient (A)</label>
              <div class="calc-slider-row">
                <input type="range" min="1" max="9" v-model.number="coeff" class="calc-slider" />
                <span class="calc-val">{{ coeff }}</span>
              </div>
            </div>
            <div class="calc-times">× 10</div>
            <div class="calc-input-group">
              <label class="calc-label">Power (n)</label>
              <div class="calc-slider-row">
                <input type="range" min="1" max="6" v-model.number="power" class="calc-slider" />
                <span class="calc-val">{{ power }}</span>
              </div>
            </div>
          </div>

          <div class="calc-display">
            <div class="calc-expression">
              {{ coeff }} × 10<sup>{{ power }}</sup>
            </div>
            <div class="calc-expand">
              = {{ coeff }} × {{ expandedTens }}
            </div>
            <div class="calc-result-banner">
              <span class="calc-result-label">= </span>
              <span class="calc-result-num">{{ formattedResult }}</span>
            </div>
          </div>

          <!-- Digit shift visualiser -->
          <div class="digit-shift-wrap">
            <div class="ds-label">Digit shift:</div>
            <div class="ds-boxes">
              <div
                v-for="(cell, i) in digitCells"
                :key="i"
                class="ds-cell"
                :class="{
                  'ds-cell-five': cell.isFive,
                  'ds-cell-zero': cell.isZero,
                  'ds-cell-empty': cell.isEmpty
                }"
              >{{ cell.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 5: Quiz ── -->
    <div class="lesson-section" ref="sec5" :class="{ visible: sec5Visible }">
      <div class="section-header">
        <div class="section-num s-teal">5</div>
        <h2 class="section-title">Test Yourself</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">Convert each standard form expression to an ordinary number:</p>

        <div class="quiz-grid">
          <div
            v-for="(q, i) in quizQuestions"
            :key="i"
            class="quiz-card"
            :class="{ answered: q.selected !== null }"
          >
            <div class="quiz-q">
              What is <strong>{{ q.a }} × 10<sup>{{ q.p }}</sup></strong> ?
            </div>
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
              >{{ opt }}</button>
            </div>
            <div v-if="q.selected !== null" class="quiz-feedback">
              <template v-if="q.selected === q.answer">
                <i class="fa-solid fa-circle-check" style="color:#0d9488"></i>
                <span class="feedback-correct">{{ q.explanation }}</span>
              </template>
              <template v-else>
                <i class="fa-solid fa-circle-xmark" style="color:#dc2626"></i>
                <span class="feedback-wrong">{{ q.explanation }}</span>
              </template>
            </div>
          </div>
        </div>

        <div v-if="allAnswered" class="score-panel">
          <div class="score-icon">
            <i class="fa-solid fa-star" v-for="n in scoreStars" :key="n"></i>
          </div>
          <div class="score-text">You got <strong>{{ correctCount }} / {{ quizQuestions.length }}</strong> correct!</div>
          <button class="score-retry" @click="resetQuiz">
            <i class="fa-solid fa-rotate-left"></i> Try Again
          </button>
        </div>
      </div>
    </div>

    <!-- ── Summary ── -->
    <div class="lesson-summary" ref="sec6" :class="{ visible: sec6Visible }">
      <h3 class="summary-title"><i class="fa-solid fa-circle-check"></i> Lesson Summary</h3>
      <ul class="summary-list">
        <li><i class="fa-solid fa-check"></i> Standard form is written as <strong>A × 10ⁿ</strong></li>
        <li><i class="fa-solid fa-check"></i> The power <strong>n</strong> tells you how many places to move the digit left</li>
        <li><i class="fa-solid fa-check"></i> Each place vacated by the digit is filled with a <strong>zero</strong></li>
        <li><i class="fa-solid fa-check"></i> 5 × 10⁴ = 5 × 10,000 = <strong>50,000</strong></li>
      </ul>
      <div class="summary-actions">
        <button class="btn-next">
          Back to Lessons <i class="fa-solid fa-grid-2"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

/* ── Scroll reveal ── */
const secNames = ['sec1','sec2','sec3','sec4','sec5','sec6'];
const secRefs    = Object.fromEntries(secNames.map(s => [s, ref(null)]));
const secVisible = Object.fromEntries(secNames.map(s => [s, ref(false)]));

const { sec1,sec2,sec3,sec4,sec5,sec6 } = secRefs;
const { sec1:sec1Visible,sec2:sec2Visible,sec3:sec3Visible,
        sec4:sec4Visible,sec5:sec5Visible,sec6:sec6Visible } = secVisible;

const observers = [];
function observe(el, flag) {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) flag.value = true; }, { threshold: 0.1 });
  if (el.value) obs.observe(el.value);
  observers.push(obs);
}
onMounted(() => {
  secNames.forEach(s => observe(secRefs[s], secVisible[s]));
  secVisible['sec1'].value = true;
});
onUnmounted(() => observers.forEach(o => o.disconnect()));

const progress = computed(() => (secNames.filter(s => secVisible[s].value).length / secNames.length) * 100);

/* ── Power ladder ── */
const powerRows = [
  { power: 1, digits: ['5','0'] },
  { power: 2, digits: ['5','0','0'] },
  { power: 3, digits: ['5',',','0','0','0'] },
  { power: 4, digits: ['5','0',',','0','0','0'] },
  { power: 5, digits: ['5','0','0',',','0','0','0'] },
];
const activePower = ref(4);

/* ── Interactive calculator ── */
const coeff = ref(5);
const power = ref(4);

const expandedTens = computed(() => {
  const val = Math.pow(10, power.value);
  return val.toLocaleString();
});

const result = computed(() => coeff.value * Math.pow(10, power.value));
const formattedResult = computed(() => result.value.toLocaleString());

const digitCells = computed(() => {
  const totalLen = power.value + 1; // e.g. power=4 → 50000 = 5 digits
  const cells = [];
  const resultStr = result.value.toString(); // no commas
  for (let i = 0; i < resultStr.length; i++) {
    const ch = resultStr[i];
    cells.push({
      label:  ch,
      isFive: ch === String(coeff.value) && i === 0,
      isZero: ch === '0',
      isEmpty: false,
    });
  }
  return cells;
});

/* ── Quiz ── */
const quizQuestions = ref([
  { a:3, p:2, answer:'300',    options:['30','300','3,000'],   selected:null, explanation:'3 × 10² = 3 × 100 = 300.' },
  { a:7, p:3, answer:'7,000',  options:['700','7,000','70,000'], selected:null, explanation:'7 × 10³ = 7 × 1,000 = 7,000.' },
  { a:2, p:5, answer:'200,000',options:['20,000','200,000','2,000,000'], selected:null, explanation:'2 × 10⁵ = 2 × 100,000 = 200,000.' },
  { a:4, p:1, answer:'40',     options:['4','40','400'],       selected:null, explanation:'4 × 10¹ = 4 × 10 = 40.' },
]);

function selectAnswer(i, opt) {
  if (quizQuestions.value[i].selected !== null) return;
  quizQuestions.value[i].selected = opt;
}
const correctCount = computed(() => quizQuestions.value.filter(q => q.selected === q.answer).length);
const allAnswered  = computed(() => quizQuestions.value.every(q => q.selected !== null));
const scoreStars   = computed(() => {
  const p = correctCount.value / quizQuestions.value.length;
  return p === 1 ? 3 : p >= 0.5 ? 2 : 1;
});
function resetQuiz() { quizQuestions.value.forEach(q => (q.selected = null)); }
</script>

<style scoped>
/* =========================================================
   LESSON 3 — Standard Form  (teal / cyan accent)
   ========================================================= */

.lesson-page {
  padding: 40px;
  max-width: 900px;
  font-family: "Poppins", sans-serif;
}

/* ── Hero ─────────────────────────────────────────────── */
.lesson-hero {
  background: linear-gradient(135deg, #0f766e 0%, #0d9488 55%, #14b8a6 100%);
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

.hero-chip-teal { background: rgba(255,255,255,0.25); }

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

.lesson-progress-pct { color: #0d9488; }

.lesson-progress-track {
  height: 8px;
  background: var(--border-color);
  border-radius: 999px;
  overflow: hidden;
}

.lesson-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #0d9488, #14b8a6);
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

.s-teal { background: #0d9488; }

.section-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0;
}

.section-body { padding: 24px; }

/* ── Text ─────────────────────────────────────────────── */
.lesson-text {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.7;
  margin: 0 0 20px;
}

.hl-teal { color: #0d9488; font-weight: 800; }

/* ── Standard Form Anatomy ────────────────────────────── */
.sf-anatomy {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.sf-expression {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-family: "Poppins", sans-serif;
}

.sf-a {
  font-size: 52px;
  font-weight: 900;
  color: #0d9488;
  line-height: 1;
}

.sf-op {
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
  padding-top: 10px;
}

.sf-base {
  font-size: 52px;
  font-weight: 900;
  color: var(--text-dark);
  line-height: 1;
}

.sf-exp {
  font-size: 28px;
  font-weight: 900;
  color: #2563eb;
  line-height: 1;
  vertical-align: super;
  margin-top: 2px;
}

.sf-labels {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
}

.sf-label-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  color: var(--text-primary);
  max-width: 180px;
}

.sf-label-a span  { color: #0d9488; }
.sf-label-n span  { color: #2563eb; }

.sf-label-line {
  width: 2px;
  height: 16px;
  border-radius: 2px;
}

.sf-label-a .sf-label-line { background: #0d9488; }
.sf-label-n .sf-label-line { background: #2563eb; }

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

.callout-teal {
  background: #f0fdfa;
  border: 1.5px solid #99f6e4;
}

body.dark .callout-teal { background: #022c22; border-color: #0d9488; }

.callout-icon {
  font-size: 20px;
  color: #f59e0b;
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── Whiteboard Diagram ───────────────────────────────── */
.diagram-wrap {
  display: grid;
  grid-template-columns: 300px 1fr;
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

.svg-expr {
  font-family: "Poppins", sans-serif;
  font-size: 34px;
  font-weight: 900;
  fill: #0f172a;
}

.svg-exp-num {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 900;
  fill: #0f172a;
}

.svg-expr-sm {
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 800;
  fill: #0f172a;
}

.svg-result {
  font-family: "Poppins", sans-serif;
  font-size: 38px;
  font-weight: 900;
  fill: #0d9488;
}

.oval-draw-1 {
  stroke-dasharray: 105;
  stroke-dashoffset: 105;
  animation: draw-stroke 0.55s ease forwards 0.3s;
}

.oval-draw-2 {
  stroke-dasharray: 480;
  stroke-dashoffset: 480;
  animation: draw-stroke 0.9s ease forwards 0.9s;
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

.step-dot-1 { background: #0d9488; }
.step-dot-2 { background: #0891b2; }
.step-dot-3 { background: #2563eb; }

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

.step-result-teal {
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border: 2px solid #5eead4;
}

body.dark .step-result-teal { background: linear-gradient(135deg, #022c22, #134e4a); border-color: #0d9488; }

.step-result-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #0d9488;
}

.step-result-val {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-dark);
}

/* ── Power Ladder ─────────────────────────────────────── */
.power-ladder {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pl-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
  flex-wrap: wrap;
}

.pl-row:hover {
  border-color: #0d9488;
  transform: translateX(4px);
}

.pl-row-active {
  border-color: #0d9488 !important;
  background: #f0fdfa !important;
  box-shadow: 0 4px 14px rgba(13,148,136,0.12);
}

body.dark .pl-row-active { background: #022c22 !important; }

.pl-expr {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-primary);
  min-width: 90px;
}

.pl-expr sup { color: #0d9488; }

.pl-arrow {
  color: #94a3b8;
  font-size: 13px;
}

.pl-number {
  display: flex;
  align-items: center;
  gap: 1px;
  font-size: 22px;
  font-weight: 900;
}

.pl-digit-five  { color: #0d9488; }
.pl-digit-zero  { color: #0f172a; }
.pl-digit-comma { color: #94a3b8; font-size: 16px; margin: 0 1px; }

.pl-zeros {
  margin-left: auto;
}

.pl-zero-tag {
  background: #e0f2fe;
  color: #0369a1;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid #bae6fd;
}

body.dark .pl-zero-tag { background: #0c2a3f; border-color: #0369a1; color: #7dd3fc; }

/* ── Calculator ───────────────────────────────────────── */
.calc-wrap {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.calc-inputs {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.calc-input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 140px;
}

.calc-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-primary);
}

.calc-slider-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.calc-slider {
  flex: 1;
  accent-color: #0d9488;
  cursor: pointer;
}

.calc-val {
  font-size: 22px;
  font-weight: 900;
  color: #0d9488;
  min-width: 28px;
  text-align: center;
}

.calc-times {
  font-size: 24px;
  font-weight: 800;
  color: var(--text-dark);
  padding-top: 20px;
}

.calc-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
}

.calc-expression {
  font-size: 28px;
  font-weight: 800;
  color: var(--text-dark);
}

.calc-expression sup { color: #0d9488; }

.calc-expand {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  opacity: 0.8;
}

.calc-result-banner {
  margin-top: 8px;
  font-size: 42px;
  font-weight: 900;
  color: #0d9488;
}

/* ── Digit shift boxes ────────────────────────────────── */
.digit-shift-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.ds-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
}

.ds-boxes {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.ds-cell {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
  border: 2px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-dark);
  transition: background 0.2s, border-color 0.2s;
}

.ds-cell-five {
  background: #f0fdfa;
  border-color: #0d9488;
  color: #0d9488;
  box-shadow: 0 0 0 3px rgba(13,148,136,0.15);
}

.ds-cell-zero {
  background: #e0f2fe;
  border-color: #7dd3fc;
  color: #0369a1;
}

body.dark .ds-cell-five { background: #022c22; }
body.dark .ds-cell-zero { background: #0c2a3f; border-color: #0369a1; color: #7dd3fc; }

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
  flex-direction: column;
  gap: 7px;
  margin-bottom: 10px;
}

.quiz-opt {
  padding: 9px 14px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-card);
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-dark);
  cursor: pointer;
  text-align: left;
  transition: all 0.15s;
}

.quiz-opt:not(:disabled):hover {
  border-color: #0d9488;
  background: #f0fdfa;
  color: #0d9488;
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
}

.feedback-correct { color: #0d9488; }
.feedback-wrong   { color: #dc2626; }

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
  background: #0d9488;
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

.score-retry:hover { background: #0f766e; transform: translateY(-1px); }

/* ── Summary ──────────────────────────────────────────── */
.lesson-summary {
  background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%);
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

.summary-list i { color: #99f6e4; font-size: 14px; flex-shrink: 0; }

.summary-actions { display: flex; justify-content: flex-end; }

.btn-next {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #0f766e;
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
@media (max-width: 750px) {
  .lesson-page { padding: 16px; }
  .lesson-hero  { padding: 24px 20px; }
  .lesson-hero-title { font-size: 26px; }
  .diagram-wrap { grid-template-columns: 1fr; }
  .quiz-grid    { grid-template-columns: 1fr; }
  .calc-inputs  { flex-direction: column; align-items: stretch; }
  .calc-times   { padding-top: 0; text-align: center; }
  .sf-labels    { flex-direction: column; align-items: center; }
}
</style>
