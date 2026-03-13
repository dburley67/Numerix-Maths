<template>
  <div class="lesson-page">

    <!-- ── Lesson Hero ── -->
    <div class="lesson-hero">
      <div class="lesson-hero-label">
        <i class="fa-solid fa-book-open"></i> Lesson 2
      </div>
      <h1 class="lesson-hero-title">Factors, Multiples &amp; HCF</h1>
      <p class="lesson-hero-sub">
        Learn how to find factors of numbers and identify the Highest Common Factor (HCF).
      </p>
      <div class="lesson-hero-chips">
        <span class="hero-chip"><i class="fa-solid fa-circle-question"></i> 15 questions</span>
        <span class="hero-chip"><i class="fa-regular fa-clock"></i> ~25 min</span>
        <span class="hero-chip hero-chip-indigo"><i class="fa-solid fa-signal"></i> Foundation</span>
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

    <!-- ── SECTION 1: What are Factors? ── -->
    <div class="lesson-section" ref="sec1" :class="{ visible: sec1Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">1</div>
        <h2 class="section-title">What are Factors?</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          A <strong>factor</strong> of a number is any whole number that divides into it
          <em>exactly</em>, leaving no remainder. Every number has at least two factors: <strong>1</strong>
          and <strong>itself</strong>.
        </p>

        <!-- Factor pair visual for 12 -->
        <div class="factor-pairs-wrap">
          <div class="fp-title">Factor pairs of <span class="num-highlight">12</span></div>
          <div class="fp-grid">
            <div class="fp-pair" v-for="pair in factorPairs12" :key="pair[0]">
              <span class="fp-num">{{ pair[0] }}</span>
              <span class="fp-times"><i class="fa-solid fa-xmark"></i></span>
              <span class="fp-num">{{ pair[1] }}</span>
              <span class="fp-eq">= 12</span>
            </div>
          </div>
          <div class="fp-result">
            All factors of 12:
            <span class="fp-all">
              <span
                v-for="(f, i) in factors12"
                :key="f"
                class="fp-factor"
                :class="{ 'fp-factor-common': commonFactors.includes(f) }"
              >{{ f }}<span v-if="i < factors12.length - 1">,&nbsp;</span></span>
            </span>
          </div>
        </div>

        <div class="callout callout-indigo" style="margin-top:16px">
          <i class="fa-solid fa-lightbulb callout-icon"></i>
          <div>
            <strong>Tip:</strong> Work from 1 upwards. When you reach a number you already
            have, you've found them all — no need to keep going!
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 2: The Factor Finding Method ── -->
    <div class="lesson-section" ref="sec2" :class="{ visible: sec2Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">2</div>
        <h2 class="section-title">The Factor-Finding Method</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          To find all factors systematically, test each number starting from 1.
          Ask: <em>"Does this divide into my number with no remainder?"</em>
        </p>

        <!-- Animated step-through for finding factors of 12 -->
        <div class="method-wrap">
          <div class="method-number">Finding factors of <span class="num-highlight">12</span></div>
          <div class="method-steps">
            <div
              v-for="step in methodSteps"
              :key="step.divisor"
              class="method-row"
              :class="{
                'method-row-yes': step.divides,
                'method-row-no':  !step.divides,
                'method-row-stop': step.stop
              }"
            >
              <div class="mr-check">
                <i :class="step.divides ? 'fa-solid fa-check' : 'fa-solid fa-xmark'"></i>
              </div>
              <div class="mr-eq">
                12 ÷ {{ step.divisor }} = {{ step.divides ? (12 / step.divisor) : '?' }}
                <span v-if="!step.divides" class="mr-remainder">(remainder {{ 12 % step.divisor }})</span>
              </div>
              <div class="mr-tag" v-if="step.divides">
                <span class="factor-tag">+{{ step.divisor }}</span>
                <span class="factor-tag" v-if="step.divisor !== 12 / step.divisor">+{{ 12 / step.divisor }}</span>
              </div>
              <div class="mr-stop-tag" v-if="step.stop">
                <i class="fa-solid fa-flag-checkered"></i> Already found these!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 3: HCF Diagram (from image) ── -->
    <div class="lesson-section" ref="sec3" :class="{ visible: sec3Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">3</div>
        <h2 class="section-title">Highest Common Factor: 12 and 15</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          The <strong>Highest Common Factor (HCF)</strong> is the largest number that divides
          exactly into two (or more) numbers. Find all factors of each number, then pick
          the biggest one they share.
        </p>

        <!-- HCF Diagram matching the image -->
        <div class="diagram-wrap">
          <div class="whiteboard">
            <svg class="diagram-svg" viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg">

              <!-- Number: 12 -->
              <text x="150" y="52" class="svg-num-center" text-anchor="middle">12</text>

              <!-- Factors of 12 -->
              <text x="150" y="100" class="svg-factors-center" text-anchor="middle">1, 2,</text>
              <!-- The 3 circled -->
              <ellipse cx="211" cy="90" rx="18" ry="14" fill="none" stroke="#2563eb" stroke-width="3" class="oval-draw-1"/>
              <text x="211" y="96" class="svg-factors-center svg-factor-circled" text-anchor="middle">3</text>
              <text x="150" y="100" class="svg-factors-center" text-anchor="middle" dx="72">, 4, 6, 12</text>

              <!-- Blue wavy-ish line from circled 3 down to big 3 -->
              <path d="M 211 104 C 208 130, 215 145, 210 165 C 205 185, 198 195, 200 210"
                fill="none" stroke="#2563eb" stroke-width="6" stroke-linecap="round"
                class="path-draw-1" />

              <!-- Big circled 3 in middle -->
              <ellipse cx="200" cy="232" rx="26" ry="24" fill="none" stroke="#2563eb" stroke-width="3.5" class="oval-draw-2"/>
              <text x="200" y="241" class="svg-big-num" text-anchor="middle">3</text>

              <!-- Blue wavy line from big 3 down to circled 3 in 15's factors -->
              <path d="M 198 256 C 192 278, 185 290, 182 310 C 178 328, 170 335, 168 350"
                fill="none" stroke="#2563eb" stroke-width="6" stroke-linecap="round"
                class="path-draw-2" />

              <!-- Factors of 15 -->
              <text x="150" y="378" class="svg-factors-center" text-anchor="middle">1,</text>
              <!-- The 3 circled in 15's factors -->
              <ellipse cx="172" cy="368" rx="17" ry="14" fill="none" stroke="#2563eb" stroke-width="3" class="oval-draw-3"/>
              <text x="172" y="374" class="svg-factors-center svg-factor-circled" text-anchor="middle">3</text>
              <text x="150" y="378" class="svg-factors-center" text-anchor="middle" dx="42">, 5, 15</text>

              <!-- Number: 15 -->
              <text x="150" y="415" class="svg-num-center" text-anchor="middle">15</text>

            </svg>

            <div class="diagram-legend">
              <span class="legend-item legend-blue">
                <span class="legend-dot" style="background:#2563eb"></span> Common factor path
              </span>
            </div>
          </div>

          <!-- Step panel -->
          <div class="steps-panel">
            <div class="step-item">
              <div class="step-dot step-dot-a">1</div>
              <div class="step-text">
                <strong>List all factors of 12</strong><br />
                <span class="step-ex">
                  <span v-for="(f,i) in factors12" :key="f">
                    <span :class="{ 'hl-blue': commonFactors.includes(f) }">{{ f }}</span><span v-if="i < factors12.length-1">, </span>
                  </span>
                </span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-b">2</div>
              <div class="step-text">
                <strong>List all factors of 15</strong><br />
                <span class="step-ex">
                  <span v-for="(f,i) in factors15" :key="f">
                    <span :class="{ 'hl-blue': commonFactors.includes(f) }">{{ f }}</span><span v-if="i < factors15.length-1">, </span>
                  </span>
                </span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-c">3</div>
              <div class="step-text">
                <strong>Find common factors</strong><br />
                <span class="step-ex">
                  Numbers in <strong>both</strong> lists:&nbsp;
                  <span v-for="(f,i) in commonFactors" :key="f">
                    <span class="hl-blue">{{ f }}</span><span v-if="i < commonFactors.length-1">, </span>
                  </span>
                </span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-d">4</div>
              <div class="step-text">
                <strong>Pick the highest</strong><br />
                <span class="step-ex">
                  HCF of 12 and 15 = <strong class="hl-blue">{{ hcf }}</strong>
                </span>
              </div>
            </div>
            <div class="step-result step-result-blue">
              <span class="step-result-label">HCF</span>
              <span class="step-result-val">HCF(12, 15) = <strong>{{ hcf }}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 4: Interactive HCF Explorer ── -->
    <div class="lesson-section" ref="sec4" :class="{ visible: sec4Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">4</div>
        <h2 class="section-title">Interactive HCF Explorer</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Enter any two numbers and see their factors and HCF calculated step by step.
        </p>

        <div class="explorer-wrap">
          <div class="explorer-inputs">
            <div class="exp-input-group">
              <label class="exp-label">Number A</label>
              <input
                type="number"
                class="exp-input"
                v-model.number="numA"
                min="1" max="200"
                @input="calcExplorer"
              />
            </div>
            <div class="exp-and">and</div>
            <div class="exp-input-group">
              <label class="exp-label">Number B</label>
              <input
                type="number"
                class="exp-input"
                v-model.number="numB"
                min="1" max="200"
                @input="calcExplorer"
              />
            </div>
          </div>

          <div v-if="explorerValid" class="explorer-result">
            <div class="exp-row">
              <span class="exp-row-label">Factors of {{ numA }}:</span>
              <div class="exp-factor-list">
                <span
                  v-for="f in explorerFactorsA"
                  :key="f"
                  class="exp-chip"
                  :class="{ 'exp-chip-common': explorerCommon.includes(f) }"
                >{{ f }}</span>
              </div>
            </div>
            <div class="exp-row">
              <span class="exp-row-label">Factors of {{ numB }}:</span>
              <div class="exp-factor-list">
                <span
                  v-for="f in explorerFactorsB"
                  :key="f"
                  class="exp-chip"
                  :class="{ 'exp-chip-common': explorerCommon.includes(f) }"
                >{{ f }}</span>
              </div>
            </div>
            <div class="exp-row">
              <span class="exp-row-label">Common factors:</span>
              <div class="exp-factor-list">
                <span v-for="f in explorerCommon" :key="f" class="exp-chip exp-chip-common">{{ f }}</span>
              </div>
            </div>
            <div class="exp-hcf-banner">
              <span class="exp-hcf-label">HCF({{ numA }}, {{ numB }})</span>
              <span class="exp-hcf-eq">=</span>
              <span class="exp-hcf-val">{{ explorerHCF }}</span>
            </div>
          </div>
          <div v-else class="explorer-placeholder">
            <i class="fa-solid fa-arrow-up"></i> Enter two valid numbers above
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 5: Quiz ── -->
    <div class="lesson-section" ref="sec5" :class="{ visible: sec5Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">5</div>
        <h2 class="section-title">Test Yourself</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">Find the HCF for each pair of numbers:</p>

        <div class="quiz-grid">
          <div
            v-for="(q, i) in quizQuestions"
            :key="i"
            class="quiz-card"
            :class="{ answered: q.selected !== null }"
          >
            <div class="quiz-q">HCF of <strong>{{ q.a }}</strong> and <strong>{{ q.b }}</strong> ?</div>
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
                <i class="fa-solid fa-circle-check" style="color:#16a34a"></i>
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
        <li><i class="fa-solid fa-check"></i> A <strong>factor</strong> divides into a number with no remainder</li>
        <li><i class="fa-solid fa-check"></i> Find factors by testing from 1 upwards in pairs</li>
        <li><i class="fa-solid fa-check"></i> Stop when you reach a number already recorded</li>
        <li><i class="fa-solid fa-check"></i> The <strong>HCF</strong> is the largest factor shared by both numbers</li>
      </ul>
      <div class="summary-actions">
        <button class="btn-next">
          Next Lesson: Standard Form <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

