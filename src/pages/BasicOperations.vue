<template>
  <div class="lesson-page">

    <!-- ── Lesson Header ── -->
    <div class="lesson-hero">
      <div class="lesson-hero-label">
        <i class="fa-solid fa-book-open"></i> Lesson 1
      </div>
      <h1 class="lesson-hero-title">Basic Operations</h1>
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
        <h2 class="section-title">What are the 4 operations??</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          The 4 operations are Addition, Subtraction, Multiplication, And Division.
        </p>

        <!-- Range rule card -->
        <div class="rule-cards">
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
          <div class="rule-card rule-card-Mult">
            <div class="rule-range">Multiplication</div>
            <div class="rule-arrow">
              <i class="fa-solid fa-minus"></i>
            </div>
            <div class="rule-label">Multiplication is <strong>INCREASING</strong> by itself a number of times</div>
            <div class="rule-desc">for example in 5x4, 5 is INCREASED by itself 3 times to get 20</div>
          </div>
          <div class="rule-card rule-card-Div">
            <div class="rule-range">Division</div>
            <div class="rule-arrow">
              <i class="fa-solid fa-minus"></i>
            </div>
            <div class="rule-label">Division is <strong>DECREASING</strong> a value by finding how many times a value fits into it</div>
            <div class="rule-desc">for example, 12÷4, 4 fits into 12 three times, DECREASING the value to 3</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── SECTION 2: The Diagram ── -->
    <div class="lesson-section" ref="sec2" :class="{ visible: sec2Visible }">
      <div class="section-header">
        <div class="section-num">2</div>
        <h2 class="section-title">Worked Example 1: 20+5</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Let's add 5 to <strong>20</strong> .
          We look at the bigger number of <strong class="text-red">20</strong> and add
          <strong>5</strong>from there to get <span class="text-up">25</span>.
        </p>

        <!-- Whiteboard Diagram -->
        <div class="diagram-wrap">
          <div class="whiteboard">
            <svg class="diagram-svg" viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg">

              <!-- 20 number -->
              <text x="80" y="110" class="svg-num-black">20</text>
              

              
              

              <!-- Red arrow from sum to ans -->
              <line x1="176" y1="145" x2="258" y2="148"
                stroke="#dc2626" stroke-width="3"
                stroke-linecap="round"
                class="svg-draw line-draw" />

              <!-- 5-9 label -->
              <text x="265" y="158" class="svg-label-black svg-fade" style="animation-delay:0.9s">25</text>

              
              <!-- Plus sign -->
               <line x1='110' y1='150' x2='130' y2='150' stroke='black' />
               <line x1='120' y1='140' x2='120' y2='160' stroke='black' />

              <!-- Result: 5 in red below -->
              <text x="96" y="232" class="svg-num-result svg-fade" style="animation-delay:1.2s">5</text>

            </svg>

            <div class="diagram-legend">
              <span class="legend-item legend-red">
                <span class="legend-dot"></span> Digit to add
              </span>
              
            </div>
          </div>

          <!-- Step-by-step breakdown -->
          <div class="steps-panel">
            <div class="step-item">
              <div class="step-dot step-dot-1">1</div>
              <div class="step-text">
                <strong>Identify</strong> the larger digit.<br />
                <span class="step-ex">20 <strong>OR</strong> 5 — the larger digit is <strong>20</strong></span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-2">2</div>
              <div class="step-text">
                <strong>Increase</strong> the larger number by the smaller number<br />
                <span class="step-ex"><span class="hl-red">20</span> increased by <strong>5</strong> </span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-3">3</div>
              <div class="step-text">
                <strong>Add</strong> increase the larger digit <br />
                <span class="step-ex"><span class="hl-black">20+5</span> becomes <span class="hl-green">25</span></span>
              </div>
            </div>
            <div class="step-result">
              <span class="step-result-label">Answer:</span>
              <span class="step-result-val">20+5 → <strong>25</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lesson-section" ref="sec3" :class="{ visible: sec3Visible }">
      <div class="section-header">
        <div class="section-num">3</div>
        <h2 class="section-title">Worked Example 2: 20-5</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Let's subtract <strong>5</strong> from 20.
          We look at the first number <strong class="text-red">20</strong> and check that it's larger than the next number
          <strong>(5)</strong>, then reduce the first value by the second.
        </p>

        <!-- Whiteboard Diagram -->
        <div class="diagram-wrap">
          <div class="whiteboard">
            <svg class="diagram-svg" viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg">

              <!-- 20 number -->
              <text x="80" y="110" class="svg-num-black">20</text>
              
              <!-- Red arrow from sum to ans -->
              <line x1="176" y1="145" x2="258" y2="148"
                stroke="#dc2626" stroke-width="3"
                stroke-linecap="round"
                class="svg-draw line-draw" />

              <!-- 5-9 label -->
              <text x="265" y="158" class="svg-label-black svg-fade" style="animation-delay:0.9s">15</text>

              
              <!-- Minus sign -->
               <line x1='110' y1='150' x2='130' y2='150' stroke='black' />
               

              <!-- Result: 5 in red below -->
              <text x="96" y="232" class="svg-num-result svg-fade" style="animation-delay:1.2s">5</text>

            </svg>

            <div class="diagram-legend">
              <span class="legend-item legend-red">
                <span class="legend-dot"></span> Digit to subtract
              </span>
              
            </div>
          </div>

          <!-- Step-by-step breakdown -->
          <div class="steps-panel">
            <div class="step-item">
              <div class="step-dot step-dot-1">1</div>
              <div class="step-text">
                <strong>Identify</strong> the first digit.<br />
                <span class="step-ex">20 <strong>minus</strong> 5 — the first digit is <strong>20</strong></span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-2">2</div>
              <div class="step-text">
                <strong>Decrease</strong> the larger number by the smaller number<br />
                <span class="step-ex"><span class="hl-red">20</span> decreased by <strong>5</strong> </span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-3">3</div>
              <div class="step-text">
                <strong>Minus</strong> from the larger digit <br />
                <span class="step-ex"><span class="hl-black">20-5</span> becomes <span class="hl-green">15</span></span>
              </div>
            </div>
            <div class="step-result">
              <span class="step-result-label">Answer:</span>
              <span class="step-result-val">20-5 → <strong>15</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lesson-section" ref="sec4" :class="{ visible: sec4Visible }">
      <div class="section-header">
        <div class="section-num">4</div>
        <h2 class="section-title">Worked Example 3: 3x5</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Let's multiply 3  <strong>5</strong> times.
          We look at the first digit <strong class="text-red">3</strong> — we need 5 times this amount.
        </p>

        <!-- Whiteboard Diagram -->
        <div class="diagram-wrap">
          <div class="whiteboard">
            <svg class="diagram-svg" viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg">

              <!-- 20 number -->
              <text x="80" y="110" class="svg-num-black">3</text>
              
              <!-- Red arrow from sum to ans -->
              <line x1="176" y1="145" x2="258" y2="148"
                stroke="#dc2626" stroke-width="3"
                stroke-linecap="round"
                class="svg-draw line-draw" />

              <!-- 5-9 label -->
              <text x="265" y="158" class="svg-label-black svg-fade" style="animation-delay:0.9s">15</text>

              
              <!-- Plus sign -->
               <line x1='80' y1='130' x2='110' y2='160' stroke='black' />
               <line x1='110' y1='130' x2='80' y2='160' stroke='black' />


              <!-- Result: 5 in red below -->
              <text x="96" y="232" class="svg-num-result svg-fade" style="animation-delay:1.2s">5</text>

            </svg>

            <div class="diagram-legend">
              <span class="legend-item legend-red">
                <span class="legend-dot"></span> Digit to multiply by
              </span>
              
            </div>
          </div>

          <!-- Step-by-step breakdown -->
          <div class="steps-panel">
            <div class="step-item">
              <div class="step-dot step-dot-1">1</div>
              <div class="step-text">
                <strong>Decide</strong> whether you want to multiply the 3 by the 5 or the 5 by the 3.<br />
                <span class="step-ex">3 by the 5 is easier to work with due to small numbers, 5 by the 3 is easier due to less numbers <strong>5</strong> instances of 3</span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-2">2</div>
              <div class="step-text">
                <strong>Simplify down</strong> Multiplying 3 by the 5<br />
                <span class="step-ex">3x5 would turn out as <strong>+3+3+3+3</strong></span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-3">3</div>
              <div class="step-text">
                <strong>Add values</strong> You now complete the calculation you simplified. 3+3+3+3+3=15.<br />
                <span class="step-ex"><span class="hl-black">3x5</span> becomes <span class="hl-green">15</span></span>
              </div>
            </div>
            <div class="step-result">
              <span class="step-result-label">Answer:</span>
              <span class="step-result-val">3x5 → <strong>15</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lesson-section" ref="sec5" :class="{ visible: sec5Visible }">
      <div class="section-header">
        <div class="section-num">5</div>
        <h2 class="section-title">Worked Example 4: 20÷5</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Let's divide <strong>20</strong> by 5.
          We look at the first number <strong class="text-red">20</strong> we will be reducing this number by <span class="text-up">5</span> times.
        </p>

        <!-- Whiteboard Diagram -->
        <div class="diagram-wrap">
          <div class="whiteboard">
            <svg class="diagram-svg" viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg">

              <!-- 20 number -->
              <text x="80" y="110" class="svg-num-black">20</text>
              
              <svg height="1000" width="1000" xmlns="http://www.w3.org/2000/svg">
  <circle r="5" cx="120" cy="135" fill="black" />
  <circle r="5" cx="120" cy="165" fill="black" />