/* ── Static data ── */
const factorPairs12 = [[1,12],[2,6],[3,4]];
const factors12     = [1,2,3,4,6,12];
const factors15     = [1,3,5,15];
const commonFactors = [1,3];
const hcf           = 3;

const methodSteps = [
  { divisor:1,  divides:true,  stop:false },
  { divisor:2,  divides:true,  stop:false },
  { divisor:3,  divides:true,  stop:false },
  { divisor:4,  divides:true,  stop:false },
  { divisor:5,  divides:false, stop:false },
  { divisor:6,  divides:true,  stop:true  },
];

/* ── Scroll reveal ── */
const sections = ['sec1','sec2','sec3','sec4','sec5','sec6'];
const refs     = {};
const visible  = {};
sections.forEach(s => { refs[s] = ref(null); visible[s] = ref(false); });

const { sec1,sec2,sec3,sec4,sec5,sec6 } = refs;
const { sec1:sec1Visible,sec2:sec2Visible,sec3:sec3Visible,sec4:sec4Visible,sec5:sec5Visible,sec6:sec6Visible } = visible;

const observers = [];
function observe(el, flag) {
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) flag.value = true; },
    { threshold: 0.1 }
  );
  if (el.value) obs.observe(el.value);
  observers.push(obs);
}

onMounted(() => {
  sections.forEach(s => observe(refs[s], visible[s]));
  visible['sec1'].value = true;
});
onUnmounted(() => observers.forEach(o => o.disconnect()));

const progress = computed(() => {
  const flags = sections.map(s => visible[s].value);
  return (flags.filter(Boolean).length / flags.length) * 100;
});

/* ── Explorer ── */
const numA = ref(12);
const numB = ref(15);

function getFactors(n) {
  if (!n || n < 1 || !Number.isInteger(n)) return [];
  const f = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) f.push(i);
  return f;
}

const explorerValid   = computed(() => numA.value >= 1 && numB.value >= 1 && Number.isInteger(numA.value) && Number.isInteger(numB.value) && numA.value <= 200 && numB.value <= 200);
const explorerFactorsA = computed(() => getFactors(numA.value));
const explorerFactorsB = computed(() => getFactors(numB.value));
const explorerCommon  = computed(() => explorerFactorsA.value.filter(f => explorerFactorsB.value.includes(f)));
const explorerHCF     = computed(() => explorerCommon.value.length ? Math.max(...explorerCommon.value) : 1);

function calcExplorer() {} // reactivity handles it

/* ── Quiz ── */
const quizQuestions = ref([
  { a:8,  b:12, answer:4, options:[2,4,6],  selected:null, explanation:"Factors of 8: 1,2,4,8. Factors of 12: 1,2,3,4,6,12. Highest common = 4." },
  { a:6,  b:9,  answer:3, options:[2,3,6],  selected:null, explanation:"Factors of 6: 1,2,3,6. Factors of 9: 1,3,9. Highest common = 3." },
  { a:20, b:30, answer:10, options:[5,10,15], selected:null, explanation:"Factors of 20: 1,2,4,5,10,20. Factors of 30: 1,2,3,5,6,10,15,30. Highest common = 10." },
  { a:14, b:21, answer:7, options:[3,7,14], selected:null, explanation:"Factors of 14: 1,2,7,14. Factors of 21: 1,3,7,21. Highest common = 7." },
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
   LESSON 2 PAGE — Factors, Multiples & HCF
   ========================================================= */

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