</svg>
            
              <!-- Red arrow from sum to ans -->
              <line x1="176" y1="145" x2="258" y2="148"
                stroke="#dc2626" stroke-width="3"
                stroke-linecap="round"
                class="svg-draw line-draw" />

              <!-- 5-9 label -->
              <text x="265" y="158" class="svg-label-black svg-fade" style="animation-delay:0.9s">4</text>

              
              <!-- Minus sign -->
               <line x1='100' y1='150' x2='140' y2='150' stroke='black' />
               

              <!-- Result: 5 in red below -->
              <text x="96" y="232" class="svg-num-result svg-fade" style="animation-delay:1.2s">5</text>

            </svg>

            <div class="diagram-legend">
              <span class="legend-item legend-red">
                <span class="legend-dot"></span> Digit to subtract
              </span>
              
            </div>
          </div>


          <!-- Step-by-step breakdown -->
          <div class="steps-panel">
            <div class="step-item">
              <div class="step-dot step-dot-1">1</div>
              <div class="step-text">
                <strong>Check</strong> the first value is larger than the second.<br />
                <span class="step-ex">20 <span class="hl-red">></span> 5. So yes it is.</span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-2">2</div>
              <div class="step-text">
                <strong>Simplify </strong>it down<br />
                <span class="step-ex">5 x 2 = <span class="hl-red">10</span> </span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-3">3</div>
              <div class="step-text">
                <strong>Find the answer</strong> How many times does 10 go into 20?.<br />
                <span class="step-ex"><span class="hl-black">10</span> goes into 20 <span class="hl-green">2</span>times. then half that to get your answer </span>
              </div>
            </div>
            <div class="step-result">
              <span class="step-result-label">Answer:</span>
              <span class="step-result-val">20÷5 → <strong>4</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    

    <!-- ── SECTION 4: Try It Yourself ── -->
    <div class="lesson-section" ref="sec6" :class="{ visible: sec6Visible }">
      <div class="section-header">
        <div class="section-num">6</div>
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
    <div class="lesson-summary" ref="sec7" :class="{ visible: sec7Visible }">
      <h3 class="summary-title"><i class="fa-solid fa-circle-check"></i> Lesson Summary</h3>
      <ul class="summary-list">
        <li><i class="fa-solid fa-check"></i> Each operation works <em>differently</em> remember which one is which</li>
        <li><i class="fa-solid fa-check"></i> <strong>Addition and subtraction</strong> → Linear changes</li>
        <li><i class="fa-solid fa-check"></i> <strong>Multiplication and division</strong> → changes relavent to themselves</li>
        <li><i class="fa-solid fa-check"></i> Always use the right operation <em>+, -, x, ÷</em></li>
      </ul>
      <div class="summary-actions">
        <button class="btn-next" @click="router.push('/Lesson7')">
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
const sec5 = ref(null); const sec5Visible = ref(false);
const sec6 = ref(null); const sec6Visible = ref(false);
const sec7 = ref(null); const sec7Visible = ref(false);

const observers = [];

function observe(el, flag) {
  const obs = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) flag.value = true; },
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
  observe(sec5, sec5Visible);
  observe(sec6, sec6Visible);
  observe(sec7, sec7Visible);
  // trigger first section immediately
  sec1Visible.value = true;
});

onUnmounted(() => observers.forEach(o => o.disconnect()));

/* ── Progress (rough: sections visible) ── */
const progress = computed(() => {
  const flags = [sec1Visible.value, sec2Visible.value, sec3Visible.value, sec4Visible.value, sec5Visible.value, sec6Visible.value, sec7Visible.value];
  return (flags.filter(Boolean).length / flags.length) * 100;
});

/* ── Quiz ── */
const quizQuestions = ref([
  {
    number: "5+7",
    options: [10, 12, 15],
    answer: 12,
    selected: null,
    explanation: "5 increased by 7 is 12."
  },
  {
    number: "15-6",
    options: [7, 8, 9],
    answer: 9,
    selected: null,
    explanation: "go down 6 from 15"
  },
  {
    number: "2x6",
    options: [12, 13, 9],
    answer: 12,
    selected: null,
    explanation: "2x6 is like 6+6, 6 twice. "
  },
  {
    number: "20÷4",
    options: [5, 7, 9],
    answer: 5,
    selected: null,
    explanation: "5 rounds 8 up → 6.9, then 9 rounds 6 up → 7."
